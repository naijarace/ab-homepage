import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";


const Banner = () => {

    return (
        <>
      <section>
         <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5">
               <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                  <h5 class="fw-bold cat-text text-uppercase">CATEGORY</h5>
                  <h1 class="mb-0" style={{fontFamily: "Volkhov", fontWeight: "700"}}>We Offer Best Services</h1>
               </div>
               <div class="row">
                  <div class="col-lg-3 wow zoomIn" data-wow-delay="0.3s">
                     <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                           <img src={icon1} />
                        </div>
                        <h4 class="mb-3">Guided Tours</h4>
                        <p class="m-0">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                        <div class="sub-div"></div>
                     </div>
                  </div>
                  <div class="col-lg-3 wow zoomIn" data-wow-delay="0.6s">
                     <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                           <img src={icon2} />
                        </div>
                        <h4 class="mb-3">Best Flights Options</h4>
                        <p class="m-0">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                        <div class="sub-div"></div>
                     </div>
                  </div>
                  <div class="col-lg-3 wow zoomIn" data-wow-delay="0.9s">
                     <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                           <img src={icon3} />
                        </div>
                        <h4 class="mb-3">Religious Tours</h4>
                        <p class="m-0">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                        <div class="sub-div"></div>
                     </div>
                  </div>
                  <div class="col-lg-3 wow zoomIn" data-wow-delay="0.9s">
                     <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                           <img src={icon4} />
                        </div>
                        <h4 class="mb-3">Medical Insurance</h4>
                        <p class="m-0">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                        <div class="sub-div"></div>
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