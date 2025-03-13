// // Modified Stage3.jsx
// import { useState } from 'react';
// import Stepper from './Stepper';

// function Stage3({ onNextClick3 }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     zip: '',
//     phone: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   return (
//     <div className=" bg-white flex flex-col items-center justify-around p-4">
//       <h1 className="text-4xl font-semibold text-center ">Let&apos;s get you more</h1>
//       <div className='flex justify-center items-center'>
//         <div className="w-full gap-24 flex flex-row-reverse ">
//           <div className="bg-white rounded-lg px-6 pb-6">
//             <div className="mb-6 ">
//               <div className="flex flex-col justify-center space-x-4 mb-4">
//                 <label className="block text-gray-700 font-normal mb-2">Name</label>
//                 <div className='flex flex-row gap-2 '>
//                   <div className='w-1/2'>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="First name"
//                     />
//                   </div>
//                   <div className='w-1/2'>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Last name"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm mb-2">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your email"
//                 />
//               </div>

//               <div className="mb-4 flex flex-col gap-4">
//                 <label className="block text-gray-700 ">Address</label>
//                 <div>
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     value={formData.addressLine1}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Address line 1"
//                   />
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     value={formData.addressLine2}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Address line 2"
//                   />
//                   <div className="flex flex-col gap-4 space-x-4">
//                     <div>
//                       <input
//                         type="text"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="City"
//                       />
//                     </div>
//                     <div>
//                       <input
//                         type="text"
//                         name="zip"
//                         value={formData.zip}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Zip"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2">Phone</label>
//                 <div className="flex">
//                   <select className="px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-100">
//                     <option>🇮🇳 +91</option>
//                     <option>🇺🇸 +1</option>
//                   </select>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="+1 (555) 000-0000"
//                   />
//                 </div>
//               </div>
//             </div>

//             <button 
//               onClick={onNextClick3}
//               className="w-full bg-white border-1 border-black text-black py-3 rounded-md hover:bg-[#4A3AFF] hover:border-[#4A3AFF] hover:text-white transition duration-300"
//             >
//               Continue
//             </button>
//           </div>
//           <Stepper/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stage3;


import { useState } from 'react';
import Stepper from './Stepper';

function Stage3({ onNextClick3 }) {
  // State to track which step we're on
  const [currentStep, setCurrentStep] = useState(1);
  
  // Career form data (Step 1)
  const [careerFormData, setCareerFormData] = useState({
    keySkills: '',
    careerConfidence: '',
    learningPreference: '',
    timelineGoal: ''
  });

  // Banking form data (Step 2)
  const [bankingFormData, setBankingFormData] = useState({
    currency: '',
    countryOfBank: '',
    iban: '',
    confirmIban: ''
  });

  // Handle input change for career form
  const handleCareerInputChange = (e) => {
    const { name, value } = e.target;
    setCareerFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle input change for banking form
  const handleBankingInputChange = (e) => {
    const { name, value } = e.target;
    setBankingFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle first continue button click
  const handleFirstContinue = () => {
    setCurrentStep(2);
  };
  
  // Render the appropriate form based on current step
  const renderForm = () => {
    const inputClassName = "w-full min-w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
    const selectClassName = "w-full min-w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white";
    
    if (currentStep === 1) {
      return (
        <div className="mb-6 w-full">
          {/* Key Skills Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">What are the key skills you already have?"</label>
            <input
              type="text"
              name="keySkills"
              value={careerFormData.keySkills}
              onChange={handleCareerInputChange}
              className={inputClassName}
            />
          </div>

          {/* Career Confidence Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">How confident do you feel about your career journey right now?</label>
            <input
              type="text"
              name="careerConfidence"
              value={careerFormData.careerConfidence}
              onChange={handleCareerInputChange}
              className={inputClassName}
            />
          </div>

          {/* Learning Preference Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">"What's your preferred way of learning?</label>
            <input
              type="text"
              name="learningPreference"
              value={careerFormData.learningPreference}
              onChange={handleCareerInputChange}
              className={inputClassName}
            />
          </div>

          {/* Timeline Goal Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">"How soon do you want to achieve your career goal?</label>
            <input
              type="text"
              name="timelineGoal"
              value={careerFormData.timelineGoal}
              onChange={handleCareerInputChange}
              className={inputClassName}
            />
          </div>

          {/* Continue Button for first step */}
          <button 
            onClick={handleFirstContinue}
            className="w-full bg-white border border-black text-black py-3 rounded-md hover:bg-[#4A3AFF] hover:border-[#4A3AFF] hover:text-white transition duration-300"
          >
            Continue
          </button>
        </div>
      );
    } else {
      return (
        <div className="mb-6 w-full">
          {/* Currency Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Currency</label>
            <select
              name="currency"
              value={bankingFormData.currency}
              onChange={handleBankingInputChange}
              className={selectClassName}
            >
              <option value="" disabled>Select your currency...</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="INR">INR - Indian Rupee</option>
            </select>
          </div>

          {/* Country of bank account Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Country of bank account</label>
            <select
              name="countryOfBank"
              value={bankingFormData.countryOfBank}
              onChange={handleBankingInputChange}
              className={selectClassName}
            >
              <option value="" disabled>Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
              <option value="JP">Japan</option>
            </select>
          </div>

          {/* IBAN Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">IBAN</label>
            <input
              type="text"
              name="iban"
              value={bankingFormData.iban}
              onChange={handleBankingInputChange}
              className={inputClassName}
              placeholder="Enter your IBAN"
            />
          </div>

          {/* Confirm IBAN Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Confirm IBAN</label>
            <input
              type="text"
              name="confirmIban"
              value={bankingFormData.confirmIban}
              onChange={handleBankingInputChange}
              className={inputClassName}
              placeholder="Confirm IBAN"
            />
          </div>

          {/* Continue Button for second step */}
          <button 
            onClick={onNextClick3}
            className="w-full bg-white border border-black text-black py-3 rounded-md hover:bg-[#4A3AFF] hover:border-[#4A3AFF] hover:text-white transition duration-300"
          >
            Continue
          </button>
        </div>
      );
    }
  };
  
  return (
    <div className="w-[71.42%] bg-white flex flex-col gap-10 items-center justify-center p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4">Let&apos;s get you more</h1>
      <div className="w-full flex flex-row gap-4 justify-start">
          <h2 className="text-lg font-normal">Account Information</h2>
          <button className='border border-black rounded-sm p-[2px]'>In progress</button>
      </div>
      
      
        <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse gap-6 md:gap-12 lg:gap-24 lg:px-8">
          {/* Form Container - Added a fixed width wrapper */}
          <div className="w-full md:w-2/3 bg-white rounded-lg px-4 md:px-6 pb-6">
            <div className="w-full max-w-lg mx-auto">
              {renderForm()}
            </div>
          </div>

          {/* Stepper - Hidden on mobile, visible on tablets and above */}
          <div className="hidden md:block md:w-1/3">
            <Stepper />
          </div>
        </div>
      
      
      {/* Mobile Stepper - Only visible on mobile */}
      <div className="w-full mt-6 md:hidden">
        <Stepper />
      </div>
    </div>
  );
}

export default Stage3;