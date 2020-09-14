import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Welcome from './component/welcome'
import Clock from './component/state-clock'
import TestPortal from './component/Test-Portal'
import WordAdder from './component/Test-pureComponent'
import ReduxTestComp from './redux/reduxTestComp'
import createStore from './redux/redux'
import reducer from './redux/reducer'
import {Provider} from './redux/react-redux';

ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
  <div>
    <Welcome name="hank" />
    <Clock />
    <Clock />
    <TestPortal />
    <WordAdder />
  </div>,
  document.getElementById('main')
)


ReactDOM.render(   
  <Provider store={createStore(reducer)}>        
    <ReduxTestComp />    
  </Provider>,     
 document.querySelector('.reduxBox')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
