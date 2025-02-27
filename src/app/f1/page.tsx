import Link from 'next/link'
import React from 'react'

function f1defaultfunction() {
  return (
    <>
        <div>f1 default function</div>
        <Link href={"/f1/f2"}>F2</Link>
        <Link href={"/f3"}>F3</Link>
        <Link href={"/f4"}>F4</Link>
    </>
  )
}

export default f1defaultfunction