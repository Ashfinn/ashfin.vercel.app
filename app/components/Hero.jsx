'use client';

import Image from 'next/image';

export const Hero = () => (
  <main className="relative bg-white font-sans overflow-hidden">
    {/* Left leaf - improved positioning for mobile */}
    <div className="absolute top-0 left-0 -translate-x-1/3 sm:-translate-x-1/4 -translate-y-1/4 opacity-60 sm:opacity-80" aria-hidden="true">
      <Image 
        src="/leaf-left.png" 
        alt="" 
        width={250} 
        height={400} 
        className="w-32 sm:w-48 lg:w-64" 
      />
    </div>
    
    {/* Right leaf - improved positioning for mobile */}
    <div className="absolute bottom-0 right-0 translate-x-1/3 sm:translate-x-1/4 translate-y-1/4 opacity-60 sm:opacity-80" aria-hidden="true">
      <Image 
        src="/leaf-right.png" 
        alt="" 
        width={250} 
        height={400} 
        className="w-32 sm:w-48 lg:w-64" 
      />
    </div>
    
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="flex flex-col items-center text-center">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-600 leading-tight">
            Obidur Rahman is a <span className="font-bold italic">Mathematics Student</span> at University of 
            Chittagong. He has experience <span className="text-blue-500">*</span><span className="font-bold italic"> shaping emerging tech</span>,
            <span className="text-green-500"> ◊</span> creating mathematical systems, and <span className="text-red-500">⌘</span> cultivating design community.
          </h1>
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-gray-500 text-sm sm:text-base md:text-lg">
          <p className="px-4 sm:px-0">
            Currently working with{' '}
            <span className="font-semibold text-gray-700">Artificial Intelligence</span>,{' '}
            <span className="font-semibold text-gray-700">Machine Learning</span>, and{' '}
            <span className="font-semibold text-gray-700">Deep Learning</span>
          </p>
        </div>
      </div>
    </section>
  </main>
);
