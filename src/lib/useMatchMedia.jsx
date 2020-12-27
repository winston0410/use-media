import React, { useState, useEffect, useCallback } from 'react'

function useMatchMedia ({ query, initialValue = false }) {
  const [isMediaMatched, setIsMediaMatched] = useState(initialValue)

  const handleChange = useCallback((e) => {
    setIsMediaMatched(e.matches)
  }, [])

  const toggleState = useCallback(() => {
    setIsMediaMatched(prevState => !prevState)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setIsMediaMatched(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return [isMediaMatched, toggleState]
}

export default useMatchMedia
