import React from 'react';
import PropTypes from 'prop-types'

/**
 *  Provider组件
 * 
 * @export
 * @class Provider
 * @extends {React.Component}
 */
export class Provider extends React.Component {
  // 需要声明静态属性 来指定context对象的属性，context固定写法
  static childContextTypes = {
    store: PropTypes.object
  }
  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }

  // 实现getChildContext方法,返回context对象,固定写法  
  getChildContext() {
    return {store: this.store}
  }

  render() {
    return this.props.children
  }

}

/**
 * connect 实现
 * connect接收mapStateToProps、mapDispatchToProps两个方法，然后返回一个高阶函数，这个高阶函数接收一个组件，返回一个高阶组件（其实就是给传入的组件增加一些属性和功能）connect根据传入的map，将state和dispatch(action)挂载子组件的props上
 * @export
 * @param {Function} mapStateToProps
 * @param {Function} mapDispatchToProps
 * @returns 高阶函数
 */
export function connect (mapStateToProps, mapDispatchToProps) {

  return function (Component) {
    class Connect extends React.Component {
      componentDidMount() {
        // 从context里获取store并订阅更新
        this.context.store.subscribe(this.handleStoreUpdate.bind(this));
      }
      handleStoreUpdate() {
        // 触发更新
        this.forceUpdate() // 这简单起见，采用了强制更新组件，其实可以采用setState来触发子组件更新

        // this.setState()
      }
      render() {
        return (
          <Component 
          {...this.props} // 传入该组件的props,需要由connect这个高阶组件原样传回原组件 
          {...mapStateToProps(this.context.store.getState())} // 根据mapStateToProps把state挂到this.props上      
          {...mapDispatchToProps(this.context.store.dispatch)} // 根据mapDispatchToProps把dispatch(action)挂到this.props上       
          />
        )
      }
    }
    Connect.contextTypes = {
      store: PropTypes.object
    }
    return Connect
  }
}