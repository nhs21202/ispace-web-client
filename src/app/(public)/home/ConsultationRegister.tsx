import React from "react";
import FormRegister from "./FormRegister";
import Image from "next/image";

const ConsultationRegister = () => {
  return (
    <div className="bg-primary py-10 mb-20">
      <div className="container mx-auto flex w-full max-w-6xl items-center px-10 gap-10">
        {/* Hình ảnh */}
        <div className="w-1/2">
          <Image
            src="/images/register_form_image.png"
            width={400} // Tăng kích thước ảnh
            height={400}
            alt="Đăng ký tư vấn"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-1/2 rounded-lg bg-gray-100 p-6 border-6 border-gray-600">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default ConsultationRegister;
