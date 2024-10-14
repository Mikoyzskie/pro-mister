import * as React from "react"
import { UserPlus, CircleX } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Input } from "@/components/ui/input"


export default function DrawerDemo() {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader className="flex justify-between">
            <div>
              <DrawerTitle>Create Customer</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </div>
            <DrawerClose asChild>
              <CircleX className="h-4 w-4 text-muted-foreground" />
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4 pb-0 flex flex-col gap-3">
            <div className="flex gap-3">
              <Input placeholder="Acme Imc." />
              <Input placeholder="Builder" />
            </div>
            <Input placeholder="John Does" />
            <Input placeholder="Senior Architect" />
            <div className="flex gap-3">
              <Input placeholder="johndoe69@email.com" />
              <Input placeholder="+639279298514" />
            </div>
            <Input placeholder="114 Micheal St Corner Kenway, Maryland City" />

            <div className="flex gap-3">
              <Input placeholder="Queensland" size={10} />
              <Input placeholder="Australia" size={10} />
              <Input placeholder="2010" size={10} />
            </div>

          </div>

          <div className="p-4 pb-0 mt-5">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent className="h-52 w-full rounded-lg bg-muted p-4 mt-2" value="account">Make changes to your account here.</TabsContent>
              <TabsContent className="h-52 w-full rounded-lg bg-muted p-4 mt-2" value="password">Change your password here.</TabsContent>
            </Tabs>
          </div>
          <DrawerFooter className="flex-row justify-end">
            <DrawerClose asChild>
              <Button variant="outline" className="text-xs rounded-full">Cancel</Button>
            </DrawerClose>
            <Button className="text-xs rounded-full">Save</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
