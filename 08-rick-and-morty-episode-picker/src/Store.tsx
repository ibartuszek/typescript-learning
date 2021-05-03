import React from "react"

interface IState {
  episodes: [],
  favourites: []
}

interface IAction {
  type: string,
  payload: any
}

const initialState = {
  episodes: [],
  favourites: []
}

export const Store = React.createContext(initialState)

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return {...state, episodes: action.payload }
    default: 
      return state
  }
}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}