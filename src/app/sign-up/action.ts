"use server";

import { z } from "zod";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function signUp(
  prevState: {
    message: string;
  },
  req: NextRequest,
) {
  const url = new URL(req.url);

  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const formData = await req.formData();

  const parse = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return { message: "Parse error" };
  }

  const { email, password } = parse.data;

  try {
    await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${url.origin}/auth/callback` },
    });
  } catch (error) {
    return { message: `Error: ${error}` };
  }

  // const { error } = await supabase.auth.signUp(data)

  // if (error) {
  //   redirect('/error')
  // }
  // revalidatePath('/', 'layout')
  // redirect('/')
}
