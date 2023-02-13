import React from 'react'
import { connect } from './react-redux'
import { add } from './action'


const mapStateToProps = state => {
  return {
    num: state.num
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNum:() => {
      dispatch(add('reduxTestComp'))
    }
  }
}
// 写个测试组件 展示
const reduxTestComp = (props) => {
  // debugger
  return (
    <div className="redux">
      <div>自定义redux测试用例</div>
      <button
        onClick={() => {
          props.addNum()
        }}
      >
        增加
      </button>
      <div>Num:{props.num}</div>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(reduxTestComp)
