"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Edit, MoreHorizontal, Play, Search, SlidersHorizontal, PlusCircle, Trash2, Copy, Share2 } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DeckManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  // Mock data - in a real app, this would come from an API
  const decks = [
    {
      id: "1",
      name: "Spanish Vocabulary",
      description: "Basic Spanish words and phrases",
      cardCount: 120,
      dueCount: 24,
      tags: ["language", "spanish"],
      lastStudied: "2 days ago",
      icon: "🇪🇸",
    },
    {
      id: "2",
      name: "Biology Terms",
      description: "Important biology concepts and definitions",
      cardCount: 85,
      dueCount: 15,
      tags: ["science", "biology"],
      lastStudied: "1 day ago",
      icon: "🧬",
    },
    {
      id: "3",
      name: "History Dates",
      description: "Key historical events and their dates",
      cardCount: 64,
      dueCount: 32,
      tags: ["history", "dates"],
      lastStudied: "3 days ago",
      icon: "📜",
    },
    {
      id: "4",
      name: "Programming Concepts",
      description: "Fundamental programming terms and concepts",
      cardCount: 95,
      dueCount: 0,
      tags: ["programming", "computer science"],
      lastStudied: "1 week ago",
      icon: "💻",
    },
    {
      id: "5",
      name: "Art History",
      description: "Famous artists and their works",
      cardCount: 72,
      dueCount: 18,
      tags: ["art", "history"],
      lastStudied: "5 days ago",
      icon: "🎨",
    },
    {
      id: "6",
      name: "Physics Formulas",
      description: "Essential physics equations and formulas",
      cardCount: 48,
      dueCount: 10,
      tags: ["science", "physics"],
      lastStudied: "Yesterday",
      icon: "⚛️",
    },
  ]

  // Filter decks based on search query
  const filteredDecks = decks.filter(
    (deck) =>
      deck.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search decks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] h-9">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently Studied</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="cards">Card Count</SelectItem>
              <SelectItem value="due">Due Cards</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button asChild>
          <Link href="/decks/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Deck
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDecks.map((deck) => (
          <Card key={deck.id} className="overflow-hidden">
            <div className="bg-primary/5 p-4">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {deck.icon}
                </div>
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
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <h3 className="mt-4 text-lg font-bold font-serif">{deck.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{deck.description}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {deck.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-primary/5 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <Badge variant="outline">{deck.cardCount} cards</Badge>
                    {deck.dueCount > 0 && <Badge variant="secondary">{deck.dueCount} due</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">Last studied: {deck.lastStudied}</p>
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
    </div>
  )
}

