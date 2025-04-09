import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ProgressOverview } from "@/components/dashboard/progress-overview"
import { DailyChallenge } from "@/components/dashboard/daily-challenge"
import { UpcomingReviews } from "@/components/dashboard/upcoming-reviews"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { StreakCalendar } from "@/components/dashboard/streak-calendar"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Track your progress and upcoming reviews" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full lg:col-span-2">
          <ProgressOverview />
        </div>
        <div className="md:col-span-1">
          <DailyChallenge />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <UpcomingReviews />
        </div>
        <div className="md:col-span-1">
          <QuickActions />
        </div>
        <div className="col-span-full">
          <StreakCalendar />
        </div>
      </div>
    </DashboardShell>
  )
}

