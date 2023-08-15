import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";
import partner5 from "../assets/images/partner5.png";


const Partners = () => {

    return (
		<>
       <section class="partner-section">
         <div class="partner-logo"><img src={partner5} alt="Partner 5" /></div>
         <div class="partner-logo"><img src={partner4} alt="Partner 4" /></div>
         <div class="partner-logo"><img src={partner3} alt="Partner 3" /></div>
         <div class="partner-logo"><img src={partner2} alt="Partner 2" /></div>
         <div class="partner-logo"><img src={partner1} alt="Partner 1" /></div>
      </section>
       
        </>
   );
};
export default Partners;           