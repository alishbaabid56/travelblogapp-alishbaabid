import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-12 mt-20">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/about.png" // Replace with your image path
            alt="David Leiter"
            className="rounded-lg shadow-lg mx-auto"
            width={500} // Image width
            height={500} // Image height
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-gray-800">About David Leiter</h1>
          <p className="text-gray-600">
            Thanks for looking! I'm David Leiter, the guy behind this website. I'm an American who's been traveling the world full-time for 9 years now.
          </p>
          <p className="text-gray-600">
            I started this travel blog in 2019 to document my international trips, share my photos, and help others learn how to travel the world and find some really good spots off the beaten path.
          </p>
          <p className="text-gray-600">
            All of the writing and pictures on this site come from my personal experience.
          </p>
          <p className="text-gray-600">
            I'm currently based in Bali, Indonesia, where I met my wife Intan, who’s a Bali local. Together, we've done some bucket list hikes, climbed active volcanoes, seen exotic wildlife, and visited spectacular castles, temples, and monuments around the world.
          </p>
          <p className="text-gray-600">
            I've worked with and been featured by BBC Travel, NBC News, Time, and other companies. I haven’t been everywhere, but it’s on my list. I hope this world travel blog can help and inspire you in your own journeys as well!
          </p>
        </div>
      </div>
    </div>
  );
}