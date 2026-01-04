import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need coding skills to use GACKX?",
    answer: "No! GACKX is designed to be fully no-code. You can build complex automations using our visual drag-and-drop builder. However, we do offer advanced features for developers who want to write custom code snippets."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use bank-grade encryption (AES-256) for all data at rest and TLS 1.3 for data in transit. We are also SOC2 Type II compliant."
  },
  {
    question: "Can I connect my own custom API?",
    answer: "Absolutely. Our 'Universal Connector' allows you to connect to any REST or GraphQL API by simply providing the endpoint and authentication details."
  },
  {
    question: "What happens if a workflow fails?",
    answer: "GACKX includes built-in error handling and retry logic. You can configure custom alerts to be notified via Slack or Email if a critical workflow encounters an issue."
  }
]

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
