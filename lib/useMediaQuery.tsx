import { useEffect, useState } from 'react'

/**
 * use this function for media queries instead of react-responsive
 * to avoid hydration mismatch errors
 * 
 * Modified from link below
 * @see https://observablehq.com/@werehamster/avoiding-hydration-mismatch-when-using-react-hooks
 * 
 * Original github thread
 * @see https://github.com/chakra-ui/chakra-ui/issues/3580 
 * 
 * @param mediaQueryString
 * @returns {unknown}
 */
export default function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean>()

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)
    const listener = () => setMatches(!!mediaQueryList.matches)
    listener()
    mediaQueryList.addEventListener('change', listener) // updated from .addListener
    return () => mediaQueryList.removeEventListener('change', listener) // updated from .removeListener
  }, [mediaQueryString])

  return matches
}