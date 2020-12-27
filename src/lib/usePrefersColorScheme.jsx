import React, { useState, useEffect, useCallback } from 'react'
import useMatchMedia from './useMatchMedia'

function usePrefersDarkTheme (initialValue = false) {
  return useMatchMedia({
    query: '(prefers-color-scheme: dark)',
    initialValue: initialValue
  })
}

export default usePrefersDarkTheme
