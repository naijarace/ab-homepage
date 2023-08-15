import logo_arrow from "../assets/images/logo_arrow.png";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";


const Header = () => {
   
    return (
		<>
      <nav class="navbar navbar-expand-lg navbar-light mein-navbar mein-navbar-two fixed-top">
         <div class="container">
            <a href="" class="navbar-brand scroll-btn">
               <h2 style={{fontFamily: "Volkhov"}}>Travel</h2>
               <img class="arrow-logo" src={logo_arrow} alt="logo"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"  id="navbarSupportedContent">
               <ul class="navbar-nav">
                  <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                  <li class="nav-item dropdown">
                     <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                     <ul class="dropdown-menu m-0 menu-blur">
                        <li class="dropdown-item"><a href="#" class="nav-link">Honeymoon Packages</a></li>
                        <li class="dropdown-item"><a href="#" class="nav-link">Tours Packages</a></li>
                        <li class="dropdown-item"><a href="#" class="nav-link">Musical Event</a></li>
                        <li class="dropdown-item"><a href="#" class="nav-link">Build Packages</a></li>
                     </ul>
                  </li>
                  <li class="nav-item"><a href="#" class="nav-link">UpComing Packages</a></li>
               </ul>
            </div>
            <div>
               <a href="#" class="btn btn-primary py-2 px-4 ms-3">Get in Touch</a>
            </div>
         </div>
      </nav>

        </>
   );
};
export default Header;
