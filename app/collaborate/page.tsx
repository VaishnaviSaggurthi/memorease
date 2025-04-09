import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { CollaborationHub } from "@/components/collaborate/collaboration-hub"

export default function CollaboratePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Collaborative Tools" text="Work together with shared notes and mind maps" />
      <CollaborationHub />
    </DashboardShell>
  )
}

