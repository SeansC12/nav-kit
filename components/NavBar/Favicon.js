import React from 'react'
import Image from 'next/image'

function Favicon({ src, width, height, appendClassName }) {
  return (
    <Image
      className={`absolute top-1/2 -translate-y-1/2 left-5 ${appendClassName}`}
      src={src}
      width={width}
      height={height} />
  )
}

export default Favicon