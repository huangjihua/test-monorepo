// 写个测试组件 展示
const reduxTest = (props) => {
  return (
    <div className="redux">
      <div>自定义redux测试用例</div>
      <button
        onClick={() => {
          store.dispatch({ type: 'add', playload: props })
        }}
      >
        增加
      </button>
      <div>Num:{state.num}</div>
    </div>
  )
}

export default reduxTest
