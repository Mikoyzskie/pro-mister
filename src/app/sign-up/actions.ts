"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type UserInputType = {
  name: string;
  email: string;
  password: string;
};

export async function signup(
  prevState: {
    message: string;
  },
  data: UserInputType,
) {
  const supabase = createClient();


  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { message: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
