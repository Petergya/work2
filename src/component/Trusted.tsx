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
        "We proudly serve a diverse range of industries including finance, technology, healthcare, and education, providing customized solutions for each sector unique challenges.",
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
    <div className="mx-auto pb-32 pt-32 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Trusted by Industry Leaders</h1>
        <p className="text-[#0D0D0D] pb-8">Your Questions Answered</p>
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border bg-[#FCFCFC] border-gray-300 rounded-lg mb-4"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full font-bold p-4 text-left text-gray-800 flex justify-between items-center"
          >
            <span>{faq.question}</span>
            <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 text-[#0D0D0D] border-t border-gray-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
