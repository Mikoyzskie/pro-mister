"use server";

import { z } from "zod";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/client'

export async function signIn(
  prevState: {
    message: string;
  },
  formData: FormData,
){
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
    return {message: "Parse error"}
  }

  const data = parse.data

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
} 