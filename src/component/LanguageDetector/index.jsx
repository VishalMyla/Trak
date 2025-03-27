import { changeLanguage } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

function LangDetector({setIsclicked}) {
    const { i18n } = useTranslation()
    const languges = [
        { code: "en", Lang: "English" },
        { code: "fi", Lang: "Finnish" },
        { code: "swe", Lang: "Sweden" },
        { code: "hi", Lang: "Hindi" },
  

       
    ]

    function changeLanguage(lang) {
        console.log(lang);

        i18n.changeLanguage(lang)
    }
    return (
        <div className=" ">

<div class="relative inline-block text-gray-700 mt-10">
 
    <select 
      value={i18n.language} 
      onChange={(e) => {
        changeLanguage(e.target.value);
        setIsclicked(false);
    }}
      className='appearance-none border border-gray-300 rounded-md py-2 px-2 pr-7 
      focus:outline-none focus:ring-2 focus:ring-e11d49'
    >
      {languges.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.Lang}
        </option>
      ))}
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
       <path fill="#000000" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
          </div>
  </div>
</div>

     
        

    )
}

export default LangDetector