import React from 'react'

export default function TodoElement({TodoElement}) {
  return (
    <div>
        {TodoElement.name}
        <input type="checkBox" defaultChecked={TodoElement.complete}/>
    </div>
  )
}
