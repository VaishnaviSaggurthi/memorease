import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, PlusCircle, Users, Sparkles } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Quick Actions</CardTitle>
        <CardDescription>Shortcuts to common activities</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="justify-start" asChild>
          <Link href="/decks">
            <Brain className="mr-2 h-4 w-4" />
            Study Flashcards
          </Link>
        </Button>
        <Button className="justify-start" asChild>
          <Link href="/decks/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Deck
          </Link>
        </Button>
        <Button className="justify-start" variant="secondary" asChild>
          <Link href="/collaborate">
            <Users className="mr-2 h-4 w-4" />
            Join Collaboration
          </Link>
        </Button>
        <Button className="justify-start" variant="outline" asChild>
          <Link href="/ai-tools">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Memory Tools
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

