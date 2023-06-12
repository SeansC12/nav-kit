import React from 'react'

function HeaderText({ header }) {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-primary-blue md:text-2xl">
      {header}
    </h1>
  )
}

export default HeaderText