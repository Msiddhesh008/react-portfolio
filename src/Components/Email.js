import React from "react";
import versatile from "../Images/Versatile.png";
import creative from "../Images/Creative.png";
import Analytical from "../Images/Analytical.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Email = () => {
  return (
    <div className="d-lg-none" id="email">
      <div className="slide-show mb-4">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <img className="cor-img" src={versatile} alt="versatile" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img className="cor-img" src={creative} alt="creative" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img className="cor-img" src={Analytical} alt="Analytical" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>

      <form className="form p-4 mb-3">
        <p className="lets-talk">Lets Talk</p>
        <input placeholder="Name" type="text" id="name" />
        <input placeholder="Mobile" type="tel" id="tel" />
        <textarea placeholder="Message" type="text" rows={5} id="name" />
        <button className="send-btn">Send</button>
      </form>

      <div className="metaRow mb-3" id="meta">
        <div className="col-2 socio p-2 fb ">
          <i class="bi bi-facebook"></i>
        </div>
        <div className="col-2 socio p-2 insta">
          <i class="bi bi-instagram"></i>
        </div>
        <div className="col-2 socio p-2 whatsapp">
          <i class="bi bi-whatsapp"></i>
        </div>
        <div className="col-2 socio p-2 git">
          <i class="bi bi-github"></i>
        </div>
        <div className="col-2 p-2 socio linkedin">
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Email;
