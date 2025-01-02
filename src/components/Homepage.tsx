import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        autoPlay
        loop
        muted
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Welcome to My Travel Blog
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl max-w-[80%] sm:max-w-[70%] md:max-w-[60%] text-white">
          Discover amazing destinations and travel stories.
        </p>
        <Link href="/PostList">
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium text-sm sm:text-base md:text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Explore Blog
          </button>
        </Link>
      </div>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
}