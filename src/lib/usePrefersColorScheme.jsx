import React, { useState, useEffect, useCallback } from 'react'
import useMatchMedia from './useMatchMedia'

function usePrefersDarkTheme (initialValue = false) {
  const [ isMatching, toggleState] = useMatchMedia({
    query: '(prefers-color-scheme: dark)',
    initialValue: initialValue
  })

  return [ isMatching, toggleState ]
}

export default usePrefersDarkTheme
