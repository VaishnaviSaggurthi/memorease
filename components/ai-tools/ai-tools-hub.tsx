"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sparkles, Brain, Network, VolumeIcon as VolumeUp, Copy, type Download } from "lucide-react"

export function AIToolsHub() {
  return (
    <Tabs defaultValue="acronym" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="acronym" className="gap-2">
          <Sparkles className="h-4 w-4" />
          Acronym Generator
        </TabsTrigger>
        <TabsTrigger value="mnemonics" className="gap-2">
          <Brain className="h-4 w-4" />
          Auto-Mnemonics
        </TabsTrigger>
        <TabsTrigger value="mindmap" className="gap-2">
          <Network className="h-4 w-4" />
          Mind Map Generator
        </TabsTrigger>
        <TabsTrigger value="sentences" className="gap-2">
          <VolumeUp className="h-4 w-4" />
          Cute Sentences
        </TabsTrigger>
      </TabsList>

      <TabsContent value="acronym" className="pt-6">
        <AcronymGenerator />
      </TabsContent>

      <TabsContent value="mnemonics" className="pt-6">
        <MnemonicsGenerator />
      </TabsContent>

      <TabsContent value="mindmap" className="pt-6">
        <MindMapGenerator />
      </TabsContent>

      <TabsContent value="sentences" className="pt-6">
        <SentenceGenerator />
      </TabsContent>
    </Tabs>
  )
}

function AcronymGenerator() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const generateAcronym = () => {
    // In a real app, this would call an AI API
    // Mock result for demonstration
    const words = input.split(" ")
    const acronym = words.map((word) => word.charAt(0).toUpperCase()).join("")

    // Generate a sentence where each word starts with the letters of the acronym
    const sentence = words
      .map((_, i) => {
        const letter = acronym.charAt(i)
        const wordOptions =
          {
            A: "Amazing",
            B: "Beautiful",
            C: "Creative",
            D: "Delightful",
            E: "Elegant",
            F: "Fantastic",
            G: "Great",
            H: "Helpful",
            I: "Incredible",
            J: "Joyful",
            K: "Kind",
            L: "Lovely",
            M: "Magnificent",
            N: "Nice",
            O: "Outstanding",
            P: "Perfect",
            Q: "Quick",
            R: "Remarkable",
            S: "Spectacular",
            T: "Terrific",
            U: "Unique",
            V: "Vibrant",
            W: "Wonderful",
            X: "Xcellent",
            Y: "Youthful",
            Z: "Zealous",
          }[letter] || "Amazing"

        return wordOptions
      })
      .join(" ")

    setResult(`${acronym}: ${sentence}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Acronym Generator</CardTitle>
        <CardDescription>Create memorable acronyms from any phrase to help with memorization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="acronym-input">Enter a phrase or concept</Label>
          <Input
            id="acronym-input"
            placeholder="e.g. Mitochondria is the powerhouse of the cell"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <Button onClick={generateAcronym} disabled={!input.trim()} className="w-full gap-2">
          <Sparkles className="h-4 w-4" />
          Generate Acronym
        </Button>

        {result && (
          <div className="mt-6 rounded-lg border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold font-serif">Your Acronym</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <VolumeUp className="h-4 w-4" />
                  <span className="sr-only">Speak</span>
                </Button>
              </div>
            </div>
            <p className="text-lg">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function MnemonicsGenerator() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const generateMnemonic = () => {
    // In a real app, this would call an AI API
    // Mock result for demonstration
    setResult(
      `To remember "${input}", imagine a vivid scene where you're walking through a garden. Each flower represents a key point, and as you touch each one, it reveals the information you need to remember. The colors, smells, and textures create strong sensory connections to help lock the information in your memory.`,
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Auto-Mnemonics Generator</CardTitle>
        <CardDescription>Create powerful memory aids using AI-generated visualization techniques</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mnemonic-input">What do you want to remember?</Label>
          <Textarea
            id="mnemonic-input"
            placeholder="e.g. The order of planets in the solar system"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <Button onClick={generateMnemonic} disabled={!input.trim()} className="w-full gap-2">
          <Brain className="h-4 w-4" />
          Generate Mnemonic
        </Button>

        {result && (
          <div className="mt-6 rounded-lg border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold font-serif">Your Mnemonic</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <VolumeUp className="h-4 w-4" />
                  <span className="sr-only">Speak</span>
                </Button>
              </div>
            </div>
            <p>{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function MindMapGenerator() {
  const [input, setInput] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Mind Map Generator</CardTitle>
        <CardDescription>
          Convert your notes or text into a visual mind map to enhance understanding and recall
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mindmap-input">Enter your notes or text</Label>
          <Textarea
            id="mindmap-input"
            placeholder="Paste your notes or text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px]"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Upload File
          </Button>
          <Button disabled={!input.trim()} className="flex-1 gap-2">
            <Network className="h-4 w-4" />
            Generate Mind Map
          </Button>
        </div>

        <div className="mt-6 flex aspect-video w-full items-center justify-center rounded-lg border bg-muted">
          <div className="text-center">
            <Network className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">Your mind map will appear here</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SentenceGenerator() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const generateSentence = () => {
    // In a real app, this would call an AI API
    // Mock result for demonstration
    setResult(
      `"${input}" can be remembered with this fun sentence: "Timmy the T-Rex tried teaching tiny turtles to tap dance on Tuesday, totally transforming their typical torpid tendencies!"`,
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Cute Sentence Generator</CardTitle>
        <CardDescription>Transform complex concepts into memorable, fun sentences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="sentence-input">Enter a difficult concept or term</Label>
          <Input
            id="sentence-input"
            placeholder="e.g. Photosynthesis"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <Button onClick={generateSentence} disabled={!input.trim()} className="w-full gap-2">
          <VolumeUp className="h-4 w-4" />
          Generate Cute Sentence
        </Button>

        {result && (
          <div className="mt-6 rounded-lg border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold font-serif">Your Memory Sentence</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <VolumeUp className="h-4 w-4" />
                  <span className="sr-only">Speak</span>
                </Button>
              </div>
            </div>
            <p>{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function Upload({ className, ...props }: React.ComponentProps<typeof Download>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

