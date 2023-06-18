import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1571126817476-92bf7da319c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] bg-white p-6 rounded-lg bg-opacity-40 shadow-lg backdrop-blur-md flex flex-col items-center`}
      >
        <h1
          className={`text-[30px] leading-[1.2] text-center 800px:text-[40px] text-black font-[600] capitalize`}
        >
          Discover the Essence of EcommWeb <br /> Shop the Finest Selection{" "}
          <br /> at Ecomm Web
        </h1>
        <p className="w-[50%] pt-5 text-[16px] text-center font-[Poppins] font-[400] text-black">
          Feel free to modify it according to your preferences and branding.
          Remember, the H1 heading should convey the unique selling point or the
          overall theme of your website while being concise and
          attention-grabbing.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5 bg-[#C1ED64]`}>
            <span className="text-black font-semibold font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
