import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from './Header';

const Hero = () => {
  const emailSubject = encodeURIComponent("I want to discuss a new website");
  const emailBody = encodeURIComponent("Hi Julia,\n\nI am interested in discussing how you can help me improve my website. I am [Your Name] and I want [Desired Features].\n\nHave a nice day!\n\nBest regards,\n[Your Name]");
  const mailtoLink = `mailto:julia@websaite.tech?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-8rem)] lg:min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#000624] via-[#1a0628] to-[#2563eb] animate-gradient-x">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      </div>

      <Header />

      <div className="container mx-auto px-4 pt-48 pb-32 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left space-y-6 max-w-2xl">
            <div className="text-blue-600 mb-4">
              Zero-Effort Website Creation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your perfect website, created by AI in minutes
            </h1>
            
            <p className="text-lg text-gray-200 max-w-xl">
              No coding, no design skills needed. Just tell us your vision, 
              and we'll create a fully customizable website that's ready to launch 
              in minutes, not months.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={mailtoLink}>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 hover:shadow-lg transform transition-all duration-200 ease-in-out"
                >
                  Get a new website
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:block flex-1 relative">
            <div className="relative w-[600px] h-[400px] mx-auto">
              {/* Browser Window V1 */}
              <div className="absolute left-0 bottom-0 w-64 opacity-0 animate-[fadeSlideIn_0.5s_ease-out_0.2s_forwards]">
                <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-500/50 flex items-center justify-center text-white text-sm animate-fade-in-1">1</div>
                      <div className="h-2 w-full bg-white/10 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-500/50 flex items-center justify-center text-white text-sm animate-fade-in-2">2</div>
                      <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-500/50 flex items-center justify-center text-white text-sm animate-fade-in-3">3</div>
                      <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-16 top-1/2 w-16 h-[2px] bg-purple-400/50 animate-[growRight_0.3s_ease-out_0.7s_forwards] origin-left opacity-0">
                  <ArrowRight className="absolute -right-3 -top-[7px] w-4 h-4 text-purple-400/50" />
                </div>
              </div>

              {/* Browser Window V2 */}
              <div className="absolute right-0 bottom-0 w-64 opacity-0 animate-[fadeSlideIn_0.5s_ease-out_0.7s_forwards]">
                <div className="bg-gradient-to-br from-teal-500/30 to-emerald-500/30 backdrop-blur-sm rounded-lg p-4 border border-teal-400/30">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-white/10 rounded"></div>
                    <div className="h-16 bg-white/10 rounded"></div>
                    <div className="h-16 bg-white/10 rounded"></div>
                    <div className="h-2 w-full bg-white/10 rounded col-span-3"></div>
                    <div className="h-2 w-2/3 bg-white/10 rounded col-span-2"></div>
                  </div>
                </div>
                <div className="absolute left-1/2 -top-16 w-[2px] h-16 bg-teal-400/50 animate-[growUp_0.3s_ease-out_1.2s_forwards] origin-bottom opacity-0">
                  <ArrowRight className="absolute -top-3 -right-[7px] w-4 h-4 text-teal-400/50 rotate-[-90deg]" />
                </div>
              </div>

              {/* Browser Window V3 - Design Tool */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 opacity-0 animate-[fadeSlideIn_0.5s_ease-out_1.2s_forwards]">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 shadow-xl">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <div className="relative">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-white/20 rounded"></div>
                        <div className="h-16 bg-white/20 rounded"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute inset-0 border-2 border-blue-400 rounded pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 200"
        className="w-full transform translate-y-1"
        preserveAspectRatio="none"
        fill="#0f1116"
      >
        <path
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
        />
      </svg>
    </div>
  );
};

export default Hero;
