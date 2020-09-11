import React, { useReducer } from 'react';
import store, { reducer, initialState } from './store';  // 根组件挂载即可全局使用
import logo from './logo.svg';
import './App.css';



function App() {
  const [state,dispatch] = useReducer(reducer, initialState)

  return (
    <store.Provider value={{state,dispatch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div id="main">
        </div>
        <div className="reduxBox"></div>
      </div>
  <div onClick={() => dispatch({type:'increment'})}>{state.name} : {state.count}</div>
    </store.Provider>
  );
}

export default App;
