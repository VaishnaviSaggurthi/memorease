"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Check, X } from "lucide-react"

interface FlashcardStudyProps {
  deckId: string
}

export function FlashcardStudy({ deckId }: FlashcardStudyProps) {
  // Mock data - in a real app, this would come from an API
  const cards = [
    { id: "1", front: "Hola", back: "Hello" },
    { id: "2", front: "Adiós", back: "Goodbye" },
    { id: "3", front: "Por favor", back: "Please" },
    { id: "4", front: "Gracias", back: "Thank you" },
    { id: "5", front: "Buenos días", back: "Good morning" },
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [completed, setCompleted] = useState<string[]>([])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNext = (known: boolean) => {
    if (known) {
      setCompleted([...completed, cards[currentCardIndex].id])
    }

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    } else {
      // End of deck
      setCurrentCardIndex(0)
      setIsFlipped(false)
    }
  }

  const progress = (completed.length / cards.length) * 100

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Card {currentCardIndex + 1} of {cards.length}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="w-full max-w-md perspective-1000" onClick={handleFlip}>
        <div className={`relative transition-all duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
          <Card className="w-full h-64 cursor-pointer backface-hidden">
            <CardContent className="flex items-center justify-center h-full p-6">
              <p className="text-2xl font-bold text-center">{cards[currentCardIndex].front}</p>
            </CardContent>
          </Card>

          <Card className="absolute inset-0 w-full h-64 cursor-pointer backface-hidden rotate-y-180">
            <CardContent className="flex items-center justify-center h-full p-6">
              <p className="text-2xl font-bold text-center">{cards[currentCardIndex].back}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" size="lg" className="gap-2" onClick={() => handleNext(false)}>
          <X className="h-4 w-4" />
          Don't Know
        </Button>
        <Button size="lg" className="gap-2" onClick={() => handleNext(true)}>
          <Check className="h-4 w-4" />
          Know
        </Button>
      </div>
    </div>
  )
}

