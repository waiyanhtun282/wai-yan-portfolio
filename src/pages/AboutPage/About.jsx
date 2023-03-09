import React, { useEffect } from 'react';
import './about.css';
import introGif from "../../assets/intro.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='about ab_main relative' id='about'>
      <p className='uppercase ab_header' data-aos="fade-right">About me</p>
      <div className="mt-10 md:mt-20 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2" data-aos="zoom-in">
          <img src={introGif} alt="" className='rounded-[10px] w-full'/>
        </div>
        <div className="w-full lg:w-1/2" data-aos="zoom-in">
          <p className='text-[18px] mt-3 text-[#666]'>
          <span className='text-kayan font-medium text-[20px]'>{`<p>`}</span>   Hello, my name’s <span className='font-bold text-[19px] text-black'>Htet Myat Aung</span> . I am a frontend developer based in Myanmar and I have been studying web design since 2021. <br />
           <span className=' opacity-0'>hello par</span> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.   <span className='text-kayan font-medium text-[20px]'>{`</p> `}</span>
          </p>
        </div>
      </div>
      <div className="flex py-5 md:mx-auto bg-white shadow-lg w-[100%] md:w-[70%] bottom-[0%] left-[15%] rounded-[8px] mt-5 xl:mt-20" data-aos="zoom-in">
        <div className="w-1/3 text-center border-r-4 border-kayan">
          <p className='text-[20px] md:text-[25px] font-medium'>2 years</p>
          <p className='text-[16px] md:text-[18px] text-[#555]'>Experience</p>
        </div>
        <div className="w-1/3 text-center border-r-4 border-kayan">
          <p className='text-[20px] md:text-[25px] font-medium'>10 +</p>
          <p className='text-[16px] md:text-[18px] text-[#555]'>Projects</p>
        </div>
        <div className="w-1/3 text-center">
          <p className='text-[20px] md:text-[25px] font-medium'>10 +</p>
          <p className='text-[16px] md:text-[18px] text-[#555]'>Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About