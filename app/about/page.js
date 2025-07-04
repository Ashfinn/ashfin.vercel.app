// src/app/about/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon, AcademicCapIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/solid';

// --- Data for the page ---
const leadershipRoles = [
  {
    title: 'Research Assistant',
    role: 'Machine Learning & Data Science',
    imageUrl: '/research-role.png',
    icon: BeakerIcon,
    color: 'blue',
  },
  {
    title: 'Teaching Assistant',
    role: 'Data Structures & Algorithms',
    imageUrl: '/teaching-role.png',
    icon: AcademicCapIcon,
    color: 'green',
  },
  {
    title: 'Project Lead',
    role: 'Healthcare Analytics Initiative',
    imageUrl: '/leadership-role.png',
    icon: ChartBarIcon,
    color: 'purple',
  },
];

const projectPhotos = [
  {
    caption: 'Presenting our tomato disease classification model at the research symposium',
    imageUrl: '/presentation-1.png',
  },
  {
    caption: 'Collaborating with team members on environmental health data analysis',
    imageUrl: '/collaboration-1.png',
  },
  {
    caption: 'Field work collecting data for our Bangladesh healthcare study',
    imageUrl: '/fieldwork-1.png',
  },
];

const coreValues = [
  {
    value: 'Always stay curious and keep learning',
    color: 'text-blue-600',
  },
  {
    value: 'Approach every problem with scientific rigor',
    color: 'text-green-600',
  },
  {
    value: 'Design solutions that make a real-world impact',
    color: 'text-purple-600',
  },
  {
    value: 'Collaborate with empathy and respect',
    color: 'text-orange-600',
  }
];

// --- Main About Page Component ---
export default function About() {
  return (
    <div className="font-sans text-gray-800">
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
                I'm a Mathematics student with a focus on ML, DL and Data Science, 
                particularly in healthcare applications and environmental analysis.
              </p>
              <p>
                Growing up in Bangladesh, I witnessed firsthand how technology can bridge gaps in 
                healthcare access and environmental monitoring. This experience fueled my passion 
                for developing AI solutions that address real-world challenges in developing regions.
              </p>
              <p>
                My research focuses on lightweight Deep Learning models that can run on edge devices, 
                making advanced diagnostics accessible in resource-constrained environments. I believe 
                in the power of combining rigorous research with practical implementation to create 
                meaningful change.
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

        {/* --- EXPERIENCE SECTION --- */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">
              EXPERIENCE & LEADERSHIP
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-center">
            Building expertise through research and collaboration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {leadershipRoles.map((role) => {
              const Icon = role.icon;
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
                green: 'bg-green-50 text-green-600 group-hover:bg-green-100',
                purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
              };
              
              return (
                <div key={role.title} className="group cursor-pointer">
                  <div className="relative bg-white rounded-xl overflow-hidden mb-3 sm:mb-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={role.imageUrl}
                        alt={role.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute top-4 right-4 p-2 rounded-lg ${colorClasses[role.color]} transition-colors`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base group-hover:text-gray-900 transition-colors">{role.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{role.role}</p>
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
    </div>
  );
}
