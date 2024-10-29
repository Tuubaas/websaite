import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import Header from '@/components/Header';

const Plans = () => {
  const emailSubject = encodeURIComponent("I want to discuss a new website");
  const emailBody = encodeURIComponent("Hi Julia,\n\nI am interested in discussing how you can help me improve my website. I am [Your Name] and I want [Desired Features].\n\nHave a nice day!\n\nBest regards,\n[Your Name]");
  const mailtoLink = `mailto:julia@websaite.tech?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="min-h-screen bg-[#0f1116] text-white relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      <Header />
      <div className="container mx-auto px-4 pt-48">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Plans & pricing</h1>
          <p className="text-gray-400 text-lg">
            Choose the perfect plan for your fast and flexible website. Our AI-powered platform delivers stunning results in minutes, with the flexibility to adapt as your needs evolve.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-[#1a1d24] rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-800 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Basic</h2>
            </div>
            <p className="text-gray-400 mb-8">
              Perfect for small companies that does not need to make changes to their website
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>One-time website creation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Basic design templates</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                <span>No automated DNS setup</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                <span>No website changes after creation</span>
              </li>
            </ul>
            <a href={mailtoLink}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Request pricing
              </Button>
            </a>
          </div>

          {/* Standard Plan */}
          <div className="bg-[#1a1d24] rounded-2xl p-8 border border-purple-500 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Standard</h2>
            </div>
            <p className="text-gray-400 mb-8">
              Advanced features for small or growing businesses.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Custom design and changes</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Automated DNS routing, we handle everything</span>
              </li>
            </ul>
            <a href={mailtoLink}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Request pricing
              </Button>
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#1a1d24] rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-800 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Premium</h2>
            </div>
            <p className="text-gray-400 mb-8">
              Enterprise-grade solutions for large organizations.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Everything in Standard</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Priority support</span>
              </li>
            </ul>
            <a href={mailtoLink}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Request pricing
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
