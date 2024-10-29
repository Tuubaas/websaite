import React from 'react';
import { Brain, Palette, LayoutGrid, Globe } from 'lucide-react';

const steps = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Analysis",
    description: "Share your vision with our LLM that understands and processes your needs"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Generation",
    description: "AI creates a custom design matching your brand"
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: "Layout Refinement",
    description: "Adjust layouts inspired by your favorite websites"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Automated DNS Setup",
    description: "We handle domain configuration and DNS routing automatically"
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-[#151820]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 bg-[#1a1d24] rounded-xl transition-transform hover:scale-105"
            >
              <div className="p-4 bg-blue-500/10 rounded-full text-blue-400">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;