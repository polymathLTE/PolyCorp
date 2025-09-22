"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Cookie, Settings } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
    }
  }, [])

  const acceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(newPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences))
    setShowConsent(false)
    setShowSettings(false)

    // Enable analytics if accepted
    if (newPreferences.analytics) {
      // Initialize GA4 or other analytics here
      console.log("Analytics enabled")
    }
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowConsent(false)
    setShowSettings(false)

    // Enable analytics if accepted
    if (preferences.analytics) {
      // Initialize GA4 or other analytics here
      console.log("Analytics enabled")
    }
  }

  const rejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(newPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences))
    setShowConsent(false)
    setShowSettings(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary" />
            <CardTitle className="font-heading">Cookie Preferences</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setShowConsent(false)} className="h-6 w-6 p-0">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {!showSettings ? (
            <>
              <CardDescription>
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptAll} className="flex-1">
                  Accept All
                </Button>
                <Button onClick={rejectAll} variant="outline" className="flex-1 bg-transparent">
                  Reject All
                </Button>
                <Button onClick={() => setShowSettings(true)} variant="outline" className="flex-1 bg-transparent">
                  <Settings className="mr-2 h-4 w-4" />
                  Customize
                </Button>
              </div>
            </>
          ) : (
            <>
              <CardDescription>
                Choose which cookies you want to accept. You can change these settings at any time.
              </CardDescription>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Necessary Cookies</h4>
                    <p className="text-sm text-muted-foreground">Required for the website to function properly</p>
                  </div>
                  <div className="text-sm text-muted-foreground">Always Active</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">Help us understand how visitors use our website</p>
                  </div>
                  <Button
                    variant={preferences.analytics ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: !prev.analytics,
                      }))
                    }
                  >
                    {preferences.analytics ? "Enabled" : "Disabled"}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">Used to track visitors across websites</p>
                  </div>
                  <Button
                    variant={preferences.marketing ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: !prev.marketing,
                      }))
                    }
                  >
                    {preferences.marketing ? "Enabled" : "Disabled"}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptSelected} className="flex-1">
                  Save Preferences
                </Button>
                <Button onClick={() => setShowSettings(false)} variant="outline" className="flex-1 bg-transparent">
                  Back
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
