import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "What types of salt do you supply?",
    answer: "We manufacture and export a comprehensive range of edible grade and industrial salts, including iodized salt, free-flow salt, low hardness salt, low sodium salt, coarse salt, super fine salt, tablet salt, and more. Our product portfolio extends beyond these standard offerings. We also develop customized salt solutions to match your exact specifications."
  },
  {
    question: "Can you customize salt according to our specifications?",
    answer: "Yes. We offer customization in grain size, purity, iodine level, additives, and packaging to meet your specific requirements."
  },
  {
    question: "What packaging options do you provide?",
    answer: "We offer bulk packaging in 20 KG, 25 KG, 40 KG, 50 KG PP woven bags with inner liner, 1.4 MT jumbo bags, as well as retail packaging in 500 g, 1 kg, canisters, and plastic bottles."
  },
  {
    question: "How do you ensure product quality?",
    answer: "Every batch undergoes strict quality checks to ensure it meets the required purity, quality, and customer specifications before dispatch."
  },
  {
    question: "How can I place an order or request a quotation?",
    answer: "You can contact our sales team through the website, email, or phone with your product specifications, quantity, and destination. We will provide a customized quotation promptly."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity for bulk packaging (20 KG, 25 KG, 40 KG, 50 KG bags, loose salt, and jumbo bags) is one full container, approximately 28 MT. The MOQ for retail packaging and private label orders may vary depending on the packaging format and customization requirements. Please contact us for specific details."
  },
  {
    question: "Which certifications do you have?",
    answer: "We hold FSSAI, HALAL, and ISO certifications, along with other applicable food safety and quality certifications. We can also provide the necessary certification documents based on the product and destination country's requirements."
  },
  {
    question: "Can you supply multiple products in one container?",
    answer: "Yes. Depending on the packaging and loading plan, we can supply different salt products in a single container."
  },
  {
    question: "Can you provide a salt sample before placing an order?",
    answer: "Yes, we can provide a salt sample upon request. Customers who require a sample for quality evaluation or testing are welcome to contact us."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="w-full bg-[#FDFCF7] py-20 lg:py-32 relative z-40 border-t border-[#2D4F44]/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#5BA298] font-bold tracking-widest uppercase text-sm mb-4 block">
            Support & Help
          </span>
          <h2 className="text-[#2D4F44] font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight mb-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 cursor-pointer border border-transparent ${isActive
                  ? 'bg-white shadow-[0_15px_40px_rgba(45,79,68,0.08)] border-[#2D4F44]/5'
                  : 'bg-[#2D4F44]/[0.04] hover:bg-[#2D4F44]/[0.06]'
                  }`}
              >
                {/* Question Area */}
                <div className="flex items-center justify-between p-5 md:px-8 md:py-6">
                  <h3 className={`text-base md:text-lg font-bold pr-6 md:pr-8 transition-colors ${isActive ? 'text-[#2D4F44]' : 'text-[#2D4F44]/80'
                    }`}>
                    {faq.question}
                  </h3>

                  {/* Icon Button */}
                  <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
                    ? 'bg-[#2D4F44]/10 text-[#2D4F44] rotate-90'
                    : 'bg-white text-[#2D4F44] shadow-sm rotate-0'
                    }`}>
                    {isActive ? <X size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </div>
                </div>

                {/* Answer Area (Collapsible) */}
                <div
                  className={`grid transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-8 pb-6 md:pb-8 text-[#2D4F44]/70 text-sm md:text-base leading-relaxed transform transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] origin-top">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
