import { useEffect, useRef, useState } from "react";
import firstImage from "../../../../assets/card1.webp";
import secondImage from "../../../../assets/card2.webp";
import thirldImage from "../../../../assets/card3.webp";
import { FaWhatsapp, FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
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

const Category = () => {
  const [ref, isInView] = useInView();

  const cards = [
    {
      id: 1,
      image: firstImage,
      title: "Need a visa for your maid?",
      subtitle: "Apply now. Receive it in 7 days",
      primaryBtnText: "Hired a maid",
      slug: "maid-visa",
      badgeStyle: "primary",
    },
    {
      id: 2,
      image: secondImage,
      title: "Looking for a full-time maid?",
      subtitle: "Filipinas, Africans, & Ethiopians available. Live-in & live-out options.",
      primaryBtnText: "Hired a full time maid",
      slug: "full-time-maid",
      badgeStyle: "outline",
    },
    {
      id: 3,
      image: thirldImage,
      title: "Looking for a part-time maid?",
      subtitle: "Cleaners, nannies, & cooks. Find your match.",
      primaryBtnText: "Hired a part time maid",
      slug: "home-cleaning",
      badgeStyle: "outline",
    },
  ];

  return (
    <div className="" ref={ref}>
      <Container className="max-w-7xl bg-white rounded-2xl shadow-sm py-12 px-4 md:px-6">
        
        <div 
          className={`text-center max-w-6xl mx-auto mb-12 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 font-[Poppins]">
            Explore our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67E00] to-[#F59E0B]">Maid Services</span>
          </h2>
          <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            Hire trusted maids tailored to your needs. From flexible part-time
            cleaning services to dedicated full-time domestic helpers and
            complete maid visa assistance, we make the hiring process simple,
            secure, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`group bg-[#eeeae2] rounded-[24px] p-3 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative rounded-[18px] overflow-hidden h-64">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 mask-radial-at-top-right"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                {/* <div
                  className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                    card.badgeStyle === "primary"
                      ? "bg-[#E67E00] text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {card.badgeStyle === "primary" ? (
                    <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  ) : (
                    <FaArrowUpRightFromSquare className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </div> */}
              </div>

              <div className="px-3 pt-5 pb-3 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1.5 font-[Poppins] transition-colors duration-300 group-hover:text-[#E67E00]">
                  {card.title}
                </h3>
                <p className="text-base text-gray-500 mb-6 leading-relaxed flex-1">
                  {card.subtitle}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-auto">
                  <Link
                    to={`/services/${card.slug}`}
                    className="relative flex items-center gap-2 overflow-hidden bg-white text-gray-800 px-3 py-2 rounded-full text-base font-semibold border border-gray-200 group/btn transition-all duration-300 hover:border-[#E67E00] hover:shadow-md"
                  >
                    <span className="absolute -left-1 -bottom-5 w-8 h-8 bg-[#E67E00] rounded-full origin-center transition-transform duration-700 ease-out group-hover/btn:scale-[15] -z-0"></span>
                    <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-white flex items-center gap-2">
                      Learn More
                      {/* <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" /> */}
                    </span>
                  </Link>

                  <Link
                    to="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/wa flex items-center gap-2 bg-[#25479D] text-white px-3 py-2 rounded-full text-base font-medium transition-all duration-300 hover:bg-[#1a2f56] hover:scale-105 hover:shadow-[0_4px_20px_rgba(37,71,157,0.4)] active:scale-95"
                  >
                    <FaWhatsapp className="w-4 h-4 transition-transform duration-300 group-hover/wa:-rotate-12 group-hover/wa:scale-110" />
                    <span>{card.primaryBtnText}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Category;