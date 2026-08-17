import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Container from "../../layout/Container";

const BetterInEveryWay = ({ rows = [] }) => {
  if (!rows || rows.length === 0) return null;

  return (
    <section className="section-padding bg-[#fafafa]">
      <Container className="max-w-5xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-3xl font-semibold text-gray-900 mb-2 font-[Poppins]">
            Better in every way.
          </h2>
        </div>

        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Row (Hidden on mobile) */}
          <div className="hidden md:grid grid-cols-12 border-b border-gray-100 bg-white">
            <div className="col-span-4 p-6 font-semibold text-gray-900 text-sm flex items-center">
              Category
            </div>
            <div className="col-span-4 p-6 flex flex-col items-center justify-center border-l border-r border-gray-100 bg-[#fefdfa]">
              <div className="text-2xl font-black text-gray-900 leading-none tracking-tight font-[Poppins]">
                maids.cc
              </div>
            </div>
            <div className="col-span-4 p-6 flex flex-col items-center justify-center">
              <FaBriefcase className="text-gray-400 w-5 h-5 mb-1" />
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-1">
                Other Agencies
              </div>
            </div>
          </div>

          {/* Data Rows */}
          <div className="flex flex-col">
            {rows.map((row, index) => (
              <div
                key={index}
                className="flex flex-col md:grid md:grid-cols-12 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors py-5 px-4 md:p-0"
              >
                {/* Mobile Category Header */}
                <div className="md:hidden font-bold text-gray-900 text-[16px] mb-4 font-[Poppins] border-b border-gray-50 pb-2">
                  {row.category}
                </div>

                {/* Desktop Category Cell */}
                <div className="hidden md:flex col-span-4 p-6 text-[13px] font-semibold text-gray-800 items-center">
                  {row.category}
                </div>

                {/* Comparison Data */}
                <div className="flex flex-col md:contents gap-3">
                  {/* maids.cc (Us) */}
                  <div className="md:col-span-4 md:p-6 text-[14px] font-bold text-primaryCta md:border-l md:border-r md:border-gray-100 md:bg-[#fefdfa] flex flex-row items-start md:items-center md:justify-center text-left md:text-center leading-relaxed">
                    <span className="md:hidden text-[13px] font-black text-gray-900 w-[130px] shrink-0 font-[Poppins] mt-px">
                      maids.cc
                    </span>
                    <span className="flex-1">{row.us}</span>
                  </div>

                  {/* Other Agencies (Them) */}
                  <div className="md:col-span-4 md:p-6 text-[13px] font-medium text-gray-500 flex flex-row items-start md:items-center md:justify-center text-left md:text-center leading-relaxed">
                    <span className="md:hidden text-[11px] font-bold text-gray-400 w-[130px] shrink-0 uppercase tracking-wider mt-[3px]">
                      Other Agencies
                    </span>
                    <span className="flex-1">{row.them}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BetterInEveryWay;
