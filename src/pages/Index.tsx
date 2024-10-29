import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Results from '@/components/Results';
import RoleCategories from '@/components/RoleCategories';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Results />
      <RoleCategories />
    </div>
  );
};

export default Index;