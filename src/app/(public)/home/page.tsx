
import BannerSlider from "@/components/BannerSlider";
import React from "react";
import AboutUsComponent from "./AboutUsComponent";


const HomePage = () => {
  return (
    <div>
      <BannerSlider />
      <div className = "container mx-auto px-4 my-10 flex flex-col gap-10">
      <AboutUsComponent/>

      </div>
    </div>
  );
};

export default HomePage;
