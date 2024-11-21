import React, { useState } from "react";
import "./faq.scss";

const faqData = [
  {
    question: "Will I receive lifetime access to the courses?",
    answer:
      "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively. These materials are crafted to meet various learning styles and make your study journey smooth and effective.",
  },
  {
    question: "Can I use the materials for community teaching?",
    answer:
      "Yes, the materials can be shared and used for community teaching purposes. We encourage educators to spread knowledge and help their communities grow.",
  },
  {
    question: "Is there a free trial for the courses?",
    answer:
      "We offer a 7-day free trial for new users. Sign up to get started! During the trial, you can explore all courses and materials to see if they're the right fit for you.",
  },
  {
    question: "Who can benefit from these courses?",
    answer:
      "Anyone who is interested in expanding their knowledge and skills in various subjects. Whether you're a student, a teacher, or a lifelong learner, these courses are designed to help you achieve your goals.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <div className="faq">
      <div className="faq_wrapper">
        <h2 className="faq_title">Frequently Asked Questions</h2>
        <p className="faq_subtitle">
          If you have any further questions, please contact us.
        </p>
        <div className="faq_list">
          {faqData.map((item, index) => (
            <div key={index} className="faq_card">
              <div
                className="faq_question"
                onClick={() => toggleAccordion(index)}>
                <span>{item.question}</span>
                <span
                  className={`faq_icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}>
                  +
                </span>
              </div>
              <div
                className={`faq_answer ${activeIndex === index ? "show" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
