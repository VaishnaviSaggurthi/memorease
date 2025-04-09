import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Brain } from "lucide-react"
import Link from "next/link"

export function UpcomingReviews() {
  const upcomingReviews = [
    { id: "1", name: "Spanish Vocabulary", count: 24, time: "Today", icon: "🇪🇸" },
    { id: "2", name: "Biology Terms", count: 15, time: "Tomorrow", icon: "🧬" },
    { id: "3", name: "History Dates", count: 32, time: "In 2 days", icon: "📜" },
    { id: "4", name: "Programming Concepts", count: 18, time: "Today", icon: "💻" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Upcoming Reviews</CardTitle>
        <CardDescription>Your scheduled review sessions based on spaced repetition</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingReviews.map((review) => (
            <div key={review.id} className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg">
                  {review.icon}
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium leading-none">{review.name}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{review.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{review.count} cards</Badge>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/study/${review.id}`}>
                    <Brain className="mr-1 h-3 w-3" />
                    Study
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

