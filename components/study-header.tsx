import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface StudyHeaderProps {
  heading: string
  text?: string
  deckId: string
}

export function StudyHeader({ heading, text, deckId }: StudyHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-primary">{heading}</h1>
        {text && <p className="text-muted-foreground">{text}</p>}
      </div>
      <Button variant="outline" asChild>
        <Link href="/dashboard">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
    </div>
  )
}

