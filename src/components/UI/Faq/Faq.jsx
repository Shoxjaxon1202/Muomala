import React, { useState } from "react";
import "./faq.scss";

const faqData = [
  {
    question: "Will I receive lifetime access to the courses?",
    answer:
      "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
  },
  {
    question: "Can I use the materials for community teaching?",
    answer:
      "Yes, the materials can be shared and used for community teaching purposes.",
  },
  {
    question: "Is there a free trial for the courses?",
    answer:
      "We offer a 7-day free trial for new users. Sign up to get started!",
  },
  {
    question: "Who can benefit from these courses?",
    answer:
      "Anyone who is interested in expanding their knowledge and skills in various subjects.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same card is clicked
    } else {
      setActiveIndex(index); // Open a different card
    }
  };

  return (
    <div className="faq">
      <div className="faq_wrapper">
        <h2 className="team_title">Frequently asked questions</h2>
        <p className="faq_subtitle">
          If you have any further questions, please contact us
        </p>
        <div className="faq_list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq_card ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}>
              <div className="faq_question">
                <span>{item.question}</span>
                <span className="faq_icon">
                  {activeIndex === index ? "✕" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq_answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
