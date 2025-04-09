"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Plus, Save, Trash2, Image, Volume, X, FileText } from "lucide-react"

export function DeckCreator() {
  const router = useRouter()
  const [cards, setCards] = useState([
    { id: 1, front: "", back: "", mnemonic: "", image: "", audio: "" },
    { id: 2, front: "", back: "", mnemonic: "", image: "", audio: "" },
  ])
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const addCard = () => {
    const newId = Math.max(0, ...cards.map((c) => c.id)) + 1
    setCards([...cards, { id: newId, front: "", back: "", mnemonic: "", image: "", audio: "" }])
  }

  const removeCard = (id: number) => {
    if (cards.length > 1) {
      setCards(cards.filter((card) => card.id !== id))
    }
  }

  const updateCard = (id: number, field: "front" | "back" | "mnemonic" | "image" | "audio", value: string) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, [field]: value } : card)))
  }

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the deck to a database here
    router.push("/decks")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Deck Information</CardTitle>
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
            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 items-center">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 hover:bg-transparent"
                      onClick={() => removeTag(tag)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {tag}</span>
                    </Button>
                  </Badge>
                ))}
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag"
                    className="h-8 w-32"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addTag()
                      }
                    }}
                  />
                  <Button type="button" variant="outline" size="sm" onClick={addTag} disabled={!newTag}>
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Add tag</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold">Flashcards</h2>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={addCard}>
              <Plus className="mr-2 h-4 w-4" />
              Add Card
            </Button>
            <Button type="button" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Bulk Import
            </Button>
          </div>
        </div>

        <Tabs defaultValue="cards" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cards">Card Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="cards" className="space-y-4 pt-4">
            {cards.map((card, index) => (
              <Card key={card.id} className="border-primary/10">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-serif">Card {index + 1}</CardTitle>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeCard(card.id)}
                      disabled={cards.length === 1}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove card</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`front-${card.id}`}>Front</Label>
                      <Textarea
                        id={`front-${card.id}`}
                        placeholder="Front side of the card"
                        value={card.front}
                        onChange={(e) => updateCard(card.id, "front", e.target.value)}
                        required
                        className="min-h-[100px]"
                      />
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" size="sm" className="text-xs">
                          <Image className="mr-1 h-3 w-3" />
                          Add Image
                        </Button>
                        <Button type="button" variant="outline" size="sm" className="text-xs">
                          <Volume className="mr-1 h-3 w-3" />
                          Add Audio
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`back-${card.id}`}>Back</Label>
                      <Textarea
                        id={`back-${card.id}`}
                        placeholder="Back side of the card"
                        value={card.back}
                        onChange={(e) => updateCard(card.id, "back", e.target.value)}
                        required
                        className="min-h-[100px]"
                      />
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" size="sm" className="text-xs">
                          <Image className="mr-1 h-3 w-3" />
                          Add Image
                        </Button>
                        <Button type="button" variant="outline" size="sm" className="text-xs">
                          <Volume className="mr-1 h-3 w-3" />
                          Add Audio
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`mnemonic-${card.id}`}>AI-Generated Mnemonic (Optional)</Label>
                    <div className="flex gap-2">
                      <Textarea
                        id={`mnemonic-${card.id}`}
                        placeholder="A memory aid will be automatically generated, or you can create your own"
                        value={card.mnemonic}
                        onChange={(e) => updateCard(card.id, "mnemonic", e.target.value)}
                        className="min-h-[60px]"
                      />
                      <Button type="button" variant="outline" className="shrink-0">
                        Generate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                  <p className="text-muted-foreground">Preview your flashcards here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Add content to your cards to see how they'll look during study
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
          <Button type="submit" className="gap-2">
            <Save className="h-4 w-4" />
            Save Deck
          </Button>
        </div>
      </div>
    </form>
  )
}

