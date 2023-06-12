"use client"

import React, { useState } from 'react'
import InputField from './components/InputField'
import ForgotPassword from './components/ForgotPassword'
import SignUpReferral from './components/SignUpReferral'
import SubmitButton from './components/SubmitButton'
import HeaderText from './components/HeaderText'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

function SignInForm({ children }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })

    router.push("/")
  }

  return (
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-primary-blue">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <HeaderText header={"Sign in to your account"} />
        <InputField label={"Your email"} placeholder={"name@company.com"} type={"email"} setState={setEmail} />
        <InputField label={"Your password"} placeholder={"••••••••"} type={"password"} setState={setPassword} />
        <ForgotPassword />
        <SubmitButton callback={handleLogin} text={"Sign in"} />
        <SignUpReferral />
        {children}
      </div>
    </div>
  )
}

export default SignInForm