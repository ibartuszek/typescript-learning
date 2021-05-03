import React from 'react'

export default function App() {
  const reducer = (state, action) => {
    // Easy way
    // console.log(action);
    // if (action === "ADD") {
    //   return state + 1;
    // } else if (action === "SUB") {
    //   return state - 1;
    // } else if (action === "RES") {
    //   return 0;
    // }
    // return state;

    // Elegant
    // const obj = {
    //   "ADD": state + 1,
    //   "SUB": state - 1,
    //   "RES": state = 0
    // }
    // return obj[action];

    switch(action) {
      case "ADD":
        return state + 1;
      case "SUB":
        return state - 1;
      case "RES":
        return state = 0;
      default:
        return state;
    }
  };

  // const [value, setValue] = React.useState("");
  const [count, dispatch] = React.useReducer(reducer, 0)
  
  // in dispatch it can be object as well e.g.:
  // () => dispatch({type: "ADD", payload: 0, ...})
  return (
    <>
      <h1>React reducer example</h1>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}>+</button>
      <button onClick={() => dispatch("SUB")}>-</button>
      <button onClick={() => dispatch("RES")}>reset</button>
    </>
  )
}
