import React, { useReducer } from 'react'
import store, { reducer, initialState } from './store' // 根组件挂载即可全局使用
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Divider, Layout, Menu, Breadcrumb } from 'antd'
import StatePage from './pages/StateComponent/index'
import HotIndex from './pages/hoc/index'
import BindHoc from './pages/hoc/bind-hoc'
import Input from './component/input'
import { demoSync, demoUseState } from './hooks-component/'
import GroupButton, { Button } from './classComponent/Base/group-button'
import logo from './logo.svg'
import './App.css'
// import EditUser from './classComponent/HOC/ToggleVisible';
import Ustate from './pages/hooks/useState'
import { EffectDemo1, EffectDemo2, EffectDemo3 } from './pages/hooks/useEffect'

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const InputBind = BindHoc(Input)

const HooksMenuItem = () => {
  return (
    <>
      <Menu
        defaultOpenKeys={['sub1']}
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu icon={<LaptopOutlined />} key="sub1" title="组件">
          <Menu.Item key="1">
            <Link to="/">组件发展</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/combine-component">组合组件</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu icon={<LaptopOutlined />} key="sub2" title="Hooks">
          <Menu.Item key="1">
            <Link to="/hooks/useState">useState</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/hooks/useEffect">useEffect</Link>
          </Menu.Item>

          <Menu.Item key="5">
            <Link to="/hooks">hooks 学习</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/deep-hook">深入hook用法</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/unstated-next">unstated-next状态管理</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/react-memo">react-memo</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<LaptopOutlined />} key="sub3" title="Reduce">
          <Menu.Item key="9">自定义reduce</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Router>
        <Layout>
          <Layout>
            <Sider className="site-layout-background" width={200}>
              <HooksMenuItem />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Divider />
                <p>
                  globalState-{state.name} : {state.count}
                </p>
                <Divider />
                <Switch>
                  <Route exact path="/">
                    <StatePage />
                    <HotIndex />
                  </Route>
                  <Route path="/hooks/useState">
                    <Ustate />
                    <br />
                    <button onClick={() => dispatch({ type: 'increment' })}>
                      Update State Hank
                    </button>
                  </Route>

                  <Route path="/hooks/useEffect">
                    <EffectDemo1 />
                    <EffectDemo2 />
                    <EffectDemo3 />
                  </Route>
                  <Route path="/combine-component">
                    <p>组合式组件</p>
                    <GroupButton
                      onChange={(e) => {
                        console.log('onChange', e)
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
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  )
}

export default App

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
