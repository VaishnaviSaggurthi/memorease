import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AIToolsHub } from "@/components/ai-tools/ai-tools-hub"

export default function AIToolsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="AI Tools Hub" text="Enhance your learning with AI-powered memory aids" />
      <AIToolsHub />
    </DashboardShell>
  )
}

