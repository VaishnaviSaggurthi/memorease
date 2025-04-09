import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Edit, MoreHorizontal, Play } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function DeckList() {
  const decks = [
    {
      id: "1",
      name: "Spanish Vocabulary",
      description: "Basic Spanish words and phrases",
      cardCount: 120,
      dueCount: 24,
    },
    {
      id: "2",
      name: "Biology Terms",
      description: "Important biology concepts and definitions",
      cardCount: 85,
      dueCount: 15,
    },
    {
      id: "3",
      name: "History Dates",
      description: "Key historical events and their dates",
      cardCount: 64,
      dueCount: 32,
    },
    {
      id: "4",
      name: "Programming Concepts",
      description: "Fundamental programming terms and concepts",
      cardCount: 95,
      dueCount: 0,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Decks</CardTitle>
        <CardDescription>Manage and study your flashcard decks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Card key={deck.id} className="overflow-hidden">
              <div className="bg-primary/10 p-4">
                <div className="flex items-center justify-between">
                  <Brain className="h-8 w-8 text-primary" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <h3 className="mt-4 text-lg font-bold">{deck.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{deck.description}</p>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge variant="outline">{deck.cardCount} cards</Badge>
                    {deck.dueCount > 0 && <Badge variant="secondary">{deck.dueCount} due</Badge>}
                  </div>
                  <Button size="sm" className="gap-1" asChild>
                    <Link href={`/study/${deck.id}`}>
                      <Play className="h-3 w-3" />
                      Study
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

