import React from 'react'
import Link from 'next/link'

function Button({ href, appendClassName, displayText }) {
  return (
    <Link
      href={href}
      className={`text-lg font-bold rounded-md px-6 py-1 ${appendClassName ?? ""}`}
    >
      {displayText}
    </Link>
  )
}

export default Button