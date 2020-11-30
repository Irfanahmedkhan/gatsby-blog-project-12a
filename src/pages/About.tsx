import React from "react"


import Bio from "../components/bio"
import NavBar from '../components/Navbar'
import me from "../images/me.jpeg";

import { Image } from "react-bootstrap";
const style = require('./About.module.css');


interface Props {
data: any
}


const About = () => {
    
    return (
        <div className={style.AboutPage} >
            <NavBar />
            <div className={style.page}>

                <div className={style.LeftBar}>
                    <img
                        src={me}
                        width="200px"
                        alt="logo"
                    />
                </div>
                
                <div className={style.RightBar}>
                    <h4><strong>Irfan Ahmed</strong></h4>
                    <h6>Working as HSE Engineer in KSA - Madinah</h6>
                    <hr />
                    <h6><strong>My Coding Journey</strong></h6>

                    <p>I started my coding journey almost 6 month before with sir Zia bootCamp 2020, all thanx to sir Zia and other respected teachers for their precious time and guideline.
                    </p>
                    <a style={{color: "blue"}}>  <strong> HTML / CSS </strong>  ,  <strong> Javascript / TypeScript </strong>,  <strong> ReactJS / GatsbyJS </strong>,  <strong> Jamstack </strong>,  <strong> Netlify Build / Development </strong>,  <strong> FaunaDB Database </strong>,   <strong> REST API </strong>,  <strong> GraphQL  </strong>,  <strong> Material UI </strong>,  <strong> AntD Design </strong>,  <strong> BootStrap </strong>,  <strong> Redux ToolKit </strong>,  <strong> WEB Animation </strong>,  <strong> Formik / Yup </strong>, 
                    </a>
                 
                </div>
            </div>

            <footer>
                © {new Date().getFullYear()}, Built with
        {` `}
                <a href="https://www.gatsbyjs.com">Gatsby & Contectfull by : <strong>Irfan Ahmed</strong> </a>
            </footer>

        </div>
    )
}

export default About
