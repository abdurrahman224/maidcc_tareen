import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../../../../layout/Container";

// Replace these with your actual asset imports
import maidMopImg from "../../../../assets/Home_img_1.png";
import maidTowelsImg from "../../../../assets/Home_img_2.png";
import girlBeachImg from "../../../../assets/Home_img_3.png";
import avatar1 from "../../../../img//avatar-1.webp";
import avatar2 from "../../../../img/avatar-2.webp";
import avatar3 from "../../../../img/avatar-3.webp";
import avatar4 from "../../../../img/avatar-4.webp";
import CtaButton from "../../../../Components/common/CtaButton";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

const Hero = () => {
  const [reviewCount, reviewRef] = useCountUp(2000, 1600);

  const formatCount = (num) => {
    if (num >= 1000) {
      const val = num / 1000;
      return `${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)}k+`;
    }
    return `${num}+`;
  };

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
          50% { transform: translateY(-8px); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 42, 99, 0.1); }
          50% { box-shadow: 0 0 0 8px rgba(16, 42, 99, 0); }
        }
      `}</style>

      <div className="overflow-hidden">
        <Container className="max-w-7xl my-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            <div className="border bg-white border-[#EDE8DE] rounded-2xl px-6 py-12 flex flex-col justify-start items-start">
              
              {/* Badge */}
              <div className="inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full bg-[#102A63] text-white text-sm font-semibold mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards] hover:scale-105 transition-transform duration-300 cursor-default">
                Trusted By 10,000+ Families
              </div>

                <h1 className="text-4xl md:text-5xl  lg:text-[56px] font-semibld text-gray-900 leading-[1.1] mb-6 font-[Poppins]">
              Hire a Maid or Apply for A Maid Visa in Minutes
            </h1>

              {/* Paragraph */}
              <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg leading-relaxed opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                Fast processing, trusted service, and 100% legal <br />
                compliance. We handle the paperwork so you can focus
                <br /> on your family.
              </p>

            
              <div className="flex items-center gap-3 mb-10">
                <CtaButton to="https://wa.me/" float>
                  Get a maid visa
                </CtaButton>
                <CtaButton to="https://wa.me/" variant="circle" float />
              </div>

              {/* Trust Indicators (Avatars + Reviews) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
                
                {/* Avatars with Float Animation */}
                <div className="flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                  <div className="flex -space-x-4">
                    {avatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Expert"
                        className="w-12 h-12 md:w-15 md:h-15 rounded-full border-2 border-white object-cover shadow-md transition-transform duration-300 hover:scale-110 hover:z-10"
                      />
                    ))}
                  </div>
                  <p className="text-base leading-tight font-bold text-gray-700">
                    More than
                    <br />
                    <span className="font-bold text-gray-900">200 Experts</span>
                  </p>
                </div>

                {/* Reviews with Pop-in Stars */}
                <div
                  className="text-base leading-tight text-gray-700 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  ref={reviewRef}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-lg font-bold text-gray-900">4.8</span>
                    <div className="flex text-[#FE4D00]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar 
                          key={i} 
                          className="w-4 h-4 opacity-0 animate-[popIn_0.4s_ease-out_forwards]"
                          style={{ animationDelay: `${0.6 + (i * 0.1)}s` }}
                        />
                      ))}
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold text-gray-900">
                      {formatCount(reviewCount)}
                    </span>{" "}
                    Reviews on Google
                  </p>
                </div>
              </div>
            </div>

            {/* Right card — image grid */}
            <div className="bg-white border border-[#EDE8DE] rounded-2xl p-4 grid grid-cols-2 gap-4 opacity-0 animate-[fadeInRight_0.8s_ease-out_0.3s_forwards]">
              
              {/* Left Column of Grid */}
              <div className="flex flex-col gap-4">
                <div className="group flex-[2.2] w-full overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={maidMopImg}
                    alt="Maid cleaning a kitchen"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                <div className="flex-1 bg-[#F8F9FA] border border-[#EDE8DE] rounded-2xl flex flex-col items-center justify-center text-center px-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-[softPulse_3s_ease-in-out_infinite]">
                  <p className="text-3xl md:text-4xl font-bold text-[#102A63]">
                    100%
                  </p>
                  <p className="text-sm md:text-base text-gray-600 mt-1 font-medium">
                    Satisfaction Guarantee
                  </p>
                </div>
              </div>

              {/* Right Column of Grid */}
              <div className="flex flex-col gap-4">
                <div className="group flex-1 w-full overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={maidTowelsImg}
                    alt="Maid holding folded towels"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="group flex-1 w-full overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={girlBeachImg}
                    alt="Child relaxing at the beach"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;