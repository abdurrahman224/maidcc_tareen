import React from "react";
import { Users, Award, ShieldCheck } from "lucide-react";
import Container from "../../layout/Container";

const StatsSection = () => {
  return (
    <div className="w-full bg-white relative z-20 section-padding">
      <Container className="max-w-6xl grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-y-10 gap-x-2 md:gap-4">
        {/* Stat 1: Google Ratings */}
        <div className="flex flex-col items-center md:items-start justify-center gap-2 col-span-2 md:col-span-1 md:mt-6 mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <span className="text-[40px] md:text-[42px] font-bold text-primaryCta leading-none font-[Poppins]">
              4.8
            </span>
            <span className="text-primaryCta text-3xl tracking-tighter mt-1">
              ★★★★★
            </span>
          </div>
          <div className="text-[18px] md:text-[20px] font-bold text-gray-900 font-[Poppins]">
            Google Ratings
          </div>
        </div>

        {/* Stat 2: Verified Reviews */}
        <div className="flex flex-col items-center justify-center gap-1">
          <Users
            className="w-6 h-6 md:w-7 md:h-7 text-gray-600 mb-1 md:mb-2"
            strokeWidth={1.5}
          />
          <div className="text-[28px] md:text-[42px] font-medium text-gray-900 leading-none font-[Poppins] tracking-tight">
            15,000+
          </div>
          <div className="text-[11px] md:text-[13px] font-medium text-gray-500">
            Verified Reviews
          </div>
        </div>

        {/* Stat 3: Domestic Employer */}
        <div className="flex flex-col items-center justify-center gap-1">
          <Award
            className="w-6 h-6 md:w-7 md:h-7 text-gray-600 mb-1 md:mb-2"
            strokeWidth={1.5}
          />
          <div className="text-[28px] md:text-[42px] font-medium text-gray-900 leading-none font-[Poppins] tracking-tight">
            #1
          </div>
          <div className="text-[11px] md:text-[13px] font-medium text-gray-500">
            Domestic Employer
          </div>
        </div>

        {/* Stat 4: Visas Issued */}
        <div className="flex flex-col items-center justify-center gap-1">
          <ShieldCheck
            className="w-6 h-6 md:w-7 md:h-7 text-gray-600 mb-1 md:mb-2"
            strokeWidth={1.5}
          />
          <div className="text-[28px] md:text-[42px] font-medium text-gray-900 leading-none font-[Poppins] tracking-tight">
            25K+
          </div>
          <div className="text-[11px] md:text-[13px] font-medium text-gray-500">
            Visas Issued
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;
