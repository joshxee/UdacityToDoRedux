function createStore () {
  // the state

  // get the state

  // Listen to changes on the state

  // Update the state

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return {
    getState,
    subscribe
  }
}

const store = createStore()
store.subscribe(() => {
  console.log(`the new state is: ${store.getState()}`)
})