import { useEffect, useRef, useState } from "react";
import { MessageCircle, FileText, ShieldCheck, Star, Heart } from "lucide-react";
import Container from "../../layout/Container";

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

const HowItWorks = () => {
  const [ref, isInView] = useInView();

  const steps = [
    {
      icon: MessageCircle,
      title: "Apply on WhatsApp",
      description: "Send us a message and our team will guide you through the initial requirements.",
    },
    {
      icon: FileText,
      title: "We process documents",
      description: "Our experts handle all legal paperwork and government approvals for you.",
    },
    {
      icon: ShieldCheck,
      title: "Maid arrives at home",
      description: "Once approved, your maid is ready to start. We ensure a smooth transition.",
    },
    {
      icon: Heart, 
      title: "Enjoy peace of mind",
      description: "Get ongoing support and a hassle-free experience with our dedicated team.",
    },
  ];

  return (
    <section className="my-5" ref={ref}>
      <Container className="max-w-7xl bg-white rounded-2xl shadow-sm">
        <div className="rounded-[24px] p-6 md:p-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Left — heading & content */}
            <div className="flex flex-col justify-center h-full">
              <h2 
                className={`text-4xl md:text-5xl font-medium text-gray-900 mb-5 font-[Poppins] leading-[1.1] transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67E00] to-[#F59E0B]">Works</span>
              </h2>
              
              <p 
                className={`text-gray-500 text-base md:text-xl leading-relaxed mb-8 max-w-md transition-all duration-700 delay-100 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Getting started is simple. Browse available services, choose the
                option that fits your needs, and hire a trusted maid in just a
                few steps. From booking to visa assistance, we make the entire
                process smooth, secure, and hassle-free.
              </p>

              <div 
                className={`inline-flex w-fit items-center gap-2 bg-[#F3EFE8] px-4 py-2 rounded-md border border-[#EDE8DE] text-gray-900 text-sm font-semibold transition-all duration-700 delay-200 ease-out hover:scale-105 hover:shadow-md hover:border-[#FE4D00]/30 cursor-default ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Star className="w-4 h-4 text-[#FE4D00] fill-[#FE4D00] animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="text-sm font-medium text-gray-800">
                  2k+ Reviews on Google
                </span>
              </div>
            </div>

            {/* Right — 2x2 grid of steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-[#F6F4F0] border border-[#EDE8DE] rounded-2xl p-5 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#FE4D00]/40 hover:bg-white ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#FBE3D0] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#FE4D00] group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-5 h-5 text-[#FE4D00] stroke-2 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                      </div>

                      <h3 className="text-[16px] font-semibold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-[#FE4D00]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;