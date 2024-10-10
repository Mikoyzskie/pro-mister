'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {z} from "zod"

import { createClient } from '@/utils/supabase/server'

export async function login(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const supabase = createClient()
  
  const schema = z.object({
    email: z.string().email(),
    password: z.string()
  })

  const parse = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })

  if(!parse.success){
    return {message: "Parse error:" + parse.error}
  }

  const data = parse.data;

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  // }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return {message: error.message}
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}