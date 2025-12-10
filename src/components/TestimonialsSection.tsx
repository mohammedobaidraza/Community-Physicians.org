import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "It meant everything to me that your team was able to address my medical issues effectively and efficiently.",
    author: "Frank",
    role: "CarePods Client",
    image: "/hero-elderly.jpg",
  },
  {
    quote:
      "CP transformed our post-acute program. Their clinical insight and professionalism are unmatched.",
    author: "Dr. Sarah Martinez",
    role: "Medical Director, Sunrise Healthcare",
    image: "/hero-2.jpg",
  },
  {
    quote:
      "Their physician-led model brings a level of expertise that's transformed how we deliver post-acute care.",
    author: "Lisa Thompson",
    role: "Director of Nursing, Heritage Health Systems",
    image: "/hero-3.jpg",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        next();
      }, 5000); // Changes every 5 seconds
    }
    return () => clearInterval(interval);
  }, [index, isAutoPlaying]);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
                Voices of Trust
            </h2>
            <div className="h-1 w-20 bg-[#EF7625] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Previous Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full bg-white shadow-md text-primary hover:text-[#EF7625] transition-colors border border-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full bg-white shadow-md text-primary hover:text-[#EF7625] transition-colors border border-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 min-h-[300px] flex flex-col justify-center items-center text-center relative transition-all duration-500">
            
            {/* Large Quote Icon Background */}
            <Quote 
                size={120} 
                className="absolute top-4 left-8 text-primary/5 pointer-events-none" 
            />

            {/* Content - Key ensures animation triggers on change */}
            <div key={index} className="relative z-10 animate-fade-in-up">
              <p
                className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8 italic"
                style={{ fontFamily: "Mate, serif" }}
              >
                “{t.quote}”
              </p>

              <div className="flex flex-col items-center justify-center gap-4">
                {/* Avatar Image */}
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#EF7625] shadow-sm">
                    <img 
                        src={t.image} 
                        alt={t.author} 
                        className="h-full w-full object-cover" 
                    />
                </div>
                
                {/* Author Details */}
                <div>
                    <h4 className="font-semibold text-lg text-primary">
                    {t.author}
                    </h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    {t.role}
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-[#EF7625] w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;