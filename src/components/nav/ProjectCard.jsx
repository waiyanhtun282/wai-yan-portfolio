import React from 'react';

const ProjectCard = ({data}) => {
  return (
    <div className='' data-aos="zoom-in">
        <div className="relative overflow-hidden group shadow-md hover:shadow-xl">
          {
            data.image
          }
        </div>
        <div className="flex justify-between relative px-1">
            <p className='mt-2 text-[18px]'>{data.title}</p>
            <div className="">
            <a href={data.git} className='py-2 px-2 mr-2 bg-[#555] text-white rounded-[8px] hover:shadow-lg'>Code</a>
            <a href={data.url} className='py-2 px-2 bg-kayan text-white rounded-[8px] hover:shadow-lg'>Demo</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;