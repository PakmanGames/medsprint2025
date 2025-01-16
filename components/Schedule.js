const schedule = {
    "Day 1": [
      { time: "9:00 AM", event: "Registration and Check-in" },
      { time: "10:00 AM", event: "Opening Ceremony" },
      { time: "11:00 AM", event: "Team Formation and Networking" },
      { time: "12:00 PM", event: "Lunch Break" },
      { time: "1:00 PM", event: "Some keynote" },
      { time: "6:00 PM", event: "Dinner" },
      { time: "8:00 PM", event: "Workshop to learn this thing" },
    ],
    "Day 2": [
      { time: "9:00 AM", event: "Snacks" },
      { time: "10:00 AM", event: "Another workshop" },
      { time: "11:00 AM", event: "Some keynote" },
      { time: "12:00 PM", event: "Lunch Break" },
      { time: "1:00 PM", event: "Submission deadline" },
      { time: "6:00 PM", event: "Presentations and judging" },
      { time: "8:00 PM", event: "Closing ceremony" },
    ],
  };
  
  export default function Schedule() {
    return (
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(schedule).map(([day, events]) => (
              <div key={day}>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">{day}</h3>
                <ul className="space-y-4">
                  {events.map((event, index) => (
                    <li key={index} className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
                      <span className="font-bold text-purple-700">{event.time}</span>
                      <span className="ml-4 text-purple-600">{event.event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  