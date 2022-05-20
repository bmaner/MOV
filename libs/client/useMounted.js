import React, { useState, useEffect } from 'react'

function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 2000)
  }, [])

  return mounted
}

export default useMounted
