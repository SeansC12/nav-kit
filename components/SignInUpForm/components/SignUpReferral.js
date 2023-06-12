import React from 'react'
import Link from 'next/link'

function SignUpReferral() {
  return (
    <div className="text-sm font-light text-white">
      Don’t have an account yet? <Link href="/signup" className="font-medium hover:underline">Sign up</Link>
    </div>
  )
}

export default SignUpReferral