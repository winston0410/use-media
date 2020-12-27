import React, { useState, useEffect, useCallback } from 'react'
import useMatchMedia from './useMatchMedia'

function usePrefersReducedMotion (initialValue = false) {
  return useMatchMedia({
    query: '(prefers-reduced-motion: reduce)',
    initialValue: initialValue
  })
}

export default usePrefersReducedMotion
