import React from 'react';
import ReactDOM from 'react-dom';
import {Parent, Child} from "./App";
import './index.css';

function App() {
  return (
    <div>
      <h1>React hook example</h1>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
