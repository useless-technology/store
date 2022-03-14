// @ts-check

// @ts-ignore
import { isPlainObject, ActionTypes, error } from 'utils'

// TODO subscribe while dispatch something...

/**
 *
 * @param {Function} reducer
 * @param {any} preloadedState
 * @param {Function} enhancer
 */
export const createStore = (reducer, preloadedState, enhancer) => {
  /**
   * JavaScript function overload manually, `preloadedState` is `enhancer` now
   * looks like: `createStore(reducer, () => {})`
   */
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  /**
   * Means this time createStore function has three arguments,
   * of course, enchancer must be a function.
   *
   * Enhancer is a function with `createStore` arg
   * and return a function manipulate `reducer` and `preloadedState`(if exist).
   */
  if (typeof enhancer === 'function') enhancer(createStore)(reducer, preloadedState)

  /**
   * we can do more checks before main program, like
   * ```if (typeof reducer !== 'function') {...}```
   * or use TypeScript, here is a study production, so ...
   */
  // some checks

  /**
   * main
   */
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []
  let nextListeners = currentListeners
  let isDispatching = false

  /**
   * shallow copy
   * evoid bugs when listeners are triggering, subscribe and unsubscribe at the same time
   */
  const ensureCanMutateNextListeners = () => {
    if (nextListeners === currentListeners) nextListeners = [...currentListeners]
  }

  /**
   * forbid `store.state` to get state
   * @returns state
   */
  const getState = () => {
    /**
     * this error exist in reducer
     */
    if (isDispatching)
      error('The reducer has already received the state as an argument.')

    return currentState
  }

  /**
   * add listener
   * @param {*} listener fn which is called after dispatch
   * @returns a function to cancael subscribe like loadsh: `_.throttling.cancel`
   * TODO: may be enhance it as `before dispatch` & `after dispatch` like `vuex`
   *
   * caveats:
   *  1. The subscriptions are snapshotted before every `dispatch`.
   *    So, if you subscribe or unsubscribe while dispatching, this will take effect
   *    in next `dispatch`.
   *  2. The listener should not expect to see all state changes.
   */
  const subscribe = listener => {
    if (typeof listener !== 'function') error('`listener` must be a function')

    if (isDispatching) error(`call subscribe while dispatching, see caveat-1`)

    let isSubscribed = true

    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    return () => {
      /**
       * cancel function can't called twice
       */
      if (!isSubscribed) return

      if (isDispatching) error(`call unsubscribe while dispatching, see caveat-1`)

      isSubscribed = false

      /**
       * delete it listener
       * set currentListeners = null and reset currentListeners = nextListeners in dispatch
       */
      ensureCanMutateNextListeners()

      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1) // also can use filter

      currentListeners = null
    }
  }

  /**
   * the only way to trigger state change
   * @param {*} action
   */
  const dispatch = action => {
    if (!isPlainObject(action)) error('Action must be a plain object.')

    /**
     * this means type is required!!!
     */
    if (typeof action.type === 'undefined') error('Action must have a not nil type.')

    /**
     * this error exist in reducer
     */
    if (isDispatching) error('Can not dispatch action in the reducer.')

    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    listeners.forEach(fn => fn && fn())

    // any useful info
    return action
  }

  const replaceReducer = nextReducer => {
    if (typeof nextReducer !== 'function') error('`nextReducer` must be a function')

    currentReducer = nextReducer

    /**
     * default branch
     */
    dispatch({ type: ActionTypes.REPLACE })
  }

  // TODO
  const observable = () => {}

  /**
   * init state function, default branch
   */
  dispatch({ type: ActionTypes.INIT })

  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  }
}
