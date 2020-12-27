import React, { useState, useEffect, useCallback } from 'react'

function useMatchMedia ({ query, initialValue = false }) {
  const [isMediaMatched, setIsMediaMatched] = useState(initialValue)

  const handleChange = useCallback((e) => {
    setIsMediaMatched(e.matches)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setIsMediaMatched(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return isMediaMatched
}

export default useMatchMedia
