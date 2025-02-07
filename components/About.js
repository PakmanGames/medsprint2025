import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">MedSprint 2025: </h1>
            <h1 className='text-xl md:text-3xl font-bold text-purple-900 mb-4'>Patient-Centered Design-a-Thon</h1>
            <p className="text-lg text-purple-800 mb-6">
              MedSprint brings students, professionals, and innovators together to create impactful, personalized solutions for community members with specific challenges. Over two days, participants will collaborate, learn, and design innovative ideas to tackle real-world problems faced by individuals in our community.
            </p>
            <div className="text-purple-800 mb-6">
              <strong>Date:</strong> {`Saturday March 22, 2025 - Sunday March 23, 2025`}<br />
              <strong>Location:</strong>
              <p>McMaster University</p>
              <p>Peter George for Living and Learning (PGCLL), Mezzanine Level</p>
              <p>1280 Main St. W, Hamilton, ON L8S 4L8</p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Register Now</Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/medsprint_info.png"
              alt="Information about MedSprint"
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
