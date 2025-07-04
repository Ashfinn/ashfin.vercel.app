// src/app/about/page.js
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  AcademicCapIcon, 
  BeakerIcon, 
  ChartBarIcon,
  UsersIcon,
  CalculatorIcon,
  VideoCameraIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/solid';

// --- UNIFIED DATA FOR EXPERIENCE & LEADERSHIP ---
const allRoles = [
  // Existing experience roles with images
  {
    title: 'Founder & Community Lead',
    role: 'The Code Forum',
    description: 'Built a thriving tech community of 100+ members and established 5 comprehensive learning paths.',
    imageUrl: '/code-forum.png',
    icon: BeakerIcon,
    color: 'blue',
  },
  {
    title: 'Content Creator & Educator',
    role: 'Online Platforms',
    description: 'Created 10+ educational videos and 13 articles on ML & Python, gaining over 1000 reads.',
    imageUrl: '/logo.png',
    icon: AcademicCapIcon,
    color: 'green',
  },
  {
    title: 'R&D Secretary',
    role: 'Chittagong University Math Club',
    description: 'Led research initiatives and organized events bridging academic theory with practical application.',
    imageUrl: '/cumc.png',
    icon: ChartBarIcon,
    color: 'purple',
  }
];


const socialLinks = [
    { name: 'Email', description: 'The most reliable way to get in touch for formal inquiries.', handle: 'obidur.shawal@gmail.com', href: 'mailto:obidur.shawal@gmail.com' },
    { name: 'LinkedIn', description: 'Connect with me for professional networking and career updates.', handle: '@obidur-rahman-shawal', href: 'https://www.linkedin.com/in/obidur-rahman-shawal/' },
    { name: 'GitHub', description: 'Follow my coding projects, contributions, and technical work.', handle: '@Ashfinn', href: 'https://github.com/Ashfinn' },
    { name: 'Facebook', description: 'Personal updates and community engagement.', handle: '@obidur.shawal', href: 'https://www.facebook.com/obidur.shawal' },
];

const projectPhotos = [
  { caption: 'Presenting our tomato disease classification model at the research symposium', imageUrl: '/presentation-1.png' },
  { caption: 'Collaborating with team members on environmental health data analysis', imageUrl: '/collaboration-1.png' },
  { caption: 'Field work collecting data for our Bangladesh healthcare study', imageUrl: '/fieldwork-1.png' },
];

const coreValues = [
  { value: 'Always stay curious and keep learning', color: 'text-blue-600' },
  { value: 'Approach every problem with scientific rigor', color: 'text-green-600' },
  { value: 'Design solutions that make a real-world impact', color: 'text-purple-600' },
  { value: 'Collaborate with empathy and respect', color: 'text-orange-600' }
];

// --- Main About Page Component ---
export default function About() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        
        {/* --- INTRO SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 leading-tight sm:leading-snug">
              I'm a <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">researcher</span> and{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">problem solver</span> passionate about data-driven impact.
            </h1>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              <p>
                Growing up in Bangladesh, I was captivated by two powerful forces: the elegant logic of mathematics and the tangible impact of technology on my community. I witnessed firsthand how innovation could bridge gaps in healthcare access and environmental monitoring, and this experience ignited my passion.
              </p>
              <p>
                Today, as a Mathematics student at the University of Chittagong, my journey is dedicated to that intersection of theory and impact. My mission is to build data-driven solutions that address real-world challenges. I thrive on translating abstract statistical models and ML algorithms into functional code, with a special focus on developing lightweight Deep Learning models for healthcare and environmental science. My goal is to create AI that can run on edge devices, making advanced diagnostics and analysis accessible in even the most resource-constrained environments.
              </p>
              <p>
                This drive extends beyond my personal research. I founded The Code Forum to build a thriving tech community and serve as the Research and Development Secretary at the Chittagong University Math Club to inspire others. For me, mathematics and technology are not just academic pursuits; they are the tools we use to discover, to build, and to invent a more equitable and sustainable future.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]">
               <div className="aspect-[3/4] relative group">
                  <Image
                     src="/me.jpg"
                     alt="Profile photo"
                     fill
                     className="rounded-2xl object-cover z-10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute -inset-2 border-2 border-blue-200 rounded-2xl transform rotate-3 z-0"></div>
                  <div className="absolute -inset-2 border-2 border-green-200 rounded-2xl transform -rotate-3 z-0"></div>
               </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE & LEADERSHIP SECTION (MERGED) --- */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">
              EXPERIENCE & LEADERSHIP
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-center">
            Building expertise through research, community, and collaboration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {allRoles.map((role) => {
              const Icon = role.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-indigo-600',
                green: 'from-green-500 to-emerald-600',
                purple: 'from-purple-500 to-violet-600',
              };
              
              return (
                <div key={role.title} className="group cursor-pointer">
                  <div className="relative bg-white rounded-xl overflow-hidden mb-3 sm:mb-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="aspect-[4/3] relative">
                      {role.imageUrl ? (
                        <>
                          <Image src={role.imageUrl} alt={role.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </>
                      ) : (
                        <div className={`flex items-center justify-center bg-gradient-to-br ${colorClasses[role.color]}`}>
                          <Icon className="w-16 h-16 text-white/80" />
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base group-hover:text-gray-900 transition-colors">{role.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium mb-1.5">{role.role}</p>
                  {role.description && (
                     <p className="text-gray-500 text-xs sm:text-sm leading-snug">{role.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* --- CORE VALUES SECTION --- */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">
              MY CORE VALUES
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>
          <ul className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {coreValues.map((item, index) => (
              <li key={index} className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium flex items-start group">
                <ChevronRightIcon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${item.color} mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 transition-transform group-hover:translate-x-1`} />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.value}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* --- RESEARCH HIGHLIGHTS SECTION --- */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">
              RESEARCH HIGHLIGHTS
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 text-center">
            From agriculture to healthcare analytics
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto">
            My research journey spans multiple domains, from developing lightweight vision models 
            for crop disease detection to analyzing environmental determinants of public health. 
            Each project teaches me something new about the intersection of technology and social impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border border-blue-100 hover:border-blue-200 transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Current Focus</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                Developing efficient machine learning models for edge deployment in agricultural 
                and healthcare applications across Bangladesh and similar developing regions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 sm:p-8 border border-green-100 hover:border-green-200 transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Future Goals</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                Pursuing graduate studies in AI/ML with a focus on sustainable technology 
                solutions for global health challenges and environmental monitoring.
              </p>
            </div>
          </div>
        </section>
        
        {/* --- BEHIND THE SCENES SECTION --- */}
        <section>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 text-center">
            Behind the scenes
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto">
            Research is collaborative and often involves unexpected moments. Here are some snapshots 
            from my journey – from presenting findings to working with communities, every experience 
            shapes my approach to solving complex problems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectPhotos.map((photo, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden mb-3 sm:mb-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={photo.imageUrl}
                      alt={photo.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-1 group-hover:text-gray-800 transition-colors">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>
        
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">        
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-medium mb-3">Let's Build Something</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Have a project in mind or just want to connect? I'm always open to new ideas and collaborations. Reach out through one of my channels.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="flex justify-between items-center mb-1">
                       <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{link.name}</h4>
                       <ArrowUpRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                    <p className="text-sm text-blue-600/80 font-mono break-all">{link.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
