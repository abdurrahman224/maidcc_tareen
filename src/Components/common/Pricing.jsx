import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../../layout/Container";

const Pricing = ({ plans = [] }) => {
  if (!plans || plans.length === 0) return null;

  return (
    <section id="pricing" className="section-padding bg-white relative z-20">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-3 font-[Poppins]">
            Transparent Pricing
          </h2>
          <p className="section-desc text-gray-600 font-medium">
            Choose the plan that fits your timeline and budget.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const isHighlight = plan.highlight;
            const priceParts = plan.subtitle.split("/");
            const amount = priceParts[0].trim();
            const period = priceParts[1] ? `/${priceParts[1].trim()}` : "";

            return (
              <div
                key={index}
                className={`relative w-full md:w-[320px] lg:w-[340px] rounded-[16px] p-8 flex flex-col bg-white transition-shadow duration-300 ${
                  isHighlight
                    ? "border-2 border-[#3b82f6] shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                    : "border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                }`}
              >
                {/* Popular Badge */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white px-5 py-1 rounded-full text-[12px] font-medium tracking-wide">
                    Most Popular
                  </div>
                )}

                <h3 className="text-[20px] font-semibold text-gray-900 mb-1 text-left font-[Poppins]">
                  {plan.title}
                </h3>

                <p className="text-[12px] text-gray-500 mb-4 text-left font-medium">
                  Starting from
                </p>

                <div className="flex items-baseline gap-1 mb-6 text-left">
                  <span className="text-[36px] md:text-[40px] font-bold text-[#1e3a8a] tracking-tight font-[Poppins] leading-none">
                    {amount}
                  </span>
                  {period && (
                    <span className="text-[14px] font-semibold text-[#1e3a8a]">
                      {period}
                    </span>
                  )}
                </div>

                <Link
                  to="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ani block text-center w-full py-3 rounded-lg text-[14px] font-semibold transition-all mb-8 shadow-sm bg-primaryCta text-white"
                >
                  {plan.btnText}
                </Link>

                <p className="text-[12px] text-gray-500 mb-5 text-left font-semibold">
                  What's included:
                </p>

                <div className="flex flex-col gap-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="w-[18px] h-[18px] text-[#22c55e] shrink-0 mt-[2px] bg-white rounded-full" />
                      <span className="text-[13px] text-gray-600 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primaryCta text-[12px] font-semibold opacity-90">
            All plans include a 30-day money-back guarantee. No credit card
            required for trial.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
