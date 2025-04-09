"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { VolumeIcon as VolumeUp, ThumbsUp, ThumbsDown, Pause, SkipForward, Clock } from "lucide-react"

interface FlashcardStudyProps {
  deckId: string
}

export function FlashcardStudy({ deckId }: FlashcardStudyProps) {
  // Mock data - in a real app, this would come from an API
  const cards = [
    { id: "1", front: "Hola", back: "Hello", mnemonic: "Think of saying 'hello' while waving" },
    { id: "2", front: "Adiós", back: "Goodbye", mnemonic: "Imagine adding 'adios' to your goodbye wave" },
    { id: "3", front: "Por favor", back: "Please", mnemonic: "Pour (por) the flavor (favor) on your food, please" },
    { id: "4", front: "Gracias", back: "Thank you", mnemonic: "Being gracious means saying thank you" },
    {
      id: "5",
      front: "Buenos días",
      back: "Good morning",
      mnemonic: "The buenos (good) day (día) starts in the morning",
    },
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [completed, setCompleted] = useState<string[]>([])
  const [stats, setStats] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
    total: 0,
    streak: 0,
  })

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleDifficulty = (difficulty: "easy" | "medium" | "hard") => {
    // Update stats
    setStats((prev) => ({
      ...prev,
      [difficulty]: prev[difficulty] + 1,
      total: prev.total + 1,
      streak: difficulty === "hard" ? 0 : prev.streak + 1,
    }))

    // Mark as completed
    setCompleted([...completed, cards[currentCardIndex].id])

    // Move to next card
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    } else {
      // End of deck
      setCurrentCardIndex(0)
      setIsFlipped(false)
    }
  }

  const playAudio = () => {
    // In a real app, this would trigger text-to-speech
    console.log("Playing audio for:", isFlipped ? cards[currentCardIndex].back : cards[currentCardIndex].front)
  }

  const progress = (completed.length / cards.length) * 100

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full max-w-3xl">
        <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Card {currentCardIndex + 1} of {cards.length}
            </span>
            <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
              <ThumbsUp className="mr-1 h-3 w-3" />
              Easy: {stats.easy}
            </Badge>
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
              <Clock className="mr-1 h-3 w-3" />
              Medium: {stats.medium}
            </Badge>
            <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
              <ThumbsDown className="mr-1 h-3 w-3" />
              Hard: {stats.hard}
            </Badge>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="w-full max-w-3xl perspective-1000">
        <div
          className={`relative transition-all duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
          onClick={handleFlip}
        >
          <Card className="w-full min-h-[300px] cursor-pointer backface-hidden border-primary/20">
            <CardContent className="flex flex-col items-center justify-center h-full p-8">
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    playAudio()
                  }}
                >
                  <VolumeUp className="h-5 w-5 text-muted-foreground" />
                  <span className="sr-only">Play audio</span>
                </Button>
              </div>
              <p className="text-3xl font-serif font-bold text-center">{cards[currentCardIndex].front}</p>
              <p className="text-sm text-muted-foreground mt-4 text-center">Click to flip</p>
            </CardContent>
          </Card>

          <Card className="absolute inset-0 w-full min-h-[300px] cursor-pointer backface-hidden rotate-y-180 border-secondary/20">
            <CardContent className="flex flex-col items-center justify-center h-full p-8">
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    playAudio()
                  }}
                >
                  <VolumeUp className="h-5 w-5 text-muted-foreground" />
                  <span className="sr-only">Play audio</span>
                </Button>
              </div>
              <p className="text-3xl font-serif font-bold text-center text-secondary">{cards[currentCardIndex].back}</p>

              <div className="mt-6 p-4 bg-secondary/5 rounded-lg border border-secondary/10 w-full">
                <p className="text-sm font-medium text-secondary mb-1">AI-Generated Mnemonic:</p>
                <p className="text-sm">{cards[currentCardIndex].mnemonic}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          size="lg"
          className="gap-2 border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-500"
          onClick={() => handleDifficulty("hard")}
        >
          <ThumbsDown className="h-4 w-4" />
          Hard
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="gap-2 border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500"
          onClick={() => handleDifficulty("medium")}
        >
          <Clock className="h-4 w-4" />
          Medium
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="gap-2 border-green-500/20 text-green-500 hover:bg-green-500/10 hover:text-green-500"
          onClick={() => handleDifficulty("easy")}
        >
          <ThumbsUp className="h-4 w-4" />
          Easy
        </Button>
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" size="sm">
          <Pause className="h-4 w-4 mr-2" />
          Pause Session
        </Button>
        <Button variant="ghost" size="sm">
          <SkipForward className="h-4 w-4 mr-2" />
          Skip Card
        </Button>
      </div>
    </div>
  )
}

