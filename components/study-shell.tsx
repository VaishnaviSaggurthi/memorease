import type React from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

interface StudyShellProps {
  children: React.ReactNode
}

export function StudyShell({ children }: StudyShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <UserNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid gap-12 py-8">{children}</div>
      </main>
    </div>
  )
}

