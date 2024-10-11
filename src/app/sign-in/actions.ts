"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type UserInputType = {
  email: string;
  password: string;
};

export async function login(
  prevState: {
    message: string;
  },
  data: UserInputType,
) {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { message: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
