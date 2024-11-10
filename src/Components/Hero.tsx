import '../style/hero.css'
import Image from "next/image"

function Hero(){
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
            </div>
            <div className="hero-right-div">
                {/* right */}
                <h1 className="title-hero">I'm Naveerah <br />
                    Fronted-developer
                </h1>
                <p className="des-hero">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt aliquam nisi ducimus. Minus reiciendis error placeat a corrupti exercitationem! Aut, expedita amet delectus officia, consequuntur doloremque itaque
                     pariatur quod quisquam quia commodi sequi perferendis nostrum odio ipsa provident similique?</p>
                     <button className="her-button"> Hire Me</button>
            </div>
        </div>
        </div>
    )
}
export default Hero;