import Image from 'next/image';

const sponsors = [
  { name: 'MedSprint', logo: '/coming-soon.png' },
  { name: 'MedSprint', logo: '/coming-soon.png' },
  { name: 'MedSprint', logo: '/coming-soon.png' },
  { name: 'MedSprint', logo: '/coming-soon.png' },
  { name: 'MedSprint', logo: '/coming-soon.png' },
  { name: 'MedSprint', logo: '/coming-soon.png' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md flex items-center justify-center">
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={100}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
