
import BannerSlider from "@/components/BannerSlider";
import React from "react";
import AboutUsComponent from "./AboutUsComponent";
import CourseCarousel from "./CourseCarousel";
import ConsultationRegister from "./ConsultationRegister";
import TeacherCarousel from "./TeacherCarousel";
import VideoList from "./VideoList";
import NewsList from "./NewsList"

const HomePage = () => {
  return (
    <div>
      <BannerSlider />
      <div className = "container mx-auto px-4 my-10 flex flex-col gap-10">
      <AboutUsComponent/>
      <CourseCarousel/>

      </div>
      <ConsultationRegister/>
      <div className="container mx-auto px-4 my-10 flex flex-col gap-10">
        <TeacherCarousel/>
      </div>
      <VideoList/>
      <div className="container mx-auto px-4 mb-10 flex flex-col gap-10">
        <NewsList/>
      </div>
    </div>
  );
};

export default HomePage;
