import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../../layout/Container";

const CategoryHero = ({ heroData }) => {
  if (!heroData) return null;

  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-[#24488b]">
      {heroData.image && (
        <div className="absolute inset-0 z-0">
          <img
            src={heroData.image}
            alt={heroData.title}
            className="w-full h-full object-cover mix-blend-overlay opacity-90 grayscale-30"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-r from-[#203a70]/90 to-transparent z-0"></div>

      <Container className="relative z-10 max-w-7xl">
        <div className="max-w-[650px]">
          <h1 className="text-3xl sm:text-5xl md:text-[50px] font-bold text-white leading-[1.15] tracking-tight mb-5 font-[Poppins]">
            {heroData.title}
          </h1>
          <p className="section-desc text-white/90 mb-8 leading-relaxed font-medium max-w-[400px]">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primaryCta btn-ani hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium text-sm w-full sm:w-auto"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Talk On WhatsApp</span>
            </Link>
            <button 
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 bg-secondaryCta hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium btn-ani text-sm w-full sm:w-auto"
            >
              <span>View Pricing</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoryHero;
