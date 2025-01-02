import Image from 'next/image';

export default function TravelGuides() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-12">Travel Guides</h1>
      <p className="text-center text-gray-600 mt-4">Popular travel blog posts & guides</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Post 1 */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="/travel1.png" // Replace with your image path
            alt="Post 1"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">HOW TO VISIT THE PYRAMIDS IN EGYPT</h2>
            
          </div>
        </div>

        {/* Post 2 */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="/travel2.png" // Replace with your image path
            alt="Post 2"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">
            NUSA PENIDA ISLAND GUIDE FOR BALI</h2>
         
          </div>
        </div>

        {/* Post 3 */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="/travel3.png" // Replace with your image path
            alt="Post 3"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">22 BEST THINGS TO DO IN JAPAN</h2>
           
          </div>
        </div>

        {/* Post 4 */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="/travel4.png" // Replace with your image path
            alt="Post 4"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">10 BEST THINGS TO DO AT MACHU PICCHU</h2>
           
          </div>
        </div>

        {/* Post 5 */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="/travel5.png" // Replace with your image path
            alt="Post 5"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">PETRA JORDAN TRAVEL GUIDE</h2>
         
          </div>
        </div>

        {/* Post 6 */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="/travel6.png" // Replace with your image path
            alt="Post 6"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">18 BEST WATERFALLS IN INDONESIA</h2>
           
          </div>
        </div>
      </div>
    </div>
  );
}