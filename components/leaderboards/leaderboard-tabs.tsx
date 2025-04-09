"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Clock, Brain } from "lucide-react"

export function LeaderboardTabs() {
  const [leaderboardType, setLeaderboardType] = useState<"global" | "friends">("global")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          variant={leaderboardType === "global" ? "default" : "outline"}
          onClick={() => setLeaderboardType("global")}
          className="gap-2"
        >
          <Trophy className="h-4 w-4" />
          Global Leaderboard
        </Button>
        <Button
          variant={leaderboardType === "friends" ? "default" : "outline"}
          onClick={() => setLeaderboardType("friends")}
          className="gap-2"
        >
          <Users className="h-4 w-4" />
          Friends Leaderboard
        </Button>
      </div>

      <Tabs defaultValue="xp" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="xp">
            <Trophy className="mr-2 h-4 w-4" />
            XP Points
          </TabsTrigger>
          <TabsTrigger value="streaks">
            <Clock className="mr-2 h-4 w-4" />
            Streaks
          </TabsTrigger>
          <TabsTrigger value="cards">
            <Brain className="mr-2 h-4 w-4" />
            Cards Reviewed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="xp" className="pt-6">
          <LeaderboardXP type={leaderboardType} />
        </TabsContent>

        <TabsContent value="streaks" className="pt-6">
          <LeaderboardStreaks type={leaderboardType} />
        </TabsContent>

        <TabsContent value="cards" className="pt-6">
          <LeaderboardCards type={leaderboardType} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface LeaderboardProps {
  type: "global" | "friends"
}

function LeaderboardXP({ type }: LeaderboardProps) {
  // Mock data - in a real app, this would come from an API
  const globalUsers = [
    { id: "1", name: "Alex Johnson", avatar: "/placeholder.svg", xp: 12450, rank: 1 },
    { id: "2", name: "Maria Garcia", avatar: "/placeholder.svg", xp: 10820, rank: 2 },
    { id: "3", name: "James Smith", avatar: "/placeholder.svg", xp: 9675, rank: 3 },
    { id: "4", name: "Sarah Williams", avatar: "/placeholder.svg", xp: 8540, rank: 4 },
    { id: "5", name: "David Brown", avatar: "/placeholder.svg", xp: 7920, rank: 5 },
    { id: "6", name: "Lisa Davis", avatar: "/placeholder.svg", xp: 7450, rank: 6 },
    { id: "7", name: "Robert Miller", avatar: "/placeholder.svg", xp: 6890, rank: 7 },
    { id: "8", name: "Jennifer Wilson", avatar: "/placeholder.svg", xp: 6340, rank: 8 },
    { id: "9", name: "Michael Moore", avatar: "/placeholder.svg", xp: 5780, rank: 9 },
    { id: "10", name: "John Doe", avatar: "/placeholder.svg", xp: 2450, rank: 42 },
  ]

  const friendUsers = [
    { id: "10", name: "John Doe", avatar: "/placeholder.svg", xp: 2450, rank: 1 },
    { id: "11", name: "Emma Thompson", avatar: "/placeholder.svg", xp: 2180, rank: 2 },
    { id: "12", name: "Daniel Lee", avatar: "/placeholder.svg", xp: 1950, rank: 3 },
    { id: "13", name: "Olivia Martin", avatar: "/placeholder.svg", xp: 1820, rank: 4 },
    { id: "14", name: "William Taylor", avatar: "/placeholder.svg", xp: 1640, rank: 5 },
  ]

  const users = type === "global" ? globalUsers : friendUsers
  const currentUser = users.find((user) => user.id === "10") // John Doe is the current user

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">XP Leaderboard</CardTitle>
        <CardDescription>
          {type === "global" ? "Top performers worldwide" : "See how you rank among friends"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Top 3 users */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {users.slice(0, 3).map((user, index) => (
              <div
                key={user.id}
                className={`flex flex-col items-center ${
                  index === 0 ? "order-2 sm:scale-110" : index === 1 ? "order-1" : "order-3"
                }`}
              >
                <div className="relative">
                  <Avatar className="h-16 w-16 border-2 border-background">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-2 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full ${
                      index === 0
                        ? "bg-yellow-500 text-yellow-950"
                        : index === 1
                          ? "bg-gray-300 text-gray-950"
                          : "bg-amber-700 text-amber-50"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.xp.toLocaleString()} XP</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rest of the leaderboard */}
          <div className="space-y-2">
            {users.slice(3).map((user) => (
              <div
                key={user.id}
                className={`flex items-center justify-between rounded-lg border p-3 ${
                  user.id === currentUser?.id ? "border-primary bg-primary/5" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {user.rank}
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    {user.id === currentUser?.id && (
                      <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 text-primary">
                        You
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{user.xp.toLocaleString()} XP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function LeaderboardStreaks({ type }: LeaderboardProps) {
  // Similar implementation as LeaderboardXP but for streaks
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Streak Leaderboard</CardTitle>
        <CardDescription>
          {type === "global" ? "Users with the longest study streaks" : "Compare streaks with friends"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Clock className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Streak data loading</h3>
          <p className="text-muted-foreground">Check back soon to see streak rankings</p>
        </div>
      </CardContent>
    </Card>
  )
}

function LeaderboardCards({ type }: LeaderboardProps) {
  // Similar implementation as LeaderboardXP but for cards reviewed
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Cards Reviewed Leaderboard</CardTitle>
        <CardDescription>
          {type === "global" ? "Users who have reviewed the most cards" : "Compare card counts with friends"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Brain className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Card review data loading</h3>
          <p className="text-muted-foreground">Check back soon to see card review rankings</p>
        </div>
      </CardContent>
    </Card>
  )
}

