"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Brain, Layout, FlaskConical, Award, Trophy, Users, BookOpen, Sparkles, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      icon: Layout,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      title: "Decks",
      icon: Brain,
      href: "/decks",
      active: pathname === "/decks" || pathname.startsWith("/decks/"),
    },
    {
      title: "Achievements",
      icon: Award,
      href: "/achievements",
      active: pathname === "/achievements",
    },
    {
      title: "Leaderboards",
      icon: Trophy,
      href: "/leaderboards",
      active: pathname === "/leaderboards",
    },
    {
      title: "Collaborate",
      icon: Users,
      href: "/collaborate",
      active: pathname === "/collaborate",
    },
    {
      title: "Story Mode",
      icon: BookOpen,
      href: "/story-mode",
      active: pathname === "/story-mode",
    },
    {
      title: "AI Tools",
      icon: Sparkles,
      href: "/ai-tools",
      active: pathname === "/ai-tools",
    },
    {
      title: "Profile",
      icon: User,
      href: "/profile",
      active: pathname === "/profile",
    },
  ]

  return (
    <>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between p-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <FlaskConical className="h-6 w-6 text-primary" />
            <span className="text-xl font-serif font-bold">MemorEase</span>
          </Link>
          <SidebarTrigger className="md:hidden" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {routes.map((route) => (
              <SidebarMenuItem key={route.href}>
                <SidebarMenuButton asChild isActive={route.active}>
                  <Link href={route.href}>
                    <route.icon className="h-5 w-5" />
                    <span>{route.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Level 12</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <SidebarTrigger className="h-12 w-12 rounded-full shadow-lg" />
      </div>
    </>
  )
}

