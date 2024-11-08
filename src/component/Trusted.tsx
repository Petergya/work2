


"use client";
import { useState } from "react";

export default function Trusted() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes your services unique?",
      answer: "",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "Quality assurance is at the core of our operations. We employ rigorous testing and feedback loops to refine our services, ensuring they consistently meet our high standards.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We proudly serve a diverse range of industries including finance, technology, healthcare, and education, providing customized solutions for each sector's unique challenges.",
    },
    {
      question: "Can you provide client testimonials?",
      answer:
        "Absolutely! We have numerous testimonials from satisfied clients who can attest to the effectiveness and quality of our services. We are happy to share their experiences.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is competitive and transparent, with options tailored to fit various budgets without compromising on the quality of service delivered.",
    },
    {
      question: "How can we get in touch?",
      answer:
        "Getting in touch is easy! You can reach us through our website’s contact form, email, or by calling our dedicated support line.",
    },
  ];

  return (
    <div className="mx-auto px-4 pb-16 pt-16 max-w-6xl sm:pb-24 sm:pt-24">
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold text-[#0D0D0D] sm:text-2xl lg:text-3xl">
          Trusted by Industry Leaders
        </h1>
        <p className="text-[#0D0D0D] text-sm sm:text-base lg:text-lg pb-6 sm:pb-8">
          Your Questions Answered
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border bg-[#FCFCFC] border-gray-300 rounded-lg mb-4"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full font-semibold text-left p-3 sm:p-4 text-gray-800 flex justify-between items-start text-sm sm:text-base lg:text-lg"
          >
            <span>{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
              className="transform transition-transform"
              style={{
                marginTop: '-8px', // Move the arrow up to touch the border
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-3 sm:p-4 text-[#0D0D0D] border-t border-gray-300 text-sm sm:text-base lg:text-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
