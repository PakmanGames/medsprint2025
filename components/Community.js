import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const communityMembers = [
  {
    name: 'Person1',
    image: '/medsprintlogo.png',
    category: 'Category',
    problem: 'Looking for solutions that can solve X by doing Y with Z'
  },
  {
    name: 'Person2',
    image: '/medsprintlogo.png',
    category: 'Category',
    problem: 'Looking for solutions that can solve X by doing Y with Z'
  },
  {
    name: 'Person3',
    image: '/medsprintlogo.png',
    category: 'Category',
    problem: 'Looking for solutions that can solve X by doing Y with Z'
  }
]

export default function Community() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityMembers.map((member, index) => (
            <Card key={index} className="bg-white bg-opacity-80">
              <CardHeader>
                <CardTitle className="text-center text-purple-800">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <p className="text-purple-700 font-semibold mb-2">{member.category}</p>
                <p className="text-center text-purple-600">{member.problem}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
