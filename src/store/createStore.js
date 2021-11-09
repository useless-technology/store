import isPlainObject from './utils/isPlainObject'
import ActionTypes from './utils/actionTypes'

/**
 *
 * @param {Function} reducer
 * @param {any} preloadedState
 * @param {Function} enhancer
 */
const createStore = (reducer, preloadedState, enhancer) => {
  /**
   * JavaScript function overload manually, `preloadedState` is `enhancer` now
   * looks like: ```createStore(..., () => {})```
   */
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  /**
   * means this time createStore function has three arguments,
   * of course, enchancer must be a function
   */
  if (typeof enhancer === 'function') {
    enhancer(createStore)(reducer, preloadedState)
  }

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
   * TODO: why
   *
   * shallow copy
   *
   * bug happen when call subscribe & cancel in the dispatch
   */
  const ensureCanMutateNextListeners = () => {
    if (nextListeners === currentListeners) {
      nextListeners = [...currentListeners]
    }
  }

  /**
   * forbid `store.state` to get state
   * @returns state
   */
  const getState = () => {
    if (isDispatching) {
      /**
       * some error texts
       */
    }

    return currentState
  }

  /**
   * add listener
   * @param {*} listener fn which is called after dispatch
   * @returns a function to cancael subscribe like loadsh: `_.throttling.cancel`
   * TODO: may be enhance it as `before dispatch` & `after dispatch` like `vuex`
   */
  const subscribe = listener => {
    if (typeof listener !== 'function') {
      /**
       * error texts
       */
    }

    if (isDispatching) {
      /**
       * error texts
       */
    }

    let isSubscribed = true

    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    return () => {
      /**
       * cancel function can't called twice
       */
      if (!isSubscribed) {
        return
      }

      if (isDispatching) {
        /**
         * error texts
         */
      }

      isSubscribed = false

      /**
       * delete it listener
       * set currentListeners = null and reset currentListeners = nextListeners in dispatch
       */
      ensureCanMutateNextListeners()
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
      currentListeners = null
    }
  }

  /**
   *
   * @param {*} action
   */
  const dispatch = action => {
    if (!isPlainObject(action)) {
      /**
       * error texts: must be plain object ```prototype.prototype === prototype```
       * use `thunk` to dispatch other type action
       */
    }

    if (typeof action.type === 'undefined') {
      /**
       * this means type is required!!!
       */
    }

    if (isDispatching) {
      /**
       * error texts
       */
    }

    /**
     * TODO: try catch ???
     */
    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    /**
     * TODO: why
     */
    const listeners = (currentListeners = nextListeners)
    listeners.forEach(fn => fn())

    return action
  }

  const replaceReducer = nextReducer => {
    /**
     * nextReducer must be a function
     */
    if (typeof nextReducer !== 'function') {
      /**
       * error texts
       */
    }

    currentReducer = nextReducer

    /**
     * TODO: why
     */
    dispatch({ type: ActionTypes.REPLACE })
  }

  /**
   * symbol [$$observable] means it is a private function
   * don't know what it does in repo
   */
  const observable = () => {}

  /**
   * init state function
   */
  dispatch({ type: ActionTypes.INIT })

  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  }
}

export default createStore
