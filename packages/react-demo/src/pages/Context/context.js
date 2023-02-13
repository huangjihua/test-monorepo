import * as React from 'react'

// 16.x之后的Context使用了Provider和Customer模式，在顶层的Provider中传入value,在子孙级的Customer中获取该值，并且能够传递函数，用来修改
//  context声明一个全局的context定义

const { ThemeConsumer, ThemeProvider } = React.createContext() // 创建context并暴露并暴露Consumer和Provider模式 ，成对出现
export { ThemeConsumer, ThemeProvider }
