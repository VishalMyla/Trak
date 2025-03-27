import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
const FAQ = () => { 
  const {t} = useTranslation()
  const faqData = [
    {
      id: 1,
      question: t('faqData.FAQ1.question1'),
      answer: t('faqData.FAQ1.answer1'),
    },
    {
      id: 2,
      question: t('faqData.FAQ2.question'),
      answer:t('faqData.FAQ2.answer'),
    },
    {
      id: 3,
      question: t('faqData.FAQ3.question'),
      answer: t('faqData.FAQ3.answer'),
    },
    {
        id: 4,
        question: t('faqData.FAQ4.question'),
        answer: t('faqData.FAQ4.answer'),
    },
    {
         id:5,
         question: t('faqData.FAQ5.question'),
         answer: t('faqData.FAQ5.answer'),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(activeIndex); // Note: This will log the previous state due to async nature
  };

  return (
    <div className=" my-40">
      <h1 className="text-4xl text-center font-semibold  fontClassFAQ mb-20">
    {t('FAQHeading')} &nbsp;
        <b className="text-[#39DC8E] font-semibold">{t('FAQHeading1')} </b>
      </h1>
      {faqData.map((faq, index) => (
        <div className="border-2 border-black mb-5 py-4 rounded-md px-5 max-md:px-2 mx-auto pt-5 mt-12 w-3xl max-md:w-full " key={faq.id}>
          <div className="faq-header relative" onClick={() => toggleFAQ(index)}>
            <span className="text-lg max-md:text-sm font-semibold">0{index + 1}</span>
            <span className="ml-5 max-md:ml-2 text-xl max-md:text-sm font-semibold">{faq.question}</span>
            <span
              className={`w-[5%] h-[230%] max-md:h-[250%]  max-md:w-[10%] inline-block p-3 max-md:py-3.5 ${activeIndex === index ? 'bg-[#39DC8E]':'bg-black text-white' }  text-2xl max-md:text-xl absolute -right-5 -top-5 max-md:-right-2 cursor-pointer`}
            >
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div className={` faq-content ${activeIndex === index ? 'block' : 'hidden'}`}>
            <p className="my-10 mb-16 ml-10 font-light leading-loose">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
