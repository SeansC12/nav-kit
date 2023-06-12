import React from 'react'

function InputField({ label, placeholder, type, setState }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-primary-blue">{label}</label>
      <input
        onChange={(e) => setState(e.target.value)}
        autoComplete="on"
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        required=""
      />
    </div>
  )
}

export default InputField