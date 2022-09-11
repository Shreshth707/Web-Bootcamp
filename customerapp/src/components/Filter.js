import React from 'react'

export default function Filter({filterEvent}) {
  return (
    <div>
        <input type="text" 
        placeholder='search by name' 
        onChange={(evt) => filterEvent(evt.target.value)}/>
    </div>
  )
}
