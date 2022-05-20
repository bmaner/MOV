import React, { useState, useEffect } from 'react'
import useStore from './store'

function actionByKey(key) {
  const keys = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
  }
  return keys[key]
}

function typeByKey(key) {
  const keys = {
    Digit1: 'boxes',
    Digit2: 'glbs',
    Digit3: 'lights',
    Digit4: '4',
    Digit5: '5',
  }
  return keys[key]
}

const useKeyboardControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  })
  const setType = useStore((state) => state.setType)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (actionByKey(e.code)) {
        setMovement((state) => ({ ...state, [actionByKey(e.code)]: true }))
      }
      if (typeByKey(e.code)) {
        setType(typeByKey(e.code))
      }
    }
    const handleKeyUp = (e) => {
      if (actionByKey(e.code)) {
        setMovement((state) => ({ ...state, [actionByKey(e.code)]: false }))
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  })
  return movement
}

export default useKeyboardControls
