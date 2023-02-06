import React, { useEffect } from 'react';
import dashboardImg from "../../assets/imgs/student-dashboard.png";
import fiberImg from "../../assets/imgs/fiber-starter.png";
import deliveryImg from "../../assets/imgs/food-website.png";
import shoppingImg from "../../assets/imgs/mms-mini-shopping.png";
import putuuImg from "../../assets/imgs/putuu-website.png";
import easyImg from "../../assets/imgs/easybank-website.png";
import ProjectCard from '../../components/nav/ProjectCard';
import "./project.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData=[
  {
    id:1,
    title:"Student Dashboard",
    image: <img src={dashboardImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'/>,
    url: "https://swd-login-dashboard.netlify.app/",
    git: "https://github.com/MgHtetMyatAung/swd-dashboard-pj-with-login-page.git"
  },
  {
    id:2,
    title:"Fiber Starter Website",
    image: <img src={fiberImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'/>,
    url:"https://fiber-starter-pj.netlify.app/",
    git:"https://github.com/MgHtetMyatAung/fiber-starter.git"
  },
  {
    id:3,
    title:"Foodie Website",
    image: <img src={deliveryImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'/>,
    url:"https://foodie-swd.netlify.app/",
    git:"https://github.com/MgHtetMyatAung/foodie-project.git"
  },
  {
    id:4,
    title:"Mini Shopping",
    image: <img src={shoppingImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'/>,
    url:"https://swd-redux-mini-shopping.netlify.app/",
    git:"https://github.com/MgHtetMyatAung/redux-shopping-pj.git"
  },
  {
    id:5,
    title:"PuTuu Website",
    image: <img src={putuuImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'/>,
    url:"https://pu-tuu-notes.netlify.app/",
    git:"https://github.com/MgHtetMyatAung/pu-tuu-notes.git"
  },
  {
    id:6,
    title:"EasyBank Website",
    image: <img src={easyImg} alt="" className='w-100 shadow-lg h-auto rounded-[8px]'/>,
    url:"https://page-of-easybank.netlify.app/",
    git:"https://github.com/MgHtetMyatAung/easybank-landing-page.git"
  }
];

const Projects = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className='project' id='projects'>
      <h3 className='pj_header uppercase' data-aos="fade-right">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-12">
        {
          projectsData.map(data=>(
            <ProjectCard key={data.id} data={data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;