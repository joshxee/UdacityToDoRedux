// Library
function createStore (reducer) {
  // the state

  // get the state

  // Listen to changes on the state

  // Update the state

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) !== listener)
    }
  }
  
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

// App Code
function todos (state = [], action) {
  if(action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }
  return state
}