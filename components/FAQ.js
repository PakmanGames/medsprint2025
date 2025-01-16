'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Question about something that is commonly asked?',
    answer: 'Heres a long answer that answers the long question that is often commonly asked a lot so this is a length explaination about it'
  },
  {
    question: 'Question about something that is commonly asked?',
    answer: 'Heres a long answer that answers the long question that is often commonly asked a lot so this is a length explaination about it'
  },
  {
    question: 'Question about something that is commonly asked?',
    answer: 'Heres a long answer that answers the long question that is often commonly asked a lot so this is a length explaination about it'
  },
  {
    question: 'Question about something that is commonly asked?',
    answer: 'Heres a long answer that answers the long question that is often commonly asked a lot so this is a length explaination about it'
  },
  {
    question: 'Question about something that is commonly asked?',
    answer: 'Heres a long answer that answers the long question that is often commonly asked a lot so this is a length explaination about it'
  },
  {
    question: 'Question about something that is commonly asked?',
    answer: 'Heres a long answer that answers the long question that is often commonly asked a lot so this is a length explaination about it'
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-purple-800 hover:text-purple-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-purple-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
