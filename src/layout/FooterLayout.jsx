import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";
import CtaButton from "../Components/common/CtaButton";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const FooterLayout = () => {
  const [ref, isInView] = useInView();
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Need a visa for your maid", slug: "maid-visa" },
    { label: "Looking for full time maid", slug: "full-time-maid" },
    { label: "Looking for part time maid", slug: "home-cleaning" },
  ];

  const socials = ["Facebook", "Instagram", "YouTube", "TikTok"];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <footer className="my-5 overflow-hidden" ref={ref}>
        <div className="mx-auto max-w-7xl bg-white rounded-2xl shadow-sm py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div
                className={`bg-[#F3EFE8] rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                <Link
                  to="/"
                  className="flex flex-col justify-center no-underline group w-fit"
                >
                  <span className="text-4xl font-black text-logo leading-none tracking-tight font-[Poppins] transition-all duration-500 group-hover:tracking-wider group-hover:scale-105 group-hover:text-[#E67E00]">
                    maids.cc
                  </span>
                  <span className="text-[13px] font-bold text-primaryCta tracking-wide transition-all duration-500 group-hover:translate-x-1">
                    <span className="text-logo transition-colors duration-300 group-hover:text-[#E67E00]">
                      +nannies
                    </span>{" "}
                    +visa services
                  </span>
                </Link>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[390px] mb-8 mt-6">
                  The UAE's most trusted digital platform for domestic help and
                  visa processing. Licensed, reliable, and fast.
                </p>
                <div className="flex items-center gap-3 mb-">
                  <CtaButton to="https://wa.me/" float>
                    Hire A Maid Today!{" "}
                  </CtaButton>
                  <CtaButton to="https://wa.me/" variant="circle" float />
                </div>
              </div>

              <div
                className={`bg-[#F3EFE8] rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <h3 className="text-2xl font-medium text-gray-900 mb-3 font-[Poppins]">
                  Let's Stay in Touch
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[330px] mb-8">
                  Follow us on social media to stay updated on our latest news.
                </p>

                <div className="flex flex-wrap gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-white border border-gray-200 text-gray-800 text-[14px] font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-105 hover:shadow-md active:scale-95"
                      style={{ transitionDelay: `${200 + index * 50}ms` }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                className={`bg-[#F3EFE8] rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 font-[Poppins]">
                  Get the Latest Updates from maids.cc
                </h3>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-wrap items-center gap-3"
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 min-w-[180px] bg-white border border-gray-200 rounded-full px-5 py-3.5 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#E67E00] focus:ring-2 focus:ring-[#E67E00]/20 transition-all duration-300"
                  />

                  <div className="flex items-center gap-3 mb-">
                    <CtaButton to="https://wa.me/" float>
                      Join Our Newsletter!
                    </CtaButton>
                    <CtaButton to="https://wa.me/" variant="circle" float />
                  </div>
                </form>
              </div>

              <div
                className={`bg-[#F3EFE8] rounded-2xl p-8 flex flex-col grow transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-5 font-[Poppins]">
                      Our Services
                    </h4>
                    <ul className="space-y-4">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="group flex items-center gap-2 text-gray-600 text-sm md:text-base transition-all duration-300 hover:text-[#E67E00]"
                          >
                            {service.label}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-5 font-[Poppins]">
                      Contact Details
                    </h4>
                    <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                      <p className="transition-colors duration-300 hover:text-[#E67E00] cursor-pointer">
                        maids.cc@gmail.com
                      </p>
                      <p className="transition-colors duration-300 hover:text-[#E67E00] cursor-pointer">
                        +88 012345677685
                      </p>
                      <p className="transition-colors duration-300 hover:text-gray-900">
                        ul. Generała Ziętka Jerzego 54, Mysłowice 41-412
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-10 border-t border-gray-200/50">
                  <div className="flex items-center gap-6">
                    <Link
                      to="/privacy-policy"
                      className="relative text-sm text-gray-500 transition-colors duration-300 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms-conditions"
                      className="relative text-sm text-gray-500 transition-colors duration-300 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500">
                    © {currentYear} maids.cc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterLayout;
