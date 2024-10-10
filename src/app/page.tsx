"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client"
import { useRouter } from 'next/navigation'

import Loader from "@/components/loader";

export default function Home() {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const router = useRouter()

  const handleSignout = useCallback(async () => {
    setIsloading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log(error.message);
    }

    router.push('/')
  }, [router])

  return (
    <div>
      <Button onClick={handleSignout} disabled={isLoading}>
        {isLoading ?
          <>
            <Loader /> &nbsp;
            Signing Out...
          </> : "Sign Out"
        }
      </Button>
    </div>
  );
}
