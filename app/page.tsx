import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import FeatureCard from '@/components/feature-card'
import ThemeToggle from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                shadcn-dashboard
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[980px] flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              Beautifully designed components
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Build your application with shadcn/ui. Copy and paste into your apps. Open source.
            </p>
            <div className="flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Documentation</Button>
            </div>
          </div>
        </section>
        <section className="space-y-6 py-8 md:pt-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build a modern dashboard.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Responsive Design"
              description="Components that work seamlessly across all device sizes."
            />
            <FeatureCard
              title="Dark Mode"
              description="Built-in support for light and dark themes with smooth transitions."
            />
            <FeatureCard
              title="Accessible"
              description="Built with accessibility in mind, following WAI-ARIA standards."
            />
            <FeatureCard
              title="Customizable"
              description="Easily customize components to match your brand and design system."
            />
            <FeatureCard
              title="TypeScript"
              description="Full TypeScript support with type-safe components and utilities."
            />
            <FeatureCard
              title="Modern Stack"
              description="Built with the latest technologies including Next.js 14 and Tailwind CSS."
            />
          </div>
        </section>
        <section className="py-8 md:pt-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Dashboard Stats
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Key metrics and insights at a glance.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}