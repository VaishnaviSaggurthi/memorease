import Link from "next/link"
import { Brain } from "lucide-react"
import React from "react"

type NavLinkProps = {
  href: string
  label: string
}

function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link href={href} className="text-sm font-medium text-muted-foreground hover:text-primary">
      {label}
    </Link>
  )
}

export function MainNav(): JSX.Element {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/dashboard" className="flex items-center space-x-2">
        <Brain className="h-6 w-6 text-primary" />
        <span className="hidden text-lg font-bold sm:inline-block">Memorease</span>
      </Link>
      <nav className="flex gap-4 md:gap-6">
        <NavLink href="/dashboard" label="Dashboard" />
        <NavLink href="/decks" label="Decks" />
        <NavLink href="/stats" label="Statistics" />
      </nav>
    </div>
  )
}
