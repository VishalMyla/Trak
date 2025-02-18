import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: 'What is Trak?',
      answer: 'Trak is an AI-powered platform that creates personalized learning pathways to help you achieve your career goals. It identifies your skill gaps, provides tailored content, and guides you step by step with dynamic milestones.',
    },
    {
      id: 2,
      question: 'How does Trak create my learning pathway?',
      answer: 'Trak uses AI to analyze your current skills, career aspirations, and preferences. Based on this, it generates a customized roadmap with learning modules, timelines, and milestones designed for your success.',
    },
    {
      id: 3,
      question: 'What are the milestones on my pathway?',
      answer: 'Milestones are key points in your learning journey that mark significant achievements or skill acquisitions. They help you track your progress and stay motivated.',
    },
    {
        id: 4,
        question: 'Can I change my goals after starting?',
        answer:''
    },
    {
         id:5,
         question: 'Is Trak suitable for beginners?',
         answer: 'To get started with Trak, simply sign up for a free account, complet'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(activeIndex); // Note: This will log the previous state due to async nature
  };

  return (
    <div className="faq-container">
      <h1 className="text-5xl fontClassFAQ">
        Frequently <br />
        Asked
        <b className="text-[#39DC8E] font-semibold"> Questions</b>
      </h1>
      {faqData.map((faq, index) => (
        <div className="border-2 border-black mb-5 py-4 rounded-md px-5 pt-5 mt-12 w-3xl " key={faq.id}>
          <div className="faq-header relative" onClick={() => toggleFAQ(index)}>
            <span className="text-lg font-semibold">0{index + 1}</span>
            <span className="ml-5 text-xl font-semibold">{faq.question}</span>
            <span
              className={`px-5 py-4  ${activeIndex === index ? 'bg-[#39DC8E]':'bg-black text-white' }  text-2xl absolute -right-5 -top-5 cursor-pointer`}
            >
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div className={`faq-content ${activeIndex === index ? 'block' : 'hidden'}`}>
            <p className="my-10 mb-16 ml-10 font-light leading-loose">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
