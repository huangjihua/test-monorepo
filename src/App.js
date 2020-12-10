/* eslint-disable no-extra-semi */
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
import RenderPropsMouseTracker from './pages/render-props'
import RenderPropsMouseTracker2 from './pages/render-props/index2'

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const InputBind = BindHoc(Input)

// 利用 Render props 包下
class Menus extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Menu
        defaultOpenKeys={['sub1']}
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        {this.props.list.map((subMenu) => (
          <SubMenu icon={<LaptopOutlined />} key={subMenu.key} title={subMenu.title}>
            {subMenu.list.map((item, num) => (
              <Menu.Item key={num + 1}>
                <Link to={item.to}>{item.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    )
  }
}

const HooksMenuItem = () => {
  return (
    <>
      <Menus
        list={[
          {
            key: 'sub1',
            title: 'HOC-组合-Render Props',
            list: [
              { to: '/', name: 'HOC' },
              { to: '/combine-component', name: '组合组件' },
              { to: '/render-props', name: 'Render Props' },
            ],
          },
          {
            key: 'sub2',
            title: 'Hooks',
            list: [
              { to: '/hooks/useState', name: 'useState' },
              { to: '/hooks/useEffect', name: 'useEffect' },
              { to: '/hooks/hooks', name: 'hooks 学习' },
              { to: '/hooks/deep-hook', name: '深入hook用法' },
              { to: '/hooks/unstated-next', name: 'unstated-next状态管理' },
              { to: '/hooks/react-memo', name: 'react-memo' },
            ],
          },
          {
            key: 'sub3',
            title: 'Reduce',
            list: [
              {
                to: '/reduce/custom-reduce',
                name: '自定义reduce',
              },
            ],
          },
        ]}
        title="组件"
      />
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

                  <Route path="/render-props">
                    <RenderPropsMouseTracker />

                    <RenderPropsMouseTracker2 />
                  </Route>
                  {/* <Route path="/deep-hook">
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
