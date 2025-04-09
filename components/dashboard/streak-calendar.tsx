"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"

export function StreakCalendar() {
  // Generate last 30 days for the heatmap
  const today = new Date()
  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    return date
  }).reverse()

  // Mock activity data - in a real app, this would come from an API
  const activityData: Record<string, number> = {
    // Format: "YYYY-MM-DD": activityLevel (0-3)
    // 0: no activity, 1: low, 2: medium, 3: high
  }

  // Fill with random data
  days.forEach((day) => {
    const dateStr = day.toISOString().split("T")[0]
    // More recent days are more likely to have activity
    const recencyBonus = Math.min(3, Math.floor((days.indexOf(day) / days.length) * 4))
    const randomActivity = Math.floor(Math.random() * 4) + recencyBonus
    activityData[dateStr] = Math.min(3, Math.floor(randomActivity / 2))
  })

  // Get day name
  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" }).substring(0, 1)
  }

  // Get activity class based on level
  const getActivityClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-muted/30"
      case 1:
        return "bg-primary/30"
      case 2:
        return "bg-primary/60"
      case 3:
        return "bg-primary"
      default:
        return "bg-muted/30"
    }
  }

  // Current streak calculation
  const currentStreak = 12 // In a real app, calculate this from actual data

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="font-serif">Activity Streak</CardTitle>
          <CardDescription>Your daily learning activity over the past 30 days</CardDescription>
        </div>
        <Badge className="bg-secondary/20 text-secondary border-secondary/20 px-3 py-1">
          <Flame className="mr-1 h-4 w-4 text-secondary" />
          <span className="font-bold">{currentStreak} day streak</span>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {/* Day labels */}
          {Array.from({ length: 7 }, (_, i) => {
            const day = new Date()
            day.setDate(day.getDate() - day.getDay() + i)
            return (
              <div key={`label-${i}`} className="text-center text-xs text-muted-foreground">
                {getDayName(day)}
              </div>
            )
          })}

          {/* Calendar squares */}
          {days.map((day, i) => {
            const dateStr = day.toISOString().split("T")[0]
            const activityLevel = activityData[dateStr] || 0

            return (
              <div
                key={dateStr}
                className={`aspect-square rounded-sm ${getActivityClass(activityLevel)} transition-colors hover:opacity-80`}
                title={`${dateStr}: ${activityLevel ? "Activity level " + activityLevel : "No activity"}`}
              />
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

