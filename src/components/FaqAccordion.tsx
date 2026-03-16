import { useState } from "react";
import { faqs } from "../data/faq";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto scroll-reveal">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border-b border-gray-200 transition-colors duration-300 ${
              isOpen ? "border-accent/30" : ""
            }`}
          >
            <button
              type="button"
              className="w-full text-left py-5 flex justify-between items-center gap-4"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span
                className="text-lg text-navy font-medium"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? "500px" : "0px",
              }}
            >
              <p className="text-body pb-5 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
