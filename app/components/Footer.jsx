'use client'
import Link from "next/link";
import { Mail, Linkedin, Github } from 'lucide-react'; // Example icons

const Footer = () => {
  // We define the marquee content once and duplicate it in the JSX.
  const marqueeContent = "✺ curiosity ✺ learning ✺ creativity ✺ growth";

  return (
    <footer className="bg-white mt-24 sm:mt-32">
      {/* Scrolling marquee banner */}
      <div className="relative overflow-hidden border-y border-slate-200">
        <div className="py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Render the content multiple times for a seamless loop */}
            <span className="mx-4 text-sm sm:text-base font-semibold text-slate-500">{marqueeContent}</span>
            <span className="mx-4 text-sm sm:text-base font-semibold text-slate-500">{marqueeContent}</span>
            <span className="mx-4 text-sm sm:text-base font-semibold text-slate-500">{marqueeContent}</span>
            <span className="mx-4 text-sm sm:text-base font-semibold text-slate-500">{marqueeContent}</span>
          </div>
        </div>
      </div>

      {/* Unified Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Brand, Tagline, and Copyright */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-800">
              Obidur Rahman
            </h2>
            <p className="text-slate-600 max-w-md mx-auto md:mx-0">
              Made with care, caffeine, and a good playlist.
            </p>
            <p className="text-sm text-slate-400 pt-4">
              © {new Date().getFullYear()} Obidur Rahman. All Rights Reserved.
            </p>
          </div>

          {/* Right Column: Navigation and Social Links */}
          <div className="flex justify-center md:justify-end gap-12 sm:gap-16">
            {/* Explore Links */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-slate-500 uppercase tracking-wider text-sm mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                <li><FooterLink href="/projects">Projects</FooterLink></li>
                <li><FooterLink href="/about">About Me</FooterLink></li>
                <li><FooterLink href="/resume">Resume</FooterLink></li>
              </ul>
            </div>
            
            {/* Connect Links */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-slate-500 uppercase tracking-wider text-sm mb-4">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <SocialLink href="mailto:obidur@example.com" Icon={Mail}>
                    Email
                  </SocialLink>
                </li>
                <li>
                  <SocialLink href="https://linkedin.com/in/your-profile" Icon={Linkedin}>
                    LinkedIn
                  </SocialLink>
                </li>
                <li>
                  <SocialLink href="https://github.com/your-username" Icon={Github}>
                    GitHub
                  </SocialLink>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

// Helper component for consistent link styling
const FooterLink = ({ href, children }) => (
  <Link href={href} className="text-slate-600 hover:text-slate-900 transition-colors duration-200 group relative">
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

// Helper component for social links with icons
const SocialLink = ({ href, Icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
  >
    <Icon className="w-4 h-4" />
    <span className="relative">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
    </span>
  </a>
);

export default Footer;
