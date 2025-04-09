import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Trophy } from "lucide-react"
import Link from "next/link"

export function DailyChallenge() {
  return (
    <Card className="border-primary/20">
      <CardHeader className="bg-primary/5 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="font-serif text-primary">Daily Challenge</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Trophy className="mr-1 h-3 w-3" />
            50 XP
          </Badge>
        </div>
        <CardDescription>Complete today's challenge to earn XP and maintain your streak</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-secondary" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium">Memory Masters Quiz</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Test your knowledge on famous historical figures and their achievements
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/daily-challenge">
            <Sparkles className="mr-2 h-4 w-4" />
            Start Challenge
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

