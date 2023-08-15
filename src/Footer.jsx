import { FaLinkedinIn, FaTwitter, FaInfinity, FaFacebookMessenger } from "react-icons/fa";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import logo from "../assets/images/logo_arrow.png";
import footerbg from "../assets/images/footer-bg.png";


const Footer = () => {

    return(
        <>
      <footer class="footer">
         <div class="container">
            <div class="row">
               <div class="col-lg-3">
                  <div class="column">
                     <div>
                        <h2 style={{fontFamily: "Volkhov", fontWeight: "600"}}>Travel</h2>
                        <img class="arrow-logo" src={logo} alt="logo" />
                        <p class="mt-3 mb-4" style={{color: "#757095"}}>Travel helps companies manage payments easily.</p>
                     </div>
                     <div class="d-flex mt-4">
                        <a class="social__link" href="#" style={{color: "#DF6951"}}><FaLinkedinIn></FaLinkedinIn></a>
                        <a class="social__link" href="#" style={{color: "#DF6951"}}><FaFacebookMessenger /></a>
                        <a class="social__link" href="#" style={{color: "#DF6951"}}><FaTwitter></FaTwitter></a>
                        <a class="social__link" href="#" style={{color: "#DF6951"}}><FaInfinity /></a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-2">
                  <div class="column">
                     <h4>Company</h4>
                     <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-2">
                  <div class="column">
                     <h4>Destination</h4>
                     <ul>
                        <li><a href="#">Maldives</a></li>
                        <li><a href="#">Los Angeles</a></li>
                        <li><a href="#">Las Vegas</a></li>
                        <li><a href="#">Toronto</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-5">
                  <div class="column">
                     <h4>Join Our Newsletter</h4>
                     <form action="">
                        <div class="input-group">
                        <input type="text" class="form-control border-white p-3" style={{background: "#EEEEFF"}} placeholder="Your Email" />
                        <button className="butt">Sign Up</button>
                        </div>
                     </form>
                     <p style={{color:"#181433", opacity: "50%", paddingTop: "10px"}}>* Will send you weekly updates for your better tour packages.</p>
                  </div>
               </div>
               <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", right: "0", maxWidth: "400px"}} src={footerbg} alt="" />			   
            </div>
			
         </div>
         <div class="divider"></div>
         <div class="copyright">
            Copyright &copy; Xpro 2022. All Rights Reserved.
         </div>
      </footer>
        </>
    );    
};  

export default Footer;