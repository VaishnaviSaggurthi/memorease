"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Bell, Settings, Shield, Upload, Save, Moon, Sun, Sparkles, Volume } from "lucide-react"

export function ProfileSettings() {
  const [darkMode, setDarkMode] = useState(true)
  const [aiAssistant, setAiAssistant] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="profile" className="gap-2">
          <User className="h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications" className="gap-2">
          <Bell className="h-4 w-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="appearance" className="gap-2">
          <Settings className="h-4 w-4" />
          Appearance
        </TabsTrigger>
        <TabsTrigger value="security" className="gap-2">
          <Shield className="h-4 w-4" />
          Security
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="pt-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Profile Information</CardTitle>
            <CardDescription>Update your profile information and learning preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:justify-start">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Change Avatar
                </Button>
                <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Input id="language" defaultValue="English" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                defaultValue="I'm a student interested in biology and history. I use MemorEase to prepare for exams and learn new concepts."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Learning Goals</Label>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Switch id="goal-1" defaultChecked />
                  <Label htmlFor="goal-1">Exam Preparation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="goal-2" defaultChecked />
                  <Label htmlFor="goal-2">Language Learning</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="goal-3" />
                  <Label htmlFor="goal-3">Professional Development</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="goal-4" />
                  <Label htmlFor="goal-4">Personal Interest</Label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="pt-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Notification Settings</CardTitle>
            <CardDescription>Configure how and when you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Email Notifications</h3>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-reviews">Due Reviews</Label>
                  <Switch id="email-reviews" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-streak">Streak Reminders</Label>
                  <Switch id="email-streak" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-challenges">Daily Challenges</Label>
                  <Switch id="email-challenges" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-achievements">New Achievements</Label>
                  <Switch id="email-achievements" defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Push Notifications</h3>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-reviews">Due Reviews</Label>
                  <Switch id="push-reviews" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-streak">Streak Reminders</Label>
                  <Switch id="push-streak" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-challenges">Daily Challenges</Label>
                  <Switch id="push-challenges" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-achievements">New Achievements</Label>
                  <Switch id="push-achievements" defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Notification Schedule</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="reminder-time">Daily Reminder Time</Label>
                  <Input id="reminder-time" type="time" defaultValue="18:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quiet-hours">Quiet Hours</Label>
                  <div className="flex items-center gap-2">
                    <Input id="quiet-hours-start" type="time" defaultValue="22:00" />
                    <span>to</span>
                    <Input id="quiet-hours-end" type="time" defaultValue="08:00" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="appearance" className="pt-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Appearance Settings</CardTitle>
            <CardDescription>Customize the look and feel of the application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Theme</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {darkMode ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
                  <Label htmlFor="theme-toggle">{darkMode ? "Dark Mode" : "Light Mode"}</Label>
                </div>
                <Switch id="theme-toggle" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">AI Features</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <Label htmlFor="ai-toggle">AI Assistant</Label>
                </div>
                <Switch id="ai-toggle" checked={aiAssistant} onCheckedChange={setAiAssistant} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume className="h-5 w-5 text-primary" />
                  <Label htmlFor="audio-toggle">Audio Pronunciation</Label>
                </div>
                <Switch id="audio-toggle" checked={audioEnabled} onCheckedChange={setAudioEnabled} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Flashcard Display</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="card-size">Card Size</Label>
                  <Input id="card-size" type="range" min="1" max="3" defaultValue="2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="font-size">Font Size</Label>
                  <Input id="font-size" type="range" min="1" max="3" defaultValue="2" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="pt-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Security Settings</CardTitle>
            <CardDescription>Manage your account security and privacy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Change Password</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <Button className="mt-2">Update Password</Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Privacy Settings</h3>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="public-profile">Public Profile</Label>
                  <Switch id="public-profile" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-leaderboard">Show on Leaderboards</Label>
                  <Switch id="show-leaderboard" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="share-progress">Share Progress with Friends</Label>
                  <Switch id="share-progress" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="anonymous-data">Share Anonymous Usage Data</Label>
                  <Switch id="anonymous-data" defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Account Actions</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline">Export My Data</Button>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

