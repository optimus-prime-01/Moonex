import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20" />
      <div className="absolute top-20 left-10 text-muted-foreground/10 text-6xl animate-float">✧</div>
      <div className="absolute bottom-40 right-20 text-muted-foreground/10 text-4xl animate-float" style={{ animationDelay: "1s" }}>✧</div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-fira-code">
            Trusted Multi-Chain
            <br />
            <span className="text-primary">DEX</span> Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Connect Wallet
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

