import React from 'react'

function HorizontalFlexButtonWrapper({ children, appendClassName, horizontalPosition }) {
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
    <div className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center flex-row gap-2 ${determineClassNameBasedOnPosition(horizontalPosition)} ${appendClassName ?? ""}`}>
      {children}
    </div>
  )
}

export default HorizontalFlexButtonWrapper