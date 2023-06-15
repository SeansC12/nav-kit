import React from 'react'
import Image from 'next/image'

function Favicon({ src, width, height, appendClassName, horizontalPosition }) {
  function determineClassNameBasedOnPosition(horizontalPosition) {
    switch (horizontalPosition) {
      case "left":
        return "left-5";

      case "right":
        return "right-5";

      case "center":
        return "left-1/2 -translate-x-1/2"

      default:
        return "left-5"
    }
  }

  return (
    <Image
      className={`absolute top-1/2 -translate-y-1/2 ${determineClassNameBasedOnPosition(horizontalPosition)} ${appendClassName ?? ""}`}
      src={src}
      width={width}
      height={height} />
  )
}

export default Favicon