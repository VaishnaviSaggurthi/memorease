import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { StoryViewer } from "@/components/story-mode/story-viewer"

export default function StoryModePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Story Mode" text="Learn through illustrated stories and narratives" />
      <StoryViewer />
    </DashboardShell>
  )
}

