import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import Link from "next/link"

export function ReviewSchedule() {
  const upcomingReviews = [
    { id: "1", name: "Spanish Vocabulary", count: 24, time: "Today" },
    { id: "2", name: "Biology Terms", count: 15, time: "Tomorrow" },
    { id: "3", name: "History Dates", count: 32, time: "In 2 days" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Reviews</CardTitle>
        <CardDescription>Your scheduled review sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingReviews.map((review) => (
            <div key={review.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{review.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{review.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{review.count} cards</Badge>
                <Button size="sm" asChild>
                  <Link href={`/study/${review.id}`}>Study</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

