import * as React from 'react'
import { Stateless, RenderCom } from './stateless'
import Stateful from './stateful'

const StatePage = (props) => {
  return (
    <>
      <Stateless name="hank" />
      <RenderCom name="nimo" />
      <Stateful />
    </>
  )
}

export default StatePage
