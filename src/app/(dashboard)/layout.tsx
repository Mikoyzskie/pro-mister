import SideNav from "@/components/sidenav"
import { Separator } from "@/components/ui/separator"
import { UserNav } from "@/components/tasks/components/user-nav"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav>
        <div className="flex flex-col">
          <header className="w-full p-5 flex justify-end">
            <UserNav />
          </header>
          <Separator />
          {children}
        </div>
      </SideNav>
    </div>
  )
}
