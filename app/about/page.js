// src/app/about/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

// --- Data for the page ---
const leadershipRoles = [
  {
    title: 'Research Assistant',
    role: 'Machine Learning & Data Science',
    imageUrl: '/research-role.png',
  },
  {
    title: 'Teaching Assistant',
    role: 'Data Structures & Algorithms',
    imageUrl: '/teaching-role.png',
  },
  {
    title: 'Project Lead',
    role: 'Healthcare Analytics Initiative',
    imageUrl: '/leadership-role.png',
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
  'Always stay curious and keep learning',
  'Approach every problem with scientific rigor',
  'Design solutions that make a real-world impact',
  'Collaborate with empathy and respect'
];

// --- Main About Page Component ---
export default function About() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        
        {/* --- INTRO SECTION --- */}
        <section className="grid md:grid-cols-5 gap-12 items-center mb-24">
          <div className="md:col-span-3">
            <h1 className="text-3xl sm:text-4xl font-medium mb-6 leading-snug">
              I'm a <span className="italic">researcher</span> and{' '}
              <span className="italic">problem solver</span> passionate about data-driven impact.
            </h1>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a Computer Science student with a focus on machine learning and data science, 
                particularly in healthcare applications and environmental analysis.
              </p>
              <p>
                Growing up in Bangladesh, I witnessed firsthand how technology can bridge gaps in 
                healthcare access and environmental monitoring. This experience fueled my passion 
                for developing AI solutions that address real-world challenges in developing regions.
              </p>
              <p>
                My research focuses on lightweight machine learning models that can run on edge devices, 
                making advanced diagnostics accessible in resource-constrained environments. I believe 
                in the power of combining rigorous research with practical implementation to create 
                meaningful change.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 w-full flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[400px]">
               <Image
                  src="/me.jpg"
                  alt="Profile photo"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover z-10"
                />
               <div className="absolute -inset-2 border-2 border-blue-200 rounded-lg transform rotate-3 z-0"></div>
               <div className="absolute -inset-2 border-2 border-green-200 rounded-lg transform -rotate-3 z-0"></div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">
            EXPERIENCE & LEADERSHIP
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Building expertise through research and collaboration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {leadershipRoles.map((role) => (
              <div key={role.title} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={role.imageUrl}
                    alt={role.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CORE VALUES SECTION --- */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">
            MY CORE VALUES
          </h2>
          <ul className="space-y-4">
            {coreValues.map((value, index) => (
              <li key={index} className="text-xl md:text-2xl font-medium flex items-start">
                <ChevronRightIcon className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* --- RESEARCH HIGHLIGHTS SECTION --- */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">
            RESEARCH HIGHLIGHTS
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-2">
            From agriculture to healthcare analytics
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            My research journey spans multiple domains, from developing lightweight vision models 
            for crop disease detection to analyzing environmental determinants of public health. 
            Each project teaches me something new about the intersection of technology and social impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Current Focus</h3>
              <p className="text-gray-600 text-sm">
                Developing efficient machine learning models for edge deployment in agricultural 
                and healthcare applications across Bangladesh and similar developing regions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Future Goals</h3>
              <p className="text-gray-600 text-sm">
                Pursuing graduate studies in AI/ML with a focus on sustainable technology 
                solutions for global health challenges and environmental monitoring.
              </p>
            </div>
          </div>
        </section>
        
        {/* --- BEHIND THE SCENES SECTION --- */}
        <section>
          <p className="text-xl md:text-2xl font-medium mb-2">
            Behind the scenes
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Research is collaborative and often involves unexpected moments. Here are some snapshots 
            from my journey – from presenting findings to working with communities, every experience 
            shapes my approach to solving complex problems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectPhotos.map((photo, index) => (
              <div key={index} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.caption}
                    width={400}
                    height={400}
                    className="object-cover w-full h-64"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}