import React from "react";
import FormRegister from "./FormRegister";

const ConsultationRegister = () => {
  return (
    <div
      className="relative mb-20 bg-cover bg-center py-10"
      style={{ backgroundImage: "url('images/form-bg.jpg')" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row w-full max-w-6xl items-stretch gap-0">
        {/* Nội dung giới thiệu */}
        <div className="md:w-5/12 w-full bg-primary p-8 text-white flex flex-col justify-center flex-1">
          <h2 className="mb-4 text-3xl font-bold">GET IN TOUCH</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <p className="mt-4 text-sm">
            Um quist, a seque et audae. Namus aut voloriae. Ecesti volupta
            sinihil maxim hit quis dicid ut dolorer spiscip suntium eveniet
            hicatibus, omnit dignam ulparis aut odit, et expero tectiossi acitis
            aribus dis cus soluptur a dolo incipis plam, expe enditatatur aut et
            volorpor aute repta non coreri dellaboratur acea praeritio blaut
            voluptio. Xerum quame re pe officae.
          </p>
        </div>

        {/* Form */}
        <div className="md:w-5/12 w-full border-6 border-gray-600 bg-gray-100 p-6 shadow-lg flex flex-col justify-center flex-1">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default ConsultationRegister;
