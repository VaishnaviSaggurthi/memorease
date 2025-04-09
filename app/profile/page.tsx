import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ProfileSettings } from "@/components/profile/profile-settings"

export default function ProfilePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Profile & Settings" text="Manage your account and preferences" />
      <ProfileSettings />
    </DashboardShell>
  )
}

