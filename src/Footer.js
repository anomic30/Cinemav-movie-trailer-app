import React from 'react'
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <p>
                Copyright &copy; Anom
            </p>
            <br/>
            <div class="icons">
                <a href="https://github.com/anomic30"><FaGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/anomic/"><FaLinkedin className="icon"/></a>
            </div>
            {/* <div className="con">
                All your favourite movies in one place!
            </div> */}
        </div>
    )
}

export default Footer;