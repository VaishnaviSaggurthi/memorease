import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { LeaderboardTabs } from "@/components/leaderboards/leaderboard-tabs"

export default function LeaderboardsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Leaderboards" text="See how you rank against others" />
      <LeaderboardTabs />
    </DashboardShell>
  )
}

