import React from "react"


import NavBar from '../components/Navbar'

const style = require('./About.module.css');


interface Props {
data: any
}


const About = () => {
    
    return (
        <div className={style.AboutPage} >
            <NavBar />
            <div className={style.page}>

                <div className={style.RightBar}>
                    <h4><strong>Irfan Ahmed</strong></h4>
                    <hr />
                
                    <h6><strong>My Skills are : </strong></h6>

                    <br/>
                    <h6>whatsup : </h6>
                    <a href="https://github.com/Irfanahmedkhan">GitHUB</a>

                 
                </div>
            </div>

            <footer>
                © {new Date().getFullYear()}, Built with
        {` `}
                <a href="https://github.com/Irfanahmedkhan">Gatsby & Contectfull by : <strong>Irfan Ahmed</strong> </a>
            </footer>

        </div>
    )
}

export default About
