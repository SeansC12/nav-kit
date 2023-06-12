"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import InputField from './components/InputField'
import SubmitButton from './components/SubmitButton'
import HeaderText from './components/HeaderText'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const router = useRouter();

  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      }
    })

    router.push("/");
  }

  return (
    <div>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-primary-blue">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <HeaderText header={"Create an account, here"} />
          <InputField label={"Your email"} placeholder={"name@company.com"} type={"email"} setState={setEmail} />
          <InputField label={"Your password"} placeholder={"••••••••"} type={"password"} setState={setPassword} />
          <InputField label={"Confirm your password"} placeholder={"••••••••"} type={"password"} setState={setConfirmPassword} />
          <SubmitButton callback={handleSignUp} text={"Sign Up"} />
        </div>
      </div>
    </div>
  )
}

export default SignUpForm