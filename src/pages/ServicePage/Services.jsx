import React, { useEffect } from 'react';
import ServiceCard from '../../components/nav/ServiceCard';
import './service.css';
import {BsGear,BsVectorPen,BsCodeSlash,BsUiChecksGrid,BsBriefcase} from "react-icons/bs";
import {IoLogoCss3} from "react-icons/io";
import {SiTailwindcss} from "react-icons/si";
import {DiJavascript} from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai";
import {FaLaptop,FaSass,FaBootstrap,FaReact,FaFigma} from 'react-icons/fa';
import SkillCard from '../../components/nav/SkillCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData=[
  {
    id:1,
    title:"Responsive Design",
    description:"Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing and typesetting industry.",
    icon:<BsVectorPen size={30} className='text-kayan' />
  },
  {
    id:2,
    title:"Clean Code",
    description:"Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing and typesetting industry.",
    icon:<BsCodeSlash size={30} className='text-kayan' />
  },
  {
    id:3,
    title:"Web Development",
    description:"Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing and typesetting industry.",
    icon:<FaLaptop size={30} className='text-kayan' />
  },
  {
    id:4,
    title:"User Friendly UI",
    description:"Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing and typesetting industry.",
    icon:<BsUiChecksGrid size={30} className='text-kayan' />
  },
  {
    id:5,
    title:"Freelance",
    description:"Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing and typesetting industry.",
    icon:<BsBriefcase size={30} className='text-kayan' />
  },
  {
    id:6,
    title:"Maintenance",
    description:"Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing and typesetting industry.",
    icon: <BsGear size={30} className='text-kayan' />
  },
];

const skillsData=[
  {
    id:1,
    title:"Html",
    icon: <AiFillHtml5 size={30} />
  },
  {
    id:2,
    title:"CSS",
    icon: <IoLogoCss3 size={30} />
  },
  {
    id:3,
    title:"JavaScript",
    icon: <DiJavascript size={30} />
  },
  {
    id:4,
    title:"SCSS",
    icon: <FaSass size={30} />
  },
  {
    id:5,
    title:"Bootstrap",
    icon: <FaBootstrap size={30} />
  },
  {
    id:6,
    title:"Tailwind",
    icon: <SiTailwindcss size={30} />
  },
  {
    id:7,
    title:"React Js",
    icon: <FaReact size={30} />
  },
  {
    id:8,
    title:"Figma",
    icon: <FaFigma size={30} />
  },
]

const Services = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='service flex flex-col justify-center' id='services'>
      <h3 className='sv_header font-semibold text-[20px] uppercase' data-aos="fade-right">Services</h3>
      <div className="mt-14 lg:mt-5">
        <h2 className='text-center font-semibold text-[20px] md:text-[25px] text-black uppercase' data-aos="zoom-in">What I Can Do</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6">
          {
            servicesData.map(data=>(
              <ServiceCard key={data.id} data={data}/>
            ))
          }
        </div>
      </div>
      <div className="mt-14 lg:mt-20">
        <h4 className='text-center uppercase text-[20px] md:text-[25px] font-semibold text-black' data-aos="zoom-in">Skills and Experience At</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {
            skillsData.map(data=>(
              <SkillCard key={data.id} data={data}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services