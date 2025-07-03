'use client';

import Image from 'next/image';

export const Hero = () => (
  <main className="relative bg-white font-sans overflow-hidden">
    <div className="absolute top-6 left-0 -translate-x-1/4 -translate-y-1/4 opacity-80" aria-hidden="true">
      <Image src="/leaf-left.png" alt="" width={250} height={400} className="w-48 lg:w-64" />
    </div>
    <div className="absolute bottom-6 right-0 translate-x-1/4 -translate-y-1/4 opacity-80" aria-hidden="true">
      <Image src="/leaf-right.png" alt="" width={250} height={400} className="w-48 lg:w-64" />
    </div>
    <section className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
      <div className="flex flex-col items-center text-center">
        <div className="max-w-7xl">
          <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 leading-tight">
            Obidur Rahman is a <span className="font-bold italic">Mathematics Student</span> at University of 
            Chittagong. He has experience <span className="text-blue-500">*</span><span className="font-bold italic"> shaping emerging tech</span>,
            <span className="text-green-500"> ◊</span> creating mathematical systems, and <span className="text-red-500">⌘</span> cultivating design community.
          </h1>
        </div>
        <div className="mt-8 md:mt-10 text-gray-500 text-xs sm:text-sm md:text-base">
          <p>
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