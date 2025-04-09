"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, Share2, Network, Plus, Search, Edit, UserPlus } from "lucide-react"

export function CollaborationHub() {
  return (
    <Tabs defaultValue="notes" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="notes" className="gap-2">
          <FileText className="h-4 w-4" />
          Collaborative Notes
        </TabsTrigger>
        <TabsTrigger value="mindmaps" className="gap-2">
          <Network className="h-4 w-4" />
          Mind Maps
        </TabsTrigger>
      </TabsList>

      <TabsContent value="notes" className="pt-6">
        <CollaborativeNotes />
      </TabsContent>

      <TabsContent value="mindmaps" className="pt-6">
        <MindMaps />
      </TabsContent>
    </Tabs>
  )
}

function CollaborativeNotes() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data - in a real app, this would come from an API
  const notes = [
    {
      id: "1",
      title: "Biology Study Group Notes",
      description: "Collaborative notes for our biology exam preparation",
      updatedAt: "2 hours ago",
      collaborators: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg" },
        { id: "2", name: "Emma Thompson", avatar: "/placeholder.svg" },
        { id: "3", name: "Daniel Lee", avatar: "/placeholder.svg" },
      ],
      isOwner: true,
    },
    {
      id: "2",
      title: "History Project Research",
      description: "Shared notes for our history project on ancient civilizations",
      updatedAt: "Yesterday",
      collaborators: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg" },
        { id: "4", name: "Olivia Martin", avatar: "/placeholder.svg" },
      ],
      isOwner: false,
    },
    {
      id: "3",
      title: "Physics Formula Collection",
      description: "A comprehensive collection of physics formulas and explanations",
      updatedAt: "3 days ago",
      collaborators: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg" },
        { id: "5", name: "William Taylor", avatar: "/placeholder.svg" },
        { id: "6", name: "Sophia Anderson", avatar: "/placeholder.svg" },
        { id: "7", name: "James Wilson", avatar: "/placeholder.svg" },
      ],
      isOwner: true,
    },
  ]

  // Filter notes based on search query
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <Button asChild>
          <div className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create New Note
          </div>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.map((note) => (
          <Card key={note.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <CardTitle className="font-serif">{note.title}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <CardDescription>{note.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex -space-x-2">
                {note.collaborators.map((collaborator) => (
                  <Avatar key={collaborator.id} className="h-8 w-8 border-2 border-background">
                    <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                    <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-xs font-medium">
                  <UserPlus className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Last updated {note.updatedAt}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button className="w-full" variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Open Note
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function MindMaps() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data - in a real app, this would come from an API
  const mindmaps = [
    {
      id: "1",
      title: "Biology Concepts",
      description: "Visual map of key biology concepts and their relationships",
      updatedAt: "1 day ago",
      collaborators: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg" },
        { id: "2", name: "Emma Thompson", avatar: "/placeholder.svg" },
      ],
      isOwner: true,
      thumbnail: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "2",
      title: "History Timeline",
      description: "Interactive timeline of major historical events",
      updatedAt: "3 days ago",
      collaborators: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg" },
        { id: "4", name: "Olivia Martin", avatar: "/placeholder.svg" },
        { id: "5", name: "William Taylor", avatar: "/placeholder.svg" },
      ],
      isOwner: false,
      thumbnail: "/placeholder.svg?height=100&width=200",
    },
  ]

  // Filter mindmaps based on search query
  const filteredMindmaps = mindmaps.filter(
    (mindmap) =>
      mindmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mindmap.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search mind maps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <Button asChild>
          <div className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create New Mind Map
          </div>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filteredMindmaps.map((mindmap) => (
          <Card key={mindmap.id} className="overflow-hidden">
            <div className="aspect-video w-full bg-muted">
              <img
                src={mindmap.thumbnail || "/placeholder.svg"}
                alt={mindmap.title}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <CardTitle className="font-serif">{mindmap.title}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <CardDescription>{mindmap.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex -space-x-2">
                {mindmap.collaborators.map((collaborator) => (
                  <Avatar key={collaborator.id} className="h-8 w-8 border-2 border-background">
                    <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                    <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-xs font-medium">
                  <UserPlus className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Last updated {mindmap.updatedAt}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button className="w-full" variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Mind Map
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

