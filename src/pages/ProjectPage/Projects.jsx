import React, { useEffect } from 'react';
import juiceImg from "../../assets/imgs/juice.png";
import businessImg from "../../assets/imgs/business.png";
import shoppingImg from "../../assets/imgs/mms-mini-shopping.png";
import movieImg from "../../assets/imgs/movie.png";
import blogImg from "../../assets/imgs/blog.png";
import tealtalkImg from "../../assets/imgs/teatalk.png";
import ProjectCard from '../../components/nav/ProjectCard';
import foodmarketimg from '../../assets/imgs/foodmarket.png';
import backendimg from '../../assets/imgs/backend.png'
import "./project.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData = [
  {
    id: 1,
    title: "Juice Shopping",
    image: (
      <img
        src={juiceImg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://juice-shopping-gamma.vercel.app/",
    git: "https://github.com/waiyanhtun282/JuiceShopping",
  },
  {
    id: 2,
    title: " Business Website",
    image: (
      <img
        src={businessImg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://business-profilo.vercel.app/",
    git: "https://github.com/waiyanhtun282/BusinessProfilo",
  },
  {
    id: 3,
    title: "Movie Website",
    image: (
      <img
        src={movieImg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://movie-pj-development.vercel.app/",
    git: "https://github.com/waiyanhtun282/MoviePj",
  },
  {
    id: 4,
    title: "Mini Shopping (Collaboration) ",
    image: (
      <img
        src={shoppingImg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://swd-redux-mini-shopping.netlify.app/",
    git: "https://github.com/waiyanhtun282/EcomerceMIniSHop",
  },
  {
    id: 5,
    title: "Blog Website",
    image: (
      <img
        src={blogImg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://blogin-figma.vercel.app/",
    git: "https://github.com/waiyanhtun282/bloginFigma",
  },
  {
    id: 6,
    title: "Collaboration with Tealtalk Chat App ",
    image: (
      <img
        src={tealtalkImg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://teatalk.io/",
    git: "",
  },
  {
    id: 7,
    title: "Collaboration with Ecommerce  App ",
    image: (
      <img
        src={foodmarketimg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://food-delivery-admin-dashboard.vercel.app/",
    git: "",
  },
  {
    id: 8,
    title: "Backend Ecommerce APi ",
    image: (
      <img
        src={backendimg}
        alt=""
        className="w-100 shadow-lg h-auto rounded-[8px]"
      />
    ),
    url: "https://food-delivery-admin-dashboard.vercel.app/",
    git: "https://github.com/waiyanhtun282/ecommerceProject",
  },
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