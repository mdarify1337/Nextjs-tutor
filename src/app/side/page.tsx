import React from 'react'

function Side() {
    console.log('Side Server Component')
  return (
    <div>Side {new Date().toLocaleTimeString()}</div>
  )
}

export default Side