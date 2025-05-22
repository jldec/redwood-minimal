'use client'

import { time } from './utils'
import { useState, useEffect } from 'react'

export function Clock() {
  console.log('Clock')
  const [val, setVal] = useState('Clock')

  useEffect(() => {
    const interval = setInterval(() => {
      setVal(`Clock: ${time()}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border-purple-500 border-2 m-1 p-2 rounded-md min-w-xs font-mono text-center">
      {val}
    </div>
  )
}
