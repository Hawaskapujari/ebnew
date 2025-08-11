import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Calendar, ArrowRight, Play, ExternalLink, Linkedin } from 'lucide-react';

interface MentorData {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  expertise: string[];
  bio: string;
  quote: string;
  achievements: string[];
  studentsGuided: number;
  projectsCompleted: number;
  yearsExperience: number;
  linkedin: string;
  videoMessage?: string;
  testimonials: {
    student: string;
    text: string;
    project: string;
  }[];
  currentProjects: string[];
}

const MentorSpotlight: React.FC = () => {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6 gap-2">
              <div className="h-8 w-8 bg-yellow-200 rounded-full" />
              <div className="h-4 w-40 bg-blue-200 rounded" />
            </div>
            <div className="h-8 w-3/4 bg-gray-300 rounded mx-auto mb-4" />
            <div className="h-5 w-1/2 bg-gray-300 rounded mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full max-w-md mx-auto h-96 bg-gray-200 rounded-2xl shadow-lg" />
            <div className="space-y-4">
              <div className="h-6 w-1/2 bg-gray-300 rounded" />
              <div className="h-4 w-1/3 bg-blue-200 rounded" />
              <div className="h-4 w-1/4 bg-gray-200 rounded mb-6" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-white rounded-lg shadow-sm" />
                <div className="h-20 bg-white rounded-lg shadow-sm" />
                <div className="h-20 bg-white rounded-lg shadow-sm" />
              </div>
              <div className="flex gap-2 flex-wrap mt-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-6 w-20 bg-blue-100 rounded-full" />
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <div className="h-10 w-40 bg-blue-300 rounded-lg" />
                <div className="h-10 w-40 bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section Skeleton */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6" />
            <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto mb-4" />
            <div className="h-4 w-1/3 bg-gray-300 rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* Bio & Achievements Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="h-6 w-1/3 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-6" />
            <div className="h-5 w-1/3 bg-gray-300 rounded mb-2" />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-3/4 bg-blue-100 rounded" />
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-6 w-1/2 bg-gray-300 rounded mb-4" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-5/6 bg-yellow-100 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Skeleton */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-8 w-1/2 mx-auto bg-gray-300 rounded mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg space-y-4">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
                <div className="h-4 w-1/3 bg-gray-200 rounded mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Teaser Section */}
<section className="py-16 bg-gradient-to-br from-purple-600 to-blue-700 text-white text-center">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-4">🚀 Something Incredible Is Coming</h2>
    <p className="text-lg text-blue-100 mb-6">
      We’re about to launch the Mentor Spotlight — featuring the minds shaping the future.
    </p>
    
  </div>
</section>


      {/* CTA Skeleton */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="h-8 w-3/4 mx-auto bg-white/30 rounded" />
          <div className="h-4 w-1/2 mx-auto bg-blue-100 rounded" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <div className="h-12 w-40 bg-white/40 rounded-lg" />
            <div className="h-12 w-40 bg-white/20 rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};


export default MentorSpotlight;