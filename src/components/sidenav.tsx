"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"
import {
  LogOut,
  Settings,
  DoorOpen,
  FolderKanban,
  ContactRound,
  FileText,
  Package,
  CircleUserRound,
  BrainCircuit,
  LayoutDashboard,
  Users,
} from "lucide-react"

import { createClient } from "@/utils/supabase/client"

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Nav } from "@/components/nav";

export default function SideNav({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const supabase = createClient();

  useEffect(() => {
    async function getCurrentUser() {
      const { error } = await supabase.auth.getUser();

      if (error) {
        return;
      }

      setIsAuthenticated(true);
    }

    getCurrentUser();

  }, [supabase.auth])


  return (
    isAuthenticated ? <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full min-h-screen items-stretch"
      >
        <ResizablePanel
          defaultSize={15}
          collapsedSize={4}
          collapsible={true}
          minSize={10}
          maxSize={15}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`
          }}
          className={cn(
            isCollapsed &&
            "min-w-[50px] transition-all duration-300 ease-in-out", "max-h-screen"
          )}
        >
          <div className="flex flex-col w-full h-full">
            <div
              className={cn(
                "flex h-[52px] items-center justify-center",
                isCollapsed ? "h-[52px]" : "px-2"
              )}
            >
              {/* ZANDA LOGO */}
              {/* <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} /> */}
            </div>

            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Dashboard",
                  label: "",
                  icon: LayoutDashboard,
                  variant: "default",
                },
                {
                  title: "Projects",
                  label: "128",
                  icon: FolderKanban,
                  variant: "ghost",
                },
                {
                  title: "Doors",
                  label: "9",
                  icon: DoorOpen,
                  variant: "ghost",
                },
                {
                  title: "Products",
                  label: "23",
                  icon: Package,
                  variant: "ghost",
                },
                {
                  title: "Customers",
                  label: "",
                  icon: ContactRound,
                  variant: "ghost",
                },
                {
                  title: "Consultants",
                  label: "",
                  icon: Users,
                  variant: "ghost",
                },
                {
                  title: "Templates",
                  label: "",
                  icon: FileText,
                  variant: "ghost",
                },
              ]}
            />
            <div className="mt-auto">
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Settings",

                    icon: Settings,
                    variant: "ghost",
                  },
                  {
                    title: "AI Chat",

                    icon: BrainCircuit,
                    variant: "ghost",
                  },
                  {
                    title: "Account",

                    icon: CircleUserRound,
                    variant: "ghost",
                  },
                  {
                    title: "Sign Out",

                    icon: LogOut,
                    variant: "default",
                  },

                ]}
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85} minSize={85}>
          <div className="">
            {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
      : <>
        {children}
      </>
  )
}
