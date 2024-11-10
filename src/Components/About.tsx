import '../style/hero.css'
import '../style/about.css'
import Image from "next/image"
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';




function About(){
    return (
        <div className="header-container">
        <div className="header-boxes-con">
            {/*left */}
            <div>
                <Image src={"/images/hero-image.png"}
                width={200}
                height={200}
                className="header-image"
                alt="profile"/>
                <div className='social-icon'>
                    
                <Link href={""}><FaYoutube className='s-icons'/></Link>
                <Link href={""}><FaFacebook className='s2-icons' /></Link>
                <Link href={""}><FaInstagram className='s3-icons' /></Link>
                </div>

            </div>
            <div className="hero-right-div">
                {/* right */}
                <h1 className="title-hero"> <br />
                    About Us <br /> </h1>
                <p className="des-hero">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt aliquam nisi ducimus. Minus reiciendis error placeat a corrupti exercitationem! Aut, expedita amet delectus officia, consequuntur doloremque itaque
                     pariatur quod quisquam quia commodi sequi perferendis nostrum odio ipsa provident similique?</p>
                     <button className="her-button"> Hire Me</button>
            </div>
        </div>
        </div>
    )
}
export default About;