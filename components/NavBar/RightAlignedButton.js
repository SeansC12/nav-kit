import React from 'react'
import Link from 'next/link'

function RightAlignedButton({ href, appendClassName, displayText }) {
  return (
    <Link
      href={href}
      className={`text-lg font-bold rounded-md px-6 py-1 absolute right-5 top-1/2 -translate-y-1/2 ${appendClassName ?? ""}`}
    >
      {displayText}
    </Link>
  )
}

export default RightAlignedButton