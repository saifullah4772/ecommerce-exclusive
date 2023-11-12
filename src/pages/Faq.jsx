import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      <div className="p-4">
        <button
          className="w-full flex justify-between items-center py-2 px-4 border-b border-gray-300 focus:outline-none"
          onClick={toggleAccordion}
        >
          <span className="text-lg font-medium text-gray-800">{question}</span>
          <span className="text-gray-600">{isOpen ? "-" : "+"}</span>
        </button>
        <div className={isOpen ? "py-2 px-4" : "py-2 px-4 hidden"}>
          <div
            className="text-gray-700 faqs"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function FAQPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const faqData = [
    {
      question: "How do I create an account on Exclusive?",
      answer: `To create an account on Exclusive, follow these steps: <ul>
      <li>Go to Signup Page.</li>
      <li>Enter your name, email address, and password.</li>
      <li>Click the Create Account button.</li>
    </ul>
    `,
    },
    {
      question: "How do I place an order?",
      answer: `To place an order, follow these steps: <ul>
      <li>Go to the product page.</li>
      <li>Select the item you want to purchase.</li>
      <li>Click Add to Cart.</li>
      <li>Go to the cart page.</li>
      <li>Click Checkout and follow the on-screen instructions to complete your purchase.</li>
    </ul>
    `,
    },
    {
      question: "What is the return policy for Exclusive products?",
      answer: "Our return policy allows returns within 30 days of purchase.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Regrettably, international shipping services are not available at this time.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the order tracking page to see the status.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, Google Pay, and more.",
    },
    {
      question: "Are there any discounts?",
      answer: "Yes, We frequently offer discounts.",
    },
    {
      question: `Can I cancel my order after it's been placed?`,
      answer:
        "You can cancel your order before it has been processed for shipping.",
    },
    {
      question: "How long does shipping usually take?",
      answer:
        "Shipping times vary depending on your location and chosen shipping method.",
    },
    {
      question: "Do you offer gift wrapping services?",
      answer: "Yes, we offer gift wrapping services for a small fee.",
    },
  ];

  return (
    <section className="bg-neutral-100 py-20">
      <div className="w-2/5 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>

        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQPage;
