import React from 'react'
import Telegram from "../assets/telegramP.png"
import LinkedIn from "../assets/LinkedInP.png"
import PhoneP from "../assets/PhoneP.png"
import Inputs from './Inputs'
import Translate from "../utils/Translate"


export const Contact = () => {
  return (
    <div id='contact'>
      <div className='text-[35px] my-10 md:text-[44px] text-center font-bold' onClick={() => setToggle(false)}><Translate dictionary={{ ru: 'Свяжитесь со мной', en: 'Contact Me' }}/>Contact Me</div>
      <div className='max-w-[700px] w-full m-auto px-5'>
        <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 my-5'>
          <a href='https://www.linkedin.com/in/kookowa11/' target='blank' className='flex min-w-[300px] w-full sm:w-auto h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
            <img src={LinkedIn} alt="Telegram" className='w-[50px]' />
            <span className='text-[#5e6064]'>in/kookowa-developer</span>
          </a>
          <a href='https://t.me/Kookowa' target='blank' className='flex min-w-[300px] w-full sm:w-auto h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
            <img src={Telegram} alt="Telegram" className='w-[50px]' />
            <span className='text-[#5e6064]'>t.me/kookowa</span>
          </a>
          <a href='tel:+998908292171' target='blank' className='flex min-w-[300px] w-full sm:w-auto h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
            <img src={PhoneP} alt="Telegram" className='w-[20px]' />
            <span className='text-[#5e6064]'>  +(998) 97 477 17 07</span>
          </a>
        </div>
        <Inputs />
      </div>
    </div>
  )
}


export default Contact