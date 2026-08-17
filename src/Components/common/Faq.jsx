import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../../layout/Container";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(2); // 3rd item is open by default in design

  const faqs = [
    {
      question: "Are you licensed by the Ministry of Human Resources and Emiratization?",
      answer: "Yes, we are fully licensed and compliant with all UAE labor laws.",
    },
    {
      question: "Why should I use a licensed agency?",
      answer: "Using a licensed agency ensures that all legal procedures are followed correctly, protecting both you and the domestic worker.",
    },
    {
      question: "How much do your services cost?",
      answer: "You can hire a maid starting from 2,980 AED / month, or get a Visa for your maid for 8500 AED + 160 AED monthly for 2 years.",
    },
    {
      question: "What documents do I need to use maids.cc services?",
      answer: "Typically, you need your Emirates ID, Passport copy, and Visa page. We will guide you through any additional requirements.",
    },
    {
      question: "Do you offer part-time/hourly/daily maids?",
      answer: "We specialize in full-time live-in and live-out maids, but please contact us for specific requirements.",
    },
    {
      question: "What if the maid does not match my family's preferences?",
      answer: "We offer a replacement guarantee to ensure you find the perfect match for your family's needs.",
    },
    {
      question: "What if I want to cancel later on?",
      answer: "You can cancel the service according to the terms outlined in our service agreement.",
    },
    {
      question: "What if I want to cancel later on?",
      answer: "You can cancel the service according to the terms outlined in our service agreement.",
    },
    {
      question: "Can you bring my maid from outside the UAE?",
      answer: "Yes, we handle all the visa and immigration processes to bring your maid from their home country.",
    },
    {
      question: "Are there any legal liabilities?",
      answer: "As long as you follow the guidelines and legal framework provided by the UAE government, which we facilitate, there are no legal liabilities.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section>
      <Container className="max-w-7xl bg-[#f7fafc] rounded-2xl shadow-sm py-12 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12 font-[Poppins]">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  animation: `faqFadeIn 0.5s ease forwards`,
                  animationDelay: `${index * 60}ms`,
                  opacity: 0,
                }}
                className={`rounded-xl transition-colors duration-300 ease-out cursor-pointer overflow-hidden border ${
                  isOpen
                    ? "bg-[#e2e2e2] border-[#d5d5d5]"
                    : "bg-white border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-[1px]"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="px-6 py-5 flex justify-between items-center gap-4">
                  <span
                    className={`text-lg transition-all duration-300 ${
                      isOpen ? "font-semibold text-gray-900" : "font-medium text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180 text-gray-600" : "rotate-0 text-gray-400"
                    }`}
                  />
                </div>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-6 pb-6 pt-0 text-base text-gray-600 leading-relaxed font-medium transition-all duration-300 ${
                        isOpen
                          ? "opacity-100 translate-y-0 delay-100"
                          : "opacity-0 -translate-y-1"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <style>{`
        @keyframes faqFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;