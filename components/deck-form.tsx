"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Save, Trash2 } from "lucide-react"

export function DeckForm() {
  const router = useRouter()
  const [cards, setCards] = useState([
    { id: 1, front: "", back: "" },
    { id: 2, front: "", back: "" },
  ])

  const addCard = () => {
    const newId = Math.max(0, ...cards.map((c) => c.id)) + 1
    setCards([...cards, { id: newId, front: "", back: "" }])
  }

  const removeCard = (id: number) => {
    if (cards.length > 1) {
      setCards(cards.filter((card) => card.id !== id))
    }
  }

  const updateCard = (id: number, field: "front" | "back", value: string) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, [field]: value } : card)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the deck to a database here
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Deck Information</CardTitle>
          <CardDescription>Enter the basic information for your new deck</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Deck Name</Label>
            <Input id="name" placeholder="Enter deck name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter a description for your deck" className="min-h-[100px]" />
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-bold mt-8 mb-4">Flashcards</h2>

      {cards.map((card, index) => (
        <Card key={card.id} className="mb-4">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Card {index + 1}</CardTitle>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeCard(card.id)}
                disabled={cards.length === 1}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove card</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`front-${card.id}`}>Front</Label>
              <Textarea
                id={`front-${card.id}`}
                placeholder="Front side of the card"
                value={card.front}
                onChange={(e) => updateCard(card.id, "front", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`back-${card.id}`}>Back</Label>
              <Textarea
                id={`back-${card.id}`}
                placeholder="Back side of the card"
                value={card.back}
                onChange={(e) => updateCard(card.id, "back", e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button type="button" variant="outline" className="w-full mt-2 mb-8" onClick={addCard}>
        <Plus className="mr-2 h-4 w-4" />
        Add Card
      </Button>

      <div className="flex justify-end">
        <Button type="submit" className="gap-2">
          <Save className="h-4 w-4" />
          Save Deck
        </Button>
      </div>
    </form>
  )
}

