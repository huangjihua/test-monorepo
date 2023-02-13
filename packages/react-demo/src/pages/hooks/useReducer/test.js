import React, { useReducer, useCallback, useEffect } from 'react'

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: false,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case 'FETCH_FAIL':
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      throw new Error()
  }
}

function Demo() {
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    error: false,
    msg: '',
    data: {},
  })

  const getData = useCallback(async () => {
    try {
      dispatch({ type: 'FETCH_INIT' })
      const response = await fetch('https://www.mxnzp.com/api/lottery/common/latest?code=ssq')
      const res = await response.json()

      if (res.code) {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      } else {
        dispatch({ type: 'FETCH_FAIL', payload: res.msg })
      }
    } catch (error) {
      dispatch({ type: 'FETCH_FAIL', payload: error })
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <Loading loading={state.loading}>
      <p>开奖号码： {state.data.openCode}</p>
    </Loading>
  )
}

function Loading(props) {
  return props.loading ? <div style={{ background: 'yellow' }} /> : <div>END</div>
}
export default Demo
