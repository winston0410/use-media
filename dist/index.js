// src/lib/useMatchMedia.jsx
import React, {useState, useEffect, useCallback} from "react";
function useMatchMedia({query, initialValue = false}) {
  const [isMediaMatched, setIsMediaMatched] = useState(initialValue);
  const handleChange = useCallback((e) => {
    setIsMediaMatched(e.matches);
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setIsMediaMatched(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return isMediaMatched;
}
var useMatchMedia_default = useMatchMedia;

// src/lib/usePrefersColorScheme.jsx
import React2, {useState as useState2, useEffect as useEffect2, useCallback as useCallback2} from "react";
function usePrefersDarkTheme(initialValue = false) {
  return useMatchMedia_default({
    query: "(prefers-color-scheme: dark)",
    initialValue
  });
}
var usePrefersColorScheme_default = usePrefersDarkTheme;

// src/lib/usePrefersReducedMotion.jsx
import React3, {useState as useState3, useEffect as useEffect3, useCallback as useCallback3} from "react";
function usePrefersReducedMotion(initialValue = false) {
  return useMatchMedia_default({
    query: "(prefers-reduced-motion: reduce)",
    initialValue
  });
}
var usePrefersReducedMotion_default = usePrefersReducedMotion;
export {
  useMatchMedia_default as useMatchMedia,
  usePrefersColorScheme_default as usePrefersColorScheme,
  usePrefersReducedMotion_default as usePrefersReducedMotion
};
