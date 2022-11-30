import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Airbnb from "../../img/airbnb.png";
import Predifast from "../../img/predifast1.png";
import Acertus from "../../img/Acertus_1.png";
import Fiverr from "../../img/fiverr.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
           These are some of my amazing clients I worked / working  for.
            <br />
           Most of them a I worked are for front end.
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
           <a href="https://www.upwork.com/"> <img src={Upwork} alt="" /></a>
          </div>
          <div className="w-secCircle">
           <a href="https://www.airbnb.co.in/"> <img src={Airbnb} alt="" /></a> 
          </div>
          <div className="w-secCircle">
            <a href="http://predifast.com/"><img src={Predifast} alt="" /></a>
          </div>
          <div className="w-secCircle">
           <a href="https://acertusdelivers.com/">  <img src={Acertus} alt="" /></a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.fiverr.com/"><img src={Fiverr} alt="" /></a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
