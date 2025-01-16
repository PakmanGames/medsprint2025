import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const judges = [
  {
    name: 'Judge1',
    image: '/medsprintlogo.png',
    background: 'Judge1 Degree Background',
    position: 'Judge1 position',
    bio: 'This judge has a background in this and that and has interests in this particular field. This will be a short 100 word bio or so about the judge, some of their fields of interests, their expertise and what theyre looking for.'
  },
  {
    name: 'Judge2',
    image: '/medsprintlogo.png',
    background: 'Judge2 Degree Background',
    position: 'Judge2 position',
    bio: 'This judge has a background in this and that and has interests in this particular field. This will be a short 100 word bio or so about the judge, some of their fields of interests, their expertise and what theyre looking for.'
  },
  {
    name: 'Judge3',
    image: '/medsprintlogo.png',
    background: 'Judge3 Degree Background',
    position: 'Judge3 position',
    bio: 'This judge has a background in this and that and has interests in this particular field. This will be a short 100 word bio or so about the judge, some of their fields of interests, their expertise and what theyre looking for.'
  }
];

export default function Judges() {
  return (
    <section id="judges" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Meet Our Judges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <Card key={index} className="bg-white bg-opacity-80">
              <CardHeader>
                <Image
                  src={judge.image || "/placeholder.svg"}
                  alt={judge.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-center text-purple-800">{judge.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-purple-700 font-semibold mb-2">{judge.background}</p>
                <p className="text-purple-600 mb-4">{judge.position}</p>
                <p className="text-purple-700">{judge.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
