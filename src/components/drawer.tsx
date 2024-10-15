import * as React from "react"
import { UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,

  DrawerContent,

  DrawerTrigger,
} from "@/components/ui/drawer"

import { AddCustomer } from "@/components/add-customer"

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
      <DrawerContent className="px-4 py-10">
        <AddCustomer />
      </DrawerContent>
    </Drawer>
  )
}
