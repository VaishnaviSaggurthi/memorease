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
    <div className="flex flex-col gap-1 pb-8 pt-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-0.5">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-primary">{heading}</h1>
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

