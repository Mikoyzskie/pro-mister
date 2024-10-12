"use client"

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Loader from "@/components/loader"

import { createClient } from "@/utils/supabase/client";
// import { revalidatePath } from "next/cache";

export default function SignOutButton() {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const router = useRouter();

  const handleSignout = useCallback(async () => {
    setIsloading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error.message);
    }
    router.push("/");
  }, [router]);

  return (
    <Button onClick={handleSignout} disabled={isLoading} className="text-xs">
      {isLoading ? (
        <>
          <Loader /> &nbsp; Signing Out...
        </>
      ) : (
        "Sign Out"
      )}
    </Button>
  )
}
