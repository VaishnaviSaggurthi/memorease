"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Bookmark, BookmarkCheck, Volume } from "lucide-react"

export function StoryViewer() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0)
  const [bookmarkedStories, setBookmarkedStories] = useState<string[]>([])

  // Mock data - in a real app, this would come from an API
  const stories = [
    {
      id: "1",
      title: "The Cell's Journey",
      description: "Follow a red blood cell as it travels through the human body",
      category: "Biology",
      level: "Beginner",
      duration: "10 min",
      panels: [
        {
          id: "1-1",
          image: "/placeholder.svg?height=300&width=500",
          title: "The Heart",
          content: "Our journey begins in the heart, where oxygen-rich blood is pumped throughout the body.",
        },
        {
          id: "1-2",
          image: "/placeholder.svg?height=300&width=500",
          title: "The Arteries",
          content: "The red blood cell travels through arteries, which carry blood away from the heart.",
        },
        {
          id: "1-3",
          image: "/placeholder.svg?height=300&width=500",
          title: "The Capillaries",
          content: "In the capillaries, oxygen is delivered to tissues and carbon dioxide is picked up.",
        },
        {
          id: "1-4",
          image: "/placeholder.svg?height=300&width=500",
          title: "The Veins",
          content: "The red blood cell, now carrying carbon dioxide, returns to the heart through veins.",
        },
        {
          id: "1-5",
          image: "/placeholder.svg?height=300&width=500",
          title: "The Lungs",
          content: "In the lungs, carbon dioxide is released and fresh oxygen is picked up.",
        },
      ],
    },
    {
      id: "2",
      title: "Ancient Rome: Rise of an Empire",
      description: "Explore the key events that led to the rise of the Roman Empire",
      category: "History",
      level: "Intermediate",
      duration: "15 min",
      panels: [
        {
          id: "2-1",
          image: "/placeholder.svg?height=300&width=500",
          title: "The Founding of Rome",
          content: "According to legend, Rome was founded by Romulus and Remus in 753 BCE.",
        },
        {
          id: "2-2",
          image: "/placeholder.svg?height=300&width=500",
          title: "The Roman Republic",
          content: "The Roman Republic was established in 509 BCE after the overthrow of the monarchy.",
        },
      ],
    },
  ]

  const currentStory = stories[currentStoryIndex]
  const currentPanel = currentStory.panels[currentPanelIndex]

  const nextPanel = () => {
    if (currentPanelIndex < currentStory.panels.length - 1) {
      setCurrentPanelIndex(currentPanelIndex + 1)
    } else if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
      setCurrentPanelIndex(0)
    }
  }

  const prevPanel = () => {
    if (currentPanelIndex > 0) {
      setCurrentPanelIndex(currentPanelIndex - 1)
    } else if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
      setCurrentPanelIndex(stories[currentStoryIndex - 1].panels.length - 1)
    }
  }

  const toggleBookmark = (storyId: string) => {
    if (bookmarkedStories.includes(storyId)) {
      setBookmarkedStories(bookmarkedStories.filter((id) => id !== storyId))
    } else {
      setBookmarkedStories([...bookmarkedStories, storyId])
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="stories" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="stories">Story Library</TabsTrigger>
          <TabsTrigger value="viewer">Story Viewer</TabsTrigger>
        </TabsList>

        <TabsContent value="stories" className="pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <Card key={story.id} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <img
                    src={story.panels[0].image || "/placeholder.svg"}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="font-serif">{story.title}</CardTitle>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleBookmark(story.id)}>
                      {bookmarkedStories.includes(story.id) ? (
                        <BookmarkCheck className="h-4 w-4 text-primary" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                      <span className="sr-only">Bookmark</span>
                    </Button>
                  </div>
                  <CardDescription>{story.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{story.category}</Badge>
                    <Badge variant="outline">{story.level}</Badge>
                    <Badge variant="outline">{story.duration}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full gap-2"
                    onClick={() => {
                      setCurrentStoryIndex(index)
                      setCurrentPanelIndex(0)
                    }}
                  >
                    <Play className="h-4 w-4" />
                    Start Story
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="viewer" className="pt-6">
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-serif">{currentStory.title}</CardTitle>
                  <CardDescription>
                    Panel {currentPanelIndex + 1} of {currentStory.panels.length}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => toggleBookmark(currentStory.id)}>
                    {bookmarkedStories.includes(currentStory.id) ? (
                      <BookmarkCheck className="h-5 w-5 text-primary" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                    <span className="sr-only">Bookmark</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Volume className="h-5 w-5" />
                    <span className="sr-only">Read Aloud</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src={currentPanel.image || "/placeholder.svg"}
                    alt={currentPanel.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif mb-2">{currentPanel.title}</h3>
                  <p>{currentPanel.content}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-between">
                <Button
                  variant="outline"
                  onClick={prevPanel}
                  disabled={currentStoryIndex === 0 && currentPanelIndex === 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={nextPanel}
                  disabled={
                    currentStoryIndex === stories.length - 1 && currentPanelIndex === currentStory.panels.length - 1
                  }
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

