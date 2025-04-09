import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AchievementsGrid } from "@/components/achievements/achievements-grid"

export default function AchievementsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Achievements & Badges" text="Track your learning milestones and accomplishments" />
      <AchievementsGrid />
    </DashboardShell>
  )
}

