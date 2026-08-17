import React from "react";
import { Link } from "react-router"; 
import { FaWhatsapp } from "react-icons/fa";
import Container from "./Container";

const NavbarLayout = () => {
  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-sm animate-[slideDown_0.6s_ease-out_forwards]">
        <Container className="max-w-7xl py-4 px-4 md:px-6">
          <div className="flex justify-between items-center h-16">
            
            <Link
              to="/"
              className="flex flex-col justify-center no-underline group"
            >
              <span 
                className="text-4xl font-black text-logo leading-none tracking-tight font-[Poppins] opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] transition-all duration-500 ease-in-out group-hover:tracking-wider group-hover:scale-105 group-hover:text-primaryCta"
              >
                maids.cc
              </span>
              <span 
                className="text-[13px] font-bold text-primaryCta tracking-wide opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] transition-all duration-500 ease-in-out group-hover:translate-x-1"
              >
                <span className="text-logo transition-colors duration-300 group-hover:text-whatsapp">+nannies</span> +visa services
              </span>
            </Link>

            <Link
            to="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp hover:opacity-90 text-white px-5 py-2 rounded-full font-medium btn-ani"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </Link>
            
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavbarLayout;