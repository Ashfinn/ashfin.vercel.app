'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate leaves with staggered starting positions
    const generatedLeaves = [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      startY: -100 - (Math.random() * 300), // Start at different heights above viewport
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 30 + Math.random() * 20,
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <main className="relative font-sans overflow-hidden">
      {/* Static decorative leaves with increased opacity */}
      <div className="absolute top-4 sm:top-12 left-0 -translate-x-1/3 sm:-translate-x-1/4 opacity-60" aria-hidden="true">
        <Image
          src="/leaf-left.png"
          alt=""
          width={250}
          height={400}
          className="w-32 sm:w-48 lg:w-64"
        />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 sm:translate-x-1/6 translate-y-1/4 opacity-60" aria-hidden="true">
        <Image
          src="/leaf-right.png"
          alt=""
          width={250}
          height={400}
          className="w-32 sm:w-48 lg:w-64"
        />
      </div>

      {/* Falling leaves container */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute animate-fall"
            style={{
              left: `${leaf.left}%`,
              top: `${leaf.startY}px`,
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
            }}
          >
            <div className="animate-sway">
              <Image
                src="/leaf-left.png"
                alt=""
                width={50}
                height={50}
                className="opacity-60"
                style={{
                  width: `${leaf.size}px`,
                  height: 'auto',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-7xl">
            <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 leading-tight">
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

      <style jsx>{`
        @keyframes fall {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(calc(100vh + 400px)) rotate(360deg);
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0) rotate(-5deg);
          }
          25% {
            transform: translateX(-20px) rotate(5deg);
          }
          75% {
            transform: translateX(20px) rotate(-5deg);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-sway {
          animation: sway 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};
