"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer: "You can get a referral code by connecting your wallet and visiting the referral section of your profile."
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
  },
  // Add more FAQs as needed
]

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-fira-code">
          FA<span className="text-primary">Qs</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

