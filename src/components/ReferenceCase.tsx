import React from 'react';
import { Button } from '@/components/ui/button';

interface ReferenceCaseProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ReferenceCase: React.FC<ReferenceCaseProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative h-screen">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl text-center">{description}</p>
        <div className="space-x-4">
          <Button size="lg" variant="default">Learn More</Button>
          <Button size="lg" variant="outline">Case Study</Button>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCase;