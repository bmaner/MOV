import { Html } from '@react-three/drei'
import React from 'react'
import useSWR from 'swr'

export default function Messages() {
  const fetcher = (url) => fetch(url).then((response) => response.json())
  const { data, error } = useSWR('/api/messages', fetcher)

  return (
    <group>
      {data?.messages?.map((message, idx) => {
        return <Message key={message.id} idx={idx} message={message.message} />
      })}
    </group>
  )
}

function Message({ idx, message }) {
  return (
    <Html
      position={[idx > 4 ? idx * 2 - 16 : idx * 2 - 6, idx > 4 ? 5 : 7, -19]}
      rotation={[0, 0, 0]}
      transform
      sprite
      occlude
      onClick={() => setAddMessage(true)}
      onPointerOver={(e) => (e.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
      style={{ fontSize: '0.1px', position: 'relative' }}
    >
      <span style={{ position: 'absolute', top: 2, left: 3 }}>📌</span>
      <div className='message'>{message}</div>
    </Html>
  )
}
