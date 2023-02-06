import React, { useEffect } from 'react';
import {FaFacebook,FaTelegram,FaGithub,FaInstagram} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='contact bg-black text-white' id='contact'>
      <div className="ct_body py-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="" data-aos="zoom-in">
            <h2 className='text-[20px] font-semibold uppercase'>Contact</h2>
            <ul className='mt-3 leading-loose text-[#c5c4c4]'>
              <li>Email : htetmyataung16000@gmail.com</li>
              <li>Phone : 09770106619</li>
              <li>Address : Yangon/ San Chaung</li>
            </ul>
          </div>
          <div className="md:pl-10 my-10 md:my-0" data-aos="zoom-in">
              <h2 className='text-[20px] font-semibold uppercase'>Services</h2>
              <ul className='mt-3 leading-loose text-[#c5c4c4]'>
                <li>Responsive Design</li>
                <li>Clean Code</li>
                <li>Freelance</li>
                <li>Maintenance</li>
              </ul>
          </div>
          <div className="flex md:flex-col gap-10 md:gap-3 justify-center md:items-end" data-aos="zoom-in">
            <a href='https://www.facebook.com/profile.php?id=100042798099129&mibextid=ZbWKwL' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaFacebook size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>Facebook</span>
            </a>
            <a href='https://t.me/MgTayZa' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaTelegram size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>Telegram</span>
            </a>
            <a href='https://instagram.com/htet_myataung2002?igshid=NTA5ZTk1NTc=' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaInstagram size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>Instagram</span>
            </a>
            <a href='https://github.com/MgHtetMyatAung' className="w-[40px] md:w-[200px] h-[40px] bg-white rounded-full flex items-center cursor-pointer text-black hover:text-kayan transition-all duration-200">
              <FaGithub size={25} className="ml-2 md:ml-3"/>
              <span className='text-black hidden md:block md:ml-3 text-[18px] cursor-pointer'>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;