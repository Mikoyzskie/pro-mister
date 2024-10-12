import SideNav from "@/components/sidenav"
import { Separator } from "@/components/ui/separator"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav>
        <div className="flex flex-col">
          <header className="w-full h-[85px]">
            test
          </header>
          <Separator />
          {children}
        </div>
      </SideNav>
    </div>
  )
}
