import React from 'react';
import home from "./home.css";
import cvImg from "../../assets/pp.jpg";
import {BsCodeSlash,BsVectorPen,BsAlarm} from "react-icons/bs";
import {FaFacebook,FaTelegram,FaGithub,FaInstagram} from 'react-icons/fa';
import 'animate.css';

const Home = () => {
  return (
    <div className='home'>
      <div className="h_main mt-10 md:mt-20 lg:mt-0">
        <div className="flex flex-col">
          <p className='font-semibold text-[30px]'>I am <span className='text-[32px] text-kayan'>W</span>ai Yan</p>
          <p className='text-[32px] md:text-[48px] xl:text-[55px] font-bold'><span className='text-[38px] md:text-[55px] lg:text-[60px] text-kayan'>F</span>rontend <span className='text-[38px] md:text-[55px] lg:text-[60px] text-kayan'>D</span>eveloper</p>
          <p className='text-[#555] font-medium my-2'>
            You can trust me <br />
            And I wanna try to perfect your business
          </p>
          <div className="hidden md:flex gap-10 md:gap-3">
            <a href='https://www.facebook.com/waiyan.yan.12382?mibextid=ZbWKwL' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaFacebook size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>Facebook</span>
            </a>
            <a href='https://t.me/wai_yan_282' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaTelegram size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>Telegram</span>
            </a>
            <a href='https://www.instagram.com/waiyan65/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaInstagram size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>Instagram</span>
            </a>
            <a href='https://github.com/waiyanhtun282' className="w-[40px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaGithub size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:ml-3 text-[18px] cursor-pointer'>GitHub</span>
            </a>
          </div>
          <div className="flex gap-3 mt-5">
            <a href='tel:09787550342' className='h_btn'>Hire me</a>
            <a href='#contact' className='h_btn'>Contact</a>
          </div>
        </div>
      </div>
      <div className="h_main justify-center">
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
          <div className='bg-black text-white w-[60px] h-[60px] rounded-full grid place-items-center absolute top-0 right-[-15px] md:right-0 shadow-lg animate__animated animate__bounceInDown'>
            <BsVectorPen size={22}/>
          </div>
          <img src={cvImg} alt="" className='w-[100%] h-[100%] rounded-full border-[5px] border-black absolute z-20 shadow-lg animate__animated animate__bounceIn'/>
          <div className='bg-black text-white w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full grid place-items-center absolute bottom-0 left-[-15px] z-0 shadow-lg animate__animated animate__bounceInLeft'>
            <BsAlarm size={28}/>
          </div>
          <div className='bg-black text-white w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full grid place-items-center absolute bottom-[20%] md:bottom-[30%] right-[-40px] z-30 shadow-lg animate__animated animate__bounceInRight'>
            <BsCodeSlash size={30}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;