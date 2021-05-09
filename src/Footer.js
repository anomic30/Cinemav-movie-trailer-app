import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <p>
                Copyright &copy; Anom
            </p>
            <br/>
            <div class="icons">
                <a href="https://github.com/anomic30"><i class="fa fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/anomic/"><i class="fa fa-linkedin" ></i></a>
                <a href="https://www.instagram.com/codermav/"><i class="fa fa-instagram" ></i></a>
            </div>
            {/* <div className="con">
                All your favourite movies in one place!
            </div> */}
        </div>
    )
}

export default Footer;