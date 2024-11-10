import "../style/services.css"
// Services.tsx (example of default export)
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { GrTestDesktop } from "react-icons/gr";
import { PiGraphicsCardBold } from "react-icons/pi";
import { FaCameraRetro } from "react-icons/fa6";
import { CiApple } from "react-icons/ci";

import React from 'react'

const Services = () => {
  return (
   <main className="main">
    <div className="ser-container">
      {/*top div */}
      <div className="top-div-ser">
        <h2 className="title-ser">My services</h2>
        <p className="des-ser">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam 
          doloremque maiores porro amet vel dolore reiciendis impedit aperiam veritatis. Blanditiis.</p>
      </div>
      {/*buttom div */}
      <div className="boxes-con">
        <div className="box">
        <FaLaptopCode className="services-icon"/>
        <h3>Web Developer</h3>
        <span>Blog, E Commerce</span>
        </div>
        <div className="box">
        <GiSoundOn className="services-icon"/>
        <h3>Web Developer</h3>
        <span>Blog, E Commerce</span>
        </div>
        <div className="box">
        <GrTestDesktop className="services-icon"/>
        <h3>UI/UX Design</h3>
        <span>Blog, E Commerce</span>
        </div>
        <div className="box">
        <PiGraphicsCardBold className="services-icon"/>
        <h3>Graphic Design</h3>
        <span>Blog, E Commerce</span>
        </div>
        <div className="box">
        <FaCameraRetro className="services-icon"/>
        <h3>Photography</h3>
        <span>Blog, E Commerce</span>
        </div>
        <div className="box">
        <CiApple className="services-icon"/>
        <h3>App Development</h3>
        <span>Blog, E Commerce</span>
        </div>
        

        
      </div>
    </div>
   </main>
  )
}

export default Services
