import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image0 from "../assets/images/image0.png";
import background from "../assets/images/background.png";

const Honeymoon = () => {

    return(
        <>
      <section>
         <div class="container-fluid wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-lg-6">
                     <div style={{paddingLeft: "100px"}}>
                        <div class="">
                           <p class="vertical-title">Honeymoon Packages</p>
                        </div>
                        <div class="parent-relative">
                           <div class="child-absolute">
                              <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "160px", marginLeft: "300px", width: "100px", height: "auto"}} src={background} alt="" />										
                              <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "-290px", marginLeft: "15px", width: "340px", height: "auto"}} src={image3} alt="" />										
                              <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "-286px", borderRadius: "376px 376px 0px 0px", width: "345px", height: "auto"}} src={image4} alt="" />
                              <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "-290px", marginLeft: "-30px", width: "130px", height: "auto"}} src={image2} alt="" />
                              <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "-320px", marginLeft: "60px", width: "140px", height: "auto"}} src={image1} alt="" />
                              <img class="wow zoomIn" data-wow-delay="0.9s" style={{position: "absolute", marginTop: "-130px", marginLeft: "-150px", width: "180px", height: "auto"}} src={image0} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="section-title">
                        <h5 class="fw-bold cat-text text-uppercase">Honeymoon Specials</h5>
                        <h1 class="mb-0" style={{fontFamily: "Volkhov", fontWeight: "700"}}>Our Romantic Tropical<div style={{whiteSpace: "pre-line"}}></div> Destinations</h1>
                     </div>
                     <p class="mb-4">Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                     <a href="#" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">View Packages</a>
                  </div>
               </div>
            </div>
         </div>
      </section>

        </>
    );
};

export default Honeymoon;