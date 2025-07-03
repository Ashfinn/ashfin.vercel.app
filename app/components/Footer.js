'use client'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-24 sm:mt-32 border-t border-gray-200">
      {/* Scrolling marquee banner */}
      <div className="relative overflow-hidden border-b border-gray-200">
        <div className="py-4">
          <div className="animate-marquee whitespace-nowrap text-sm sm:text-base font-semibold tracking-wider text-gray-500 uppercase">
            <span className="mx-4">✺ curiosity ✺ learning ✺ creativity ✺ growth</span>
            <span className="mx-4">✺ curiosity ✺ learning ✺ creativity ✺ growth</span>
            <span className="mx-4">✺ curiosity ✺ learning ✺ creativity ✺ growth</span>
            <span className="mx-4">✺ curiosity ✺ learning ✺ creativity ✺ growth</span>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left: Brand */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              thank you for visiting! ✿
            </h2>
            <p className="text-gray-600 mb-4">
              made with care, caffeine, and a good playlist.
            </p>
            <p className="text-sm text-gray-400">
              obidur rahman © 2025
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Middle: Contact */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-sm mb-4">
              get in touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:obidur@example.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
                  <span className="relative">
                    email
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              {/* Add more social links here */}
            </ul>
          </div>

          {/* Right: Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-sm mb-4">
              explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
                  <span className="relative">
                    projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
                  <span className="relative">
                    about me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
                  <span className="relative">
                    resume
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
