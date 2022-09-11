import React from 'react'
import useLocalState from '../hooks/LocalState'

export default function HookComponent() {
const [count,  setCount] = useLocalState("my-app-state", 0);
  return (
    <div>
        Count {count} <br />
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
