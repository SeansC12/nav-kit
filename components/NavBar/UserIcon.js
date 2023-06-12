import React from 'react'
import Image from 'next/image'

async function UserIcon({ src, width, height, appendClassName }) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={`absolute right-5 top-1/2 -translate-y-1/2 aspect-square rounded-full ${appendClassName}`}
    />
  )
}

export default UserIcon