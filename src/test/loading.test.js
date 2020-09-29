import React,{useRef} from 'react';
import useLoading from '../hooks-componet/useLoading';

const LoadList = ({ text }) => {
  const ref = useRef(null);
  const loading = useLoading(ref);
  return (
    <div className="scrollitem" ref={ref}>{loading ? 'loading' : text}</div>
  )
}

export default LoadList;
