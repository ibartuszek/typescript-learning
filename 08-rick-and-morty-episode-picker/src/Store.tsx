import React from "react"

interface IState {
  episodes: [],
  favourites: []
}

const initialState = {
  episodes: [],
  favourites: []
}

export const Store = React.createContext(initialState)

function reducer() {
  // pass
}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}