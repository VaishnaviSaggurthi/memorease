import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DeckManager } from "@/components/decks/deck-manager"

export default function DecksPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Deck Manager" text="Manage and organize your flashcard decks" />
      <DeckManager />
    </DashboardShell>
  )
}

