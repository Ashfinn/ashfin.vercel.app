'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Hero } from './components/Hero'; // Change to named import
import { FeaturedProjects } from './components/FeaturedProjects'; // Change to named import
import { MoreWork } from './components/MoreWork'; // Already correct, but removed SmallProjectCard since it's not used

// Main Home Page Component
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <MoreWork />
    </>
  );
}