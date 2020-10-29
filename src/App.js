import React, { useReducer } from 'react';
import store, { reducer, initialState } from './store';  // 根组件挂载即可全局使用
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Divider } from "antd";
import Stateless from "./component/stateless";
import Stateful from "./component/stateful";
import inheritHOC from "./classComponent/HOC/hoc";
import BindHoc from "./classComponent/HOC/bind-hoc";
import Base from "./classComponent/HOC/base";
import Input from "./component/input";
import Hooks from "./hooks-component/";
import GroupButton, { Button } from "./classComponent/Base/group-button";
import logo from './logo.svg';
import './App.css';
import EditUser from './classComponent/HOC/ToggleVisible';


const Hoc = inheritHOC(Stateful);

const HocBase = inheritHOC(Base);
const InputBind = BindHoc(Input);

function App() {
  const [state,dispatch] = useReducer(reducer, initialState)

  // return (
  //   <store.Provider value={{state,dispatch}}>
  //     <div className="App">
  //       <header className="App-header">
  //         <img alt="logo"
  //           className="App-logo"
  //           src={logo}
  //         />
  //       </header>
  //       <div id="main">
  //       </div>
  //       <div className="reduxBox"></div>
  //     </div>
  //     <div onClick={() => dispatch({type:'increment'})}>{state.name} : {state.count}</div>
  //     <EditUser />
  //   </store.Provider>
  // );
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">组件发展</Link>
          <Link to="/hooks">hooks 学习</Link>
          <Link to="/combine-component">组合组件</Link>
          <Link to="/page">Table</Link>
          <Link to="/deep-hook">深入hook用法</Link>
          <Link to="/unstated-next">unstated-next状态管理</Link>
          <Link to="/react-memo">react-memo</Link>

          <Divider />
          <p>globalState-{state.name} : {state.count}</p>
          <Divider />
          <Switch>
            <Route exact
              path="/"
            >
              <p>Stateless </p>
              <Stateless />
              <p>Stateful </p>
              <Stateful />
              <p>HOC </p>
              <HocBase />
              <p>HOC JSON化数据</p>
              <Hoc data={[1, [2, [3, [4, [5, [6, 7]]]]]]} />
            </Route>
            <Route path="/hooks">
              <Hooks />
            </Route>
            <Route path="/combine-component">
              <p>组合式组件</p>
              <GroupButton
                onChange={e => {
                  console.log("onChange", e);
                }}
              >
                <Button value="red">red</Button>
                <Button value="yellow">yellow</Button>
                <Button value="blue">blue</Button>
                <Button value="white">white</Button>
              </GroupButton>
            </Route>
            {/* <Route path="/page">
              <Page />
            </Route>
            <Route path="/deep-hook">
              <DeepLearn />
            </Route>
            <Route path="/unstated-next">
              <UnStatedNext />
            </Route>
            <Route path="/react-memo">
              <ReactMemo />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
