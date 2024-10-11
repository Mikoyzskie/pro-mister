"use client";

import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { createClient } from "@/utils/supabase/client";
// import { useRouter } from "next/navigation";

// import Loader from "@/components/loader";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"
import { cn } from "@/lib/utils"

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Nav } from "@/components/nav";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  // const [isLoading, setIsloading] = useState<boolean>(false);
  // const router = useRouter();

  // const handleSignout = useCallback(async () => {
  //   setIsloading(true);
  //   const supabase = createClient();
  //   const { error } = await supabase.auth.signOut();

  //   if (error) {
  //     console.log(error.message);
  //   }

  //   router.push("/");
  // }, [router]);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    // <div>
    //   <Button onClick={handleSignout} disabled={isLoading} className="text-xs">
    //     {isLoading ? (
    //       <>
    //         <Loader /> &nbsp; Signing Out...
    //       </>
    //     ) : (
    //       "Sign Out"
    //     )}
    //   </Button>
    // </div>

    <TooltipProvider delayDuration={0}>
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
            "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <div className="flex flex-col w-full h-full">
            <div
              className={cn(
                "flex h-[52px] items-center justify-center",
                isCollapsed ? "h-[52px]" : "px-2"
              )}
            >
              {/* <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} /> */}
            </div>

            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Dashboard",
                  label: "",
                  icon: Send,
                  variant: "default",
                },
                {
                  title: "Projects",
                  label: "128",
                  icon: Inbox,
                  variant: "ghost",
                },
                {
                  title: "Products",
                  label: "9",
                  icon: File,
                  variant: "ghost",
                },
                {
                  title: "Junk",
                  label: "23",
                  icon: ArchiveX,
                  variant: "ghost",
                },
                {
                  title: "Trash",
                  label: "",
                  icon: Trash2,
                  variant: "ghost",
                },
                {
                  title: "Archive",
                  label: "",
                  icon: Archive,
                  variant: "ghost",
                },
              ]}
            />
            <Separator />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Social",
                  label: "972",
                  icon: Users2,
                  variant: "ghost",
                },
                {
                  title: "Updates",
                  label: "342",
                  icon: AlertCircle,
                  variant: "ghost",
                },
                {
                  title: "Forums",
                  label: "128",
                  icon: MessagesSquare,
                  variant: "ghost",
                },
                {
                  title: "Shopping",
                  label: "8",
                  icon: ShoppingCart,
                  variant: "ghost",
                },
                {
                  title: "Promotions",
                  label: "21",
                  icon: Archive,
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

                    icon: Users2,
                    variant: "ghost",
                  },
                  {
                    title: "AI",

                    icon: AlertCircle,
                    variant: "ghost",
                  },
                  {
                    title: "Account",

                    icon: MessagesSquare,
                    variant: "ghost",
                  },

                ]}
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85} minSize={85}>
          test
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
