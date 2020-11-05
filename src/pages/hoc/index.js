import * as React from 'react'
import inheritHOC from './hoc'
import Base from '../../classComponent/HOC/base'
import Stateful from '../StateComponent/stateful'

const HocBase = inheritHOC(Base)
const Hoc = inheritHOC(Stateful)

const HotIndex = (props) => {
  return (
    <>
      <HocBase name="hank" />
      <Hoc data={[1, [2, [3, [4, [5, [6, 7]]]]]]} />
    </>
  )
}

export default HotIndex
