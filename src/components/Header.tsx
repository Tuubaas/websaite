import React from 'react';
import { Button } from '@/components/ui/button';
import MainNav from './MainNav';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const emailSubject = encodeURIComponent("I want to discuss a new website");
  const emailBody = encodeURIComponent("Hi Julia,\n\nI am interested in discussing how you can help me improve my website. I am [Your Name] and I want [Desired Features].\n\nHave a nice day!\n\nBest regards,\n[Your Name]");
  const mailtoLink = `mailto:julia@websaite.tech?subject=${emailSubject}&body=${emailBody}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-6">
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">webs<span className="text-blue-400">ai</span>te</h1>
          </Link>
          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href={mailtoLink} className="text-white hover:text-white/80 bg-transparent hover:bg-white/10 flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground border border-white">
            Get in touch
          </a>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0f1116] border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/reference-cases" className="text-white hover:text-white/80 px-3 py-2 rounded-md hover:bg-white/10">
                    Reference cases
                  </Link>
                  <Link to="/our-story" className="text-white hover:text-white/80 px-3 py-2 rounded-md hover:bg-white/10">
                    About us
                  </Link>
                  <Link to="/plans" className="text-white hover:text-white/80 px-3 py-2 rounded-md hover:bg-white/10">
                    Plans
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;