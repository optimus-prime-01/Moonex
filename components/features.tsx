import { DollarSign, Shield, Scissors, Settings } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: "Cheapest TXs",
    description: "Exchange popular digital currencies at the cheapest possible transaction price"
  },
  {
    icon: Shield,
    title: "CerTIK",
    description: "We are Audited by Certik. CerTIK is the leading security-focused ranking platform to"
  },
  {
    icon: Scissors,
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets"
  },
  {
    icon: Settings,
    title: "CrossDex Support",
    description: "Exchange popular digital currencies at the cheapest possible transaction price"
  }
]

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-fira-code">
          Our <span className="text-primary">Features</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

