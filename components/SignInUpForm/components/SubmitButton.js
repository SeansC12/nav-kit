import React from 'react'

function SubmitButton({ callback, text }) {
  return (
    <button
      type="submit"
      onClick={callback}
      className="w-full text-white bg-[#2563eb] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {text}
    </button>
  )
}

export default SubmitButton