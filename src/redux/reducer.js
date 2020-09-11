export default function reducer(action,state) {
  //通过传进来的 action.type 让管理者去匹配要做的事情
  switch (action.type){
      case 'add':
          return {
              ...state,
              num: state.num + 1
          }
      case 'minus':
          return {
              ...state,
              num: state.num - 1
          }
      case 'changeNum':
            return {
                ...state,
                num: state.num + action.val
            }
      // 没有匹配到的方法 就返回默认的值
      default:
          return state;
  }
}
