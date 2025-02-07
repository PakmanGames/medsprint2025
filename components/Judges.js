import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { judges } from '@/data/judges';

export default function Judges() {
  return (
    <section id="judges" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Meet Our Judges</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <Card key={index} className="bg-white bg-opacity-80 max-w-96">
                <CardHeader>
                  <Image
                    src={judge.image || "/placeholder.svg"}
                    alt={judge.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-2xl text-center text-purple-800">{judge.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-purple-700 font-semibold mb-2">{judge.background}</p>
                  <p className="text-purple-700">{judge.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}