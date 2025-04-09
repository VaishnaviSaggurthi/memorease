import { StudyHeader } from "@/components/study/study-header"
import { StudyShell } from "@/components/study/study-shell"
import { FlashcardStudy } from "@/components/study/flashcard-study"

interface StudyPageProps {
  params: {
    deckId: string
  }
}

export default function StudyPage({ params }: StudyPageProps) {
  return (
    <StudyShell>
      <StudyHeader heading="Study Session" text="Review your flashcards" deckId={params.deckId} />
      <FlashcardStudy deckId={params.deckId} />
    </StudyShell>
  )
}

