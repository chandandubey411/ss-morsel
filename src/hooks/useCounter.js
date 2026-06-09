import { useState, useEffect, useRef } from 'react'

export const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isActive])

  useEffect(() => {
    if (!isActive) return

    const step = (end - start) / (duration / 16)
    let current = start

    const timer = setInterval(() => {
      current += step
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isActive, end, start, duration])

  return { count, ref }
}
