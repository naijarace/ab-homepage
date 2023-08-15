import { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import banner from "../assets/images/banner.png";
import curl from "../assets/images/curl.png";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import client7 from "../assets/images/client7.png";


const Banner = () => {

    return (
		<>
       <section>
         <div id="header-carousel" class="carousel slide carousel-fade align-items-right" data-bs-ride="carousel">
            <div class="carousel-inner align-items-right">
               <div class="carousel-item active">
                  <img class="w-100" src={banner} />
                  <div class="carousel-caption d-flex flex-column align-items-right justify-content-center">
                     <div class="p-3" style={{maxWidth: '900px'}}>
                        <div class="container-fluid facts py-5 pt-lg-0"  style={{marginBottom: "-70px"}}>
                           <div class="container py-5 pt-lg-0">
                              <div class="item-top">
                                 <img src={curl} />
                                 <h1 class="fw-bold">No matter where you’re <div style={{whiteSpace: "pre-line"}}></div> going to, we’ll take you<div style={{whiteSpace: "pre-line"}}></div> there</h1>
                              </div>
                              <div class="row gx-0">
                                 <div class="container-style">
                                    <div class="item">
                                       Where to?
                                    </div>
                                    <div class="item dropdown dropdown-toggle">
                                       Travel Type
                                       <div class="dropdown-content">
                                          <a href="#">Option 1</a>
                                       </div>
                                    </div>
                                    <div class="last-item dropdown dropdown-toggle">
                                       Duration
                                       <div class="dropdown-content">
                                          <a href="#">Option A</a>
                                       </div>
                                    </div>
                                    <div class="item">
                                       <a href="#" class="btn btn-primary py-2 px-4 ms-3">Submit</a>
                                    </div>
                                 </div>
                                 <div class="client-image">
                                    <img src={client1} alt="client 1" />
                                    <img src={client2} alt="client 2" />
                                    <img src={client3} alt="client 3" />
                                    <img src={client4} alt="client 4" />
                                    <img src={client5} alt="client 5" />
                                    <img src={client6} alt="client 6" />
                                    <img src={client7} alt="client 7" />
                                 </div>
                                 <div class="client-text">
                                    <p>2,500 people booked Tommorowland Event in last 24 hours</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="ellipse-big"></div>
                     <div class="ellipse-small scroll-text">
                        <p>Scroll</p>
                     </div>
                     <div class="slider-indicators">
                        <div class="indicator"></div>
                        <div class="indicator active"></div>
                        <div class="indicator"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>       
        </>
   );
};
export default Banner;        