"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { FaGithub } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa6";
import Link from "next/link";

// import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }).email(),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function SignIn() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex h-screen w-full p-4">
      <div className="basis-1/2">
        <div className="h-full w-full flex justify-center items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-3 max-w-[350px]"
            >
              <div>
                <p className="mb-4">
                  <FaDoorOpen size={50} />
                </p>
                <h1 className="font-bold text-3xl">Welcome Back</h1>
                <p className="text-muted-foreground text-sm">
                  {"Don't"} have an account?{" "}
                  <Link href={"/sign-up"}>
                    <Button variant={"link"} className="p-0" type="button">
                      Create an account.
                    </Button>
                  </Link>
                  {" "}It takes less than a minute.
                </p>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="johndoe69@company.com"
                        {...field}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="min 8 chars"
                        {...field}
                        className="rounded-xl"
                        type="password"
                      />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant={"secondary"}
                className="w-full rounded-xl"
              >
                Submit
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button type="submit" className="w-full rounded-xl">
                <FaGithub /> &nbsp; Github
              </Button>
              <p className="text-center text-muted-foreground text-xs">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </form>
          </Form>
        </div>
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
