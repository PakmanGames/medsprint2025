"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { schedule } from "@/data/schedule";
  
  export default function Schedule() {
    return (
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(schedule).map(([day, events]) => (
              <div key={day}>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">{day}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {events.map((event, index) => (
                    <AccordionItem
                      key={index}
                      value={`${day}-${index}`}
                      className="bg-white bg-opacity-80 px-4 py-2 m-2 rounded-lg shadow-md"
                    >
                      <AccordionTrigger className="text-left">
                        <span className="font-bold text-purple-700">{event.time}</span>
                        <span className="ml-4 text-purple-600">{event.event}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-purple-700">
                        <ul className="list-disc pl-5 space-y-1">
                          {event.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  