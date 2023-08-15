import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.png";
import book3 from "../assets/images/book3.png";
import plane from "../assets/images/plane.png";
import illustration from "../assets/images/illustration.png";
import element from "../assets/images/element.png";

const Booking = () => {

    return(
        <>
       <section>
         <div class="container-fluid wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
               <div class="row">
                  <div class="col-lg-4">
                     <div class="section-title pb-3 text-space">
                        <h5 class="fw-bold cat-text text-uppercase">Fast and Easy</h5>
                        <h1 class="mb-0" style={{fontFamily: "Volkhov", fontWeight: "700"}}>Get Your Favorite Resort Bookings</h1>
                     </div>
                     <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.6s">
                        <div class="d-flex align-items-center justify-content-center rounded icon-image">
                           <img src={book1} />
                        </div>
                        <div class="ps-4 text-space">
                           <h5 class="mb-2">Choose Destination</h5>
                           <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                     </div>
                     <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.6s">
                        <div class="d-flex align-items-center justify-content-center rounded icon-image">
                           <img src={book2} />
                        </div>
                        <div class="ps-4 text-space">
                           <h5 class="mb-2">Check Availability</h5>
                           <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                     </div>
                     <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.6s">
                        <div class="d-flex align-items-center justify-content-center rounded icon-image">
                           <img src={book3} />
                        </div>
                        <div class="ps-4 text-space">
                           <h5 class="mb-2">Let's Go</h5>
                           <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-8">
                     <div class="parent-relative">
                        <div class="child-absolute">
                           <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "300px", marginLeft: "400px", width: "100px", height: "auto"}} src={element} />
                           <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "-40px", marginLeft: "540px", width: "450px", height: "auto"}} src={plane} />
                           <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "-60px", marginLeft: "300px", width: "550px", height: "auto"}} src={illustration} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>       
        </>
    );
};

export default Booking;