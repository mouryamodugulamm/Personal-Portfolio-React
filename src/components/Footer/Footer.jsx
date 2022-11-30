import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Link from "react-scroll/modules/components/Link";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mouryamodugulamm@gmail.com</span>
        <div className="f-icons">

          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} /> */}
         <a href="https://github.com/mouryamodugulamm" > <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
