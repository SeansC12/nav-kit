import React from 'react'

function NavBarWrapper({ appendClassName, children }) {
  return (
    <div className={`p-2 w-full h-[10vh] relative ${appendClassName ?? ""}`}>
      {children}
    </div>
  )
}

export default NavBarWrapper