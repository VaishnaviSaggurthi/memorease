import type React from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-1 pb-8 pt-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-0.5">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-primary">{heading}</h1>
        {text && <p className="text-muted-foreground">{text}</p>}
      </div>
      {children ? (
        children
      ) : (
        <Button asChild>
          <Link href="/decks/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Deck
          </Link>
        </Button>
      )}
    </div>
  )
}

