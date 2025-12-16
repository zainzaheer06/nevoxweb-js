"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What languages and accents does Nevox AI support?",
    answer:
      "Nevox AI specializes in Saudi-Arabic dialects and provides native-level speech recognition and generation specifically trained for Saudi Arabia.",
  },
  {
    question: "Can Nevox AI integrate with my CRM?",
    answer:
      "Yes! Nevox AI seamlessly integrates with popular CRMs like Salesforce, HubSpot, and custom systems through our API.",
  },
  {
    question: "Is this suitable for small businesses?",
    answer:
      "Absolutely. Nevox AI scales from small businesses to enterprises, with flexible pricing plans that grow with your needs.",
  },
  {
    question: "Does it work 24/7?",
    answer: "Yes, Nevox AI operates 24/7 without breaks, ensuring your customers always receive instant responses.",
  },
  {
    question: "Is Nevox AI PDDL compliant?",
    answer:
      "Yes, Nevox AI is fully compliant with Saudi Arabia's Personal Data Protection Law (PDDL) and international data security standards.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Questions, Answered</h2>
          <p className="text-gray-400 text-lg">Get instant answers to most common questions about Nevox AI.</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-gradient-to-br from-purple-900/20 to-black/50 border-purple-500/30 rounded-lg px-6 hover:border-purple-500/60 transition-colors duration-300"
              >
                <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
