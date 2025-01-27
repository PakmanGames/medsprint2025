import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-white bg-opacity-80 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-purple-800">
              MedSprint 2025
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button variant="link" className="text-purple-800 hover:text-purple-600">
              Mentor Registration
            </Button>
            <Button variant="link" className="text-purple-800 hover:text-purple-600">
              Volunteer Registration
            </Button>
            <div className="flex space-x-4">
              {/* <Link href="/" className="text-purple-800 hover:text-purple-600">
                <Facebook size={24} />
              </Link>
              <Link href="/" className="text-purple-800 hover:text-purple-600">
                <Twitter size={24} />
              </Link> */}
              <Link href="https://www.instagram.com/macmed_t/" target="_blank" className="text-purple-800 hover:text-purple-600">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/med-t/" target="_blank" className="text-purple-800 hover:text-purple-600">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
