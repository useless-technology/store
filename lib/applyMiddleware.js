import compose from './compose'

/**
 * applyMiddleware is a function produce(return) enhancer function
 * middleware only can extend the dispatch
 * @param  {...any} middlewares
 */
export default (...middlewares) => {
  return createStore =>
    (...args) => {
      const store = createStore(...args)

      const middlewareAPI = {
        getState: store.getState
        // dispatch: (...args) => dispatch(args)
      }

      const chain = middlewares.map(middleware => middleware(middlewareAPI))
      const dispatch = compose(...chain)(store.dispatch)

      return {
        ...store,
        dispatch
      }
    }
}
