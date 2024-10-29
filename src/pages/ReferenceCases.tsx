import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Dna, Rocket } from 'lucide-react';

const ReferenceCases = () => {
  return (
    <div className="min-h-screen bg-[#0f1116]">
      <Header />
      
      {/* Envue Technologies Case */}
      <section className="h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
          alt="Molecular structure visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex flex-col items-center justify-center text-center text-white">
          <div className="flex items-center gap-4 mb-4">
            <Dna className="w-8 h-8" />
            <h1 className="text-5xl font-bold">Envue Technologies</h1>
            <Rocket className="w-8 h-8" />
          </div>
          <p className="text-2xl mb-2">Revolutionizing Molecular Analysis</p>
          <p className="text-lg mb-8 max-w-2xl">
            Groundbreaking patent-pending technology enabling unprecedented visualization of single nano-objects
          </p>
          <div className="flex gap-4">
            <a href="https://www.envue-technologies.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90">
                Visit Website
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferenceCases;