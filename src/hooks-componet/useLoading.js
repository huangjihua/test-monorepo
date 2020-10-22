import { useState, useEffect } from 'react'
const useLoading = (ref) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!ref.current) {
      return () => {}
    }
    const node = ref.current
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(false)
          observer.unobserve(entry.target)
        }
      })
    })
    if (node != null) {
      observer.observe(node)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref])
  return loading
}

export default useLoading
