import React from "react";

// const { Provider, Consumer } = React.createContext();
const Store = React.createContext();

// Provider
export function Parent(props) {
  const obj = {text: "random text"};
  return <Store.Provider value={obj}>{props.children}</Store.Provider>
}

// Consumer
export function Child() {
  const hook = React.useContext(Store);
  return <div>{hook.text}</div>;
}