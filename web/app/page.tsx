'use client'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    // send the user to the static HTML file
    window.location.replace('/index.html')
  }, [])

  // nothing to render, we just redirect
  return null
}
