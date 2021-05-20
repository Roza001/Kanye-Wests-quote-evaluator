import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './css/Footer.css'

function Footer() {
    return (
        <div className="footer flex-row">
            <h5>by Rozalia Korycka</h5>
            <a className="button hover" href="https://www.linkedin.com/in/rozalia-korycka-353633142/" target="_none">
                <i className="fa fa-2x fa-linkedin w3-hover-opacity"></i>
            </a>

            <a className="button hover" href="https://github.com/Roza001" target="_none">
                <i className="fa fa-2x fa-github"></i>
            </a>
        </div>
    );
}

export default Footer;