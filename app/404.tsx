import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-6xl sm:text-8xl text-primary mb-4">404</h1>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-heading">Helpful Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/work">
                  <Search className="mr-2 h-4 w-4" />
                  Browse My Work
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/about">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Learn About Me
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
