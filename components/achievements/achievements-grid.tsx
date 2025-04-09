"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Clock, Brain, Zap, Users, BookOpen, Award } from "lucide-react"

export function AchievementsGrid() {
  // Mock achievement data - in a real app, this would come from an API
  const achievements = [
    {
      id: "1",
      title: "Memory Master",
      description: "Review 1,000 cards with high accuracy",
      icon: Brain,
      progress: 65,
      unlocked: true,
      category: "study",
      date: "2023-12-15",
    },
    {
      id: "2",
      title: "Speed Learner",
      description: "Complete 50 study sessions in under 10 minutes each",
      icon: Zap,
      progress: 100,
      unlocked: true,
      category: "study",
      date: "2023-11-20",
    },
    {
      id: "3",
      title: "Quiz Champion",
      description: "Win 25 daily challenges",
      icon: Trophy,
      progress: 40,
      unlocked: false,
      category: "challenge",
      date: null,
    },
    {
      id: "4",
      title: "Streak Master",
      description: "Maintain a 30-day study streak",
      icon: Clock,
      progress: 80,
      unlocked: false,
      category: "consistency",
      date: null,
    },
    {
      id: "5",
      title: "Deck Creator",
      description: "Create 10 decks with at least 20 cards each",
      icon: Star,
      progress: 100,
      unlocked: true,
      category: "creation",
      date: "2024-01-05",
    },
    {
      id: "6",
      title: "Collaboration King",
      description: "Collaborate on 5 shared decks",
      icon: Users,
      progress: 20,
      unlocked: false,
      category: "social",
      date: null,
    },
    {
      id: "7",
      title: "Story Explorer",
      description: "Complete 15 story mode lessons",
      icon: BookOpen,
      progress: 33,
      unlocked: false,
      category: "story",
      date: null,
    },
    {
      id: "8",
      title: "AI Assistant",
      description: "Generate 50 mnemonics using AI tools",
      icon: Zap,
      progress: 100,
      unlocked: true,
      category: "ai",
      date: "2024-02-10",
    },
    {
      id: "9",
      title: "Global Scholar",
      description: "Reach the top 100 on the global leaderboard",
      icon: Award,
      progress: 0,
      unlocked: false,
      category: "social",
      date: null,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="text-4xl font-bold text-primary">4</div>
            <p className="text-sm text-muted-foreground">Badges Earned</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="text-4xl font-bold text-primary">5</div>
            <p className="text-sm text-muted-foreground">Badges In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="text-4xl font-bold text-secondary">12</div>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="text-4xl font-bold text-secondary">2,450</div>
            <p className="text-sm text-muted-foreground">Total XP</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unlocked">Unlocked</TabsTrigger>
          <TabsTrigger value="locked">Locked</TabsTrigger>
          <TabsTrigger value="study">Study</TabsTrigger>
          <TabsTrigger value="social" className="hidden md:inline-flex">
            Social
          </TabsTrigger>
          <TabsTrigger value="creation" className="hidden md:inline-flex">
            Creation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unlocked" className="pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.unlocked)
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="locked" className="pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => !a.unlocked)
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="study" className="pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.category === "study")
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="social" className="pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.category === "social")
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="creation" className="pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.category === "creation")
              .map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface AchievementProps {
  achievement: {
    id: string
    title: string
    description: string
    icon: React.ElementType
    progress: number
    unlocked: boolean
    category: string
    date: string | null
  }
}

function AchievementCard({ achievement }: AchievementProps) {
  const Icon = achievement.icon

  return (
    <Card className={achievement.unlocked ? "border-secondary/20" : "border-muted/20"}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                achievement.unlocked ? "bg-secondary/20 text-secondary" : "bg-muted/20 text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
            </div>
            <CardTitle className="text-base font-serif">{achievement.title}</CardTitle>
          </div>
          <Badge variant={achievement.unlocked ? "secondary" : "outline"}>
            {achievement.unlocked ? "Unlocked" : `${achievement.progress}%`}
          </Badge>
        </div>
        <CardDescription>{achievement.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={achievement.progress} className="h-2" />
        {achievement.date && (
          <p className="mt-2 text-xs text-muted-foreground">
            Achieved on {new Date(achievement.date).toLocaleDateString()}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

