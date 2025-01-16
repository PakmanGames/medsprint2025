import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">MedSprint 2025 Hackathon</h1>
            <p className="text-lg text-purple-800 mb-6">
              Join us for an exciting weekend hackathon where medicine meets technology. 
              Solve real-world problems, network with industry experts, and win amazing prizes!
            </p>
            <p className="text-purple-800 mb-6">
              <strong>Date:</strong> February 2025????<br />
              <strong>Location:</strong> Somewhere in Toronto????
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Register Now</Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/"
              alt="medsprint image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

