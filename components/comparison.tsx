import { Check, X } from 'lucide-react'
import Image from "next/image"

const comparisonPoints = [
  "Point no one",
  "Point no two this",
  "Point no two this",
  "Point no two this",
  "Point no two this"
]

export function Comparison() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-fira-code">
          Why <span className="text-primary">MoonEX</span> ?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4">Comparison</th>
                <th className="text-center py-4">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/moonex-logo.svg" alt="Moonex" width={24} height={24} />
                    <span className="text-primary">Moonex</span>
                  </div>
                </th>
                <th className="text-center py-4">
                  <span className="text-pink-500">UNISWAP</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonPoints.map((point, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-4 text-muted-foreground">{point}</td>
                  <td className="text-center py-4">
                    <Check className="mx-auto text-green-400" />
                  </td>
                  <td className="text-center py-4">
                    <X className="mx-auto text-red-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

