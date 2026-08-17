import { useEffect, useRef, useState } from "react";
import aboutImg from "../../../../assets/Frame.png";
import { Award, Star, Heart } from "lucide-react";
import Container from "../../../../layout/Container";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); 
      }
    }, { threshold: 0.15, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const About = () => {
  const [ref, isInView] = useInView();

  const stats = [
    {
      icon: Award,
      value: "10,000+",
      label: "Successful Placements",
    },
    {
      icon: Heart,
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <section className=" " ref={ref}>
        <Container className="max-w-7xl bg-white rounded-2xl shadow-sm py-12 px-4 md:px-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            <div className="bg-[#E67E00] rounded-[24px] px-8 py-12 md:px-14 md:py-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
              
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />

              <h2 
                className={`text-3xl md:text-4xl font-semibold text-white mb-5 relative z-10 transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                About Us
              </h2>
              
              <p 
                className={`text-white/90 text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed relative z-10 transition-all duration-700 delay-100 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                We are dedicated to connecting families with trusted domestic
                helpers while providing comprehensive support throughout the
                entire hiring process.
              </p>

              <div className="grid grid-cols-3 gap-6 md:gap-10 w-full max-w-lg relative z-10">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className={`group flex flex-col items-center transition-all duration-500 ease-out hover:-translate-y-2 ${
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${300 + index * 150}ms` }}
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3 shadow-md transition-all duration-300 group-hover:bg-[#2664eb] group-hover:shadow-lg group-hover:shadow-blue-500/30 animate-[float_3s_ease-in-out_infinite] group-hover:animate-none">
                        <Icon className="w-6 h-6 text-[#2664eb] stroke-2 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:rotate-6" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-semibold text-white font-[Poppins] mb-1 transition-transform duration-300 group-hover:scale-105">
                        {stat.value}
                      </h3>
                      
                      <p className="text-[11px] md:text-[13px] text-white/90 font-medium leading-tight transition-colors duration-300 group-hover:text-white">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div 
              className={`rounded-[24px] overflow-hidden h-[320px] lg:h-auto group transition-all duration-700 delay-300 ease-out ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src={aboutImg}
                alt="Maid providing home cleaning service"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none rounded-[24px]" />
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default About;