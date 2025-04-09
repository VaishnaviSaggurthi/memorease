import type React from "react"
import { UserNav } from "@/components/user-nav"

interface StudyShellProps {
  children: React.ReactNode
}

export function StudyShell({ children }: StudyShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-end py-4">
          <UserNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid gap-6 py-6">{children}</div>
      </main>
    </div>
  )
}

