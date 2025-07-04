'use client';
import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Comparative Analysis of Lightweight Vision Models for Tomato Disease Classification',
    description:
      'This project provides a comprehensive comparative analysis of various lightweight vision models for the classification of tomato diseases. The primary goal of this research is to identify efficient and accurate models suitable for deployment on edge devices, enabling real-time, in-field disease diagnosis for farmers. ',
    imageUrl: '/tomato-leaf-project.png',
    link: 'https://github.com/Ashfinn/tomato-leaf',
  }
];

const uniJourneyProject = [
  {
    title: 'Environmental Determinants of Diarrheal Disease',
    description:
      'Analysis of the relationship between environmental factors and diarrheal disease incidence across four major divisions in Bangladesh using machine learning models and time series analysis.',
    imageUrl: '/diarrhea-prediction-project.png',
    link: 'https://github.com/Ashfinn/Diarrhea-Prediction-Model',
  },
  {
    title: 'Study of Features Affecting Undergraduate University Admission in Bangladesh',
    description:
      'A data-driven analysis machine learning, interpretability, fairness analysis and predictive modeling project exploring what drives students in Bangladesh to attend public vs. private universities. ',
    imageUrl: '/admission-analysis-project.png',
    link: 'https://github.com/Ashfinn/undergraduate-admission-analysis',
  }
];

export const FeaturedProjects = () => (
  <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
    <div className="space-y-20 sm:space-y-28">
      <div className="flex justify-center">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {uniJourneyProject.map((project) => (
        <UniJourneyCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export const ProjectCard = ({ title, description, imageUrl, logoUrl, link }) => (
  <Link href={link} className="block group max-w-6xl">
    <article className="mx-auto">
      <div className="rounded-lg overflow-hidden mb-8 shadow-sm group-hover:scale-[1.035] transition-transform duration-300 ease-in-out">
        <Image
          src={imageUrl}
          alt={`${title} project preview`}
          width={1200}
          height={750}
          className="object-cover max-w-7xl w-full h-auto"
        />
      </div>
      <div className="flex items-center gap-4 mb-3">
        {logoUrl && <Image src={logoUrl} alt={`${title} logo`} width={28} height={28} />}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </article>
  </Link>
);

export const UniJourneyCard = ({ title, description, imageUrl, link }) => (
  <Link href={link} className="block group">
    <article>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm group-hover:scale-[1.035] transition-transform duration-300 ease-in-out">
          <div className="transition-transform">
            <Image
              src={imageUrl}
              alt={`${title} project preview`}
              width={600}
              height={750}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className="md:pr-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600">{description}</p>
        </div>
      </div>
    </article>
  </Link>
);