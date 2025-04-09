import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DeckCreator } from "@/components/decks/deck-creator"

export default function CreateDeckPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Create Deck" text="Create a new flashcard deck" />
      <DeckCreator />
    </DashboardShell>
  )
}

