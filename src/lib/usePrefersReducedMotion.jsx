import React, { useState, useEffect, useCallback } from 'react'
import useMatchMedia from './useMatchMedia'

function usePrefersReducedMotion (initialValue = false) {
  const [ isMatching, toggleState] = useMatchMedia({
    query: '(prefers-reduced-motion: reduce)',
    initialValue: initialValue
  })

  return [ isMatching, toggleState ]
}

export default usePrefersReducedMotion
