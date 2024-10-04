"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast"
// import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Login() {
  const [isError, setIsError] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {

    if (!data) {
      setIsError(true)
    }

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex h-screen w-full p-4">
      <div className="basis-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="rounded-xl" />
                  </FormControl>
                  {isError ??
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                  }
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe69@company.com" {...field} className="rounded-xl" type="email" />
                  </FormControl>
                  {isError ??
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                  }
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="min 8 chars" {...field} className="rounded-xl" />
                  </FormControl>
                  {isError ??
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                  }
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div className="basis-1/2">
        <div className="h-full">
          <div className="flex h-full rounded-3xl overflow-hidden">
            <CldImage
              src="13_Horizon_Homes_-_10022.BLK_Epic_Privacy_Set_Matt_Black_l7oaql.jpg"
              width="1000"
              height="1000"

              alt={"Login Hero"}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bg-black bg-opacity-25 inset-0">
              <Button variant={"outline"} className="rounded-full bg-transparent text-white border-white">Contact Us</Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
