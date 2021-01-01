import React, { useState, useEffect, useLayoutEffect } from 'react'
import images from '../assets/index';

interface IconProps {
  type?: string,
  src?: string,
  size?: number,
  interval?: number,
}

interface RetrunProps {
  onMouseOver: (e: any) => void,
  onMouseOut: (e: any) => void,
  style: React.CSSProperties
}

export function useIcon({ type, src, size = 64, interval = 20 }: IconProps): RetrunProps {
  const [y, setY] = useState(0)

  const [direction, setDirection] = useState(0)

  const url = type !== undefined
  ? images[type] || images['ai']
  : src

  useEffect(() => {
    const timer = window.setInterval(() => {
      setY(preState => {
        const nextState = preState + size * direction
        if (nextState >= -size * 20 && nextState <= 0) {
          return nextState
        } else {
          return preState
        }
      })
    }, interval)
    return () => window.clearInterval(timer)
  }, [size, interval, direction])

  useLayoutEffect(() => {
    setDirection(-1)
    const timer = window.setTimeout(() => {
      setDirection(1)
    }, 2000)
    return () => window.clearInterval(timer)
  }, [])

  const defaultStyles = {
    display: 'block',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return {
    onMouseOver: (e) => setDirection(-1),
    onMouseOut: (e) => setDirection(1),
    style: {
      ...defaultStyles,
      width: size + 'px',
      height: size + 'px',
      backgroundImage: `url(${url})`,
      backgroundPosition: '0 0',
      backgroundPositionY: y
    }
  }
}

export default function Icon(iconProps: IconProps) {
  const props = useIcon(iconProps)

  return (
    <div { ...props as RetrunProps }/>
  )
}
