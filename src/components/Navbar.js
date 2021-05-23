import React, {useState} from "react";
import '../App.css';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar(){
    const [showLinks, setShowLinks] = useState(false);
    return(
        <div className="title">
        <div className="Navbar">
            <div className="leftside">
            <a className="dif" href="#" ><i class="fab fa-blackberry"></i>Blackberry</a>

                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="#">PRODUCTS</a> 
                  
                    <a href="#">SOLUTIONS</a>
                    <a href="#">SERVICES</a>
                    <a href="#">INDUSTRIES</a>
                    <a href="#">PARTNERS</a>
                    <a href="#">SUPPORT</a>
                    <a href="#">BLOG</a>
                    <i className="search" class="fas fa-search"></i>




                </div>
               
            </div>
            <div className="rightside">
            <button onClick={()=> setShowLinks(!showLinks) }>
                    {""}
                    <ReorderIcon />
                </button>


            </div>
           
        </div>
        <div className="top">
          <h1 >Everyone is working at home.<br></br>Including Cyberattackers</h1>  
          <p>The The recent SolarWinds security attack proves that remote workers and unsecured endpoints leave businesses exposed. Protection is not enough. Our AI-driven security doesn’t react to cyberthreats—it prevents them. If you believe you’ve had a breach, our BlackBerry® Security Services Incident Response experts can help.</p>
        <button className="cantact">Contact Sales</button>
        </div>
        </div>
    )
}


export default Navbar;