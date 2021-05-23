import React from "react";

function Footer(){
    return(
        <div className="section">
            <div className="new">

                        <ul className="lists">
                            <div className="iconn">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
</div>


                            <li>CONTACT US</li>
                            <li>SUPPORT</li>
                            <li>CAREERS</li>
                        </ul>
   
                        </div><hr></hr>
<div className="footer">
            <div className="col-md-2dot4 col-lg-2dot4">
                <ul className="list">
                <li className="head">Corporate</li>
                    <li>Company</li>
                    <li>Newsroom</li><li>Investors</li><li>Events and Webinars</li><li>Careers</li><li>Leadership</li><li>Corporate Responsibility</li>
                    <li>Certifications</li><li>Customer Success</li></ul>
            </div>
            <div className="col-md-2dot4 col-lg-2dot4">
              
                <ul className="list">
                <li className="head">Developers</li><li>Enterprise Platform and Apps</li>
                <li>Blackberry QNX Developer Network</li></ul></div>  

                <div className="col-md-2dot4 col-lg-2dot4">
                  
                    <ul className="list">
                    <li className="head">Blog</li><li>Blackberry ThreatVector Blog</li>
                    <li>Developers Blog</li>
                    <li>Help Blog</li></ul>
                </div>
                <div className="col-md-2dot4 col-lg-2dot4">
                   
                    <ul className="list">
                    <li className="head">Legal</li>
                        <li>Overview</li>
                    <li>Accessibility</li>
                    <li>Patents</li><li>Trademarks</li><li>Privacy Policy</li><li>UK Modern Slavery Act</li></ul>
                </div>

                <div className="col-md-2dot4 col-lg-2dot4">
                <ul className="list">
                    <li className="head">Languages</li>    
              <li  >   <select className="form"><option>English</option>
                   <option>Francais</option>
                   <option>Bahasa Indonesia</option>
                   <option>Deutsch</option><option>Portugues</option><option>Hindi</option></select> </li></ul>
                </div>
</div>

        </div>
    );
}

export default Footer;