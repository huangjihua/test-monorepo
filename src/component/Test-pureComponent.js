import React from 'react'
// 大部分情况下，你可以使用 React.PureComponent 来代替手写 shouldComponentUpdate。但它只进行浅比较，所以当 props 或者 state 某种程度是可变的话，浅比较会有遗漏，那你就不能使用它了。当数据结构很复杂时，情况会变得麻烦。例如，你想要一个 ListOfWords 组件来渲染一组用逗号分开的单词。它有一个叫做 WordAdder 的父组件，该组件允许你点击一个按钮来添加一个单词到列表中。以下代码并不正确：问题在于 PureComponent 仅仅会对新老 this.props.words 的值进行简单的对比。由于代码中 WordAdder 的 handleClick 方法改变了同一个 words 数组，使得新老 this.props.words 比较的其实还是同一个数组。即便实际上数组中的单词已经变了，但是比较结果是相同的。可以看到，即便多了新的单词需要被渲染， ListOfWords 却并没有被更新。


class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

export default class WordAdder extends React.Component {
  constructor(props) {
    super(props); 
    this.text = '确定' // 简单属性可以更新
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这部分代码很糟，而且还有 bug
    const words = this.state.words;
    words.push('marklar'+ Math.random(0,9));
    console.log('words:',words) // 这里数组数据变化了 UI并没有更新
    this.text = '取消'
    this.setState({words: words});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.text}</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}