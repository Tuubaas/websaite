import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const logos = [
  { src: "/hall-haven-logo.svg", alt: "Hall Haven" },
  { src: "/moco-logo.svg", alt: "Moco Food Services" },
  { src: "/alaska-airlines-logo.svg", alt: "Alaska Airlines" },
  { src: "/ebay-logo.svg", alt: "eBay" },
  { src: "/dolby-logo.svg", alt: "Dolby" },
  { src: "/sme-logo.svg", alt: "SME" },
  { src: "/americ-expr-logo.svg", alt: "American Express" },
];

const LogoCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="bg-[#0f1116] py-24">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="p-6">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default LogoCarousel;