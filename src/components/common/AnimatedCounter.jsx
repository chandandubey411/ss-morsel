import { useCounter } from '../../hooks/useCounter'

const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2000, className = '' }) => {
  const { count, ref } = useCounter(end, duration)

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default AnimatedCounter
