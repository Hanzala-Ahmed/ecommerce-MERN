import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[30px] leading-[1.2] 800px:text-[40px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Discover the Essence of Elegance: <br /> Shop the Finest Selection{" "}
          <br /> at Ecomm Web
        </h1>
        <p className="w-[50%] pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Feel free to modify it according to your preferences and branding.
          Remember, the H1 heading should convey the unique selling point or the
          overall theme of your website while being concise and
          attention-grabbing.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
