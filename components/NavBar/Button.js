import React from 'react'
import Link from 'next/link'

function Button({ href, appendClassName, displayText, horizontalPosition, flexMode = false }) {
  function determineClassNameBasedOnPosition(horizontalPosition) {
    switch (horizontalPosition) {
      case "left":
        return "left-5";

      case "right":
        return "right-5";

      case "center":
        return "left-1/2 -translate-x-1/2"

      case "nil":
        return ""

      default:
        return ""
    }
  }

  return (
    <Link
      href={href}
      className={`text-lg font-bold rounded-md px-6 py-1 ${!flexMode && "absolute right-5 top-1/2 -translate-y-1/2"} ${determineClassNameBasedOnPosition(horizontalPosition)} ${appendClassName ?? ""}`}
    >
      {displayText}
    </Link>
  )
}

export default Button