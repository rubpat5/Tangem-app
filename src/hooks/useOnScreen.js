import {useEffect, useMemo, useState} from "react";

export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(true)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}
