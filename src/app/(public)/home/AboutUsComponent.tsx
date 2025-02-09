  import React from "react";
  import Image from "next/image";
  import { HiOutlineArrowSmallRight } from "react-icons/hi2";
  import Link from "next/link";

  const AboutUsComponent = () => {
    return (
      <div className="font-sans">
        <div>
          <h1 className="flex items-center justify-center font-sans text-3xl font-bold uppercase text-primary">
            GIỚI THIỆU VỀ ISPACE ENGLISH
          </h1>
          <p className="mt-3 text-base italic">
            Với bề dày kinh nghiệm trong lĩnh vực giảng dạy tiếng Anh chuyên sâu,
            iSpace English tự hào là đơn vị tiên phong đem đến những trải nghiệm
            học tập bậc nhất cho học sinh tại khu vực 03 Quận Nội đô: Tây Hồ, Ba
            Đình, Hoàn Kiếm - Hà Nội. Chúng tôi tin rằng với những nỗ lực không
            ngừng nghỉ nghiên cứu và phát triển chương trình học, iSpace English
            sẽ là hành trang, niềm tin, động lực và cảm hứng cho học sinh vượt qua
            bất kỳ thử thách, chinh phục điểm số môn tiếng Anh và các kỳ thi Anh
            ngữ chuẩn Cambridge
          </p>
        </div>
        <div className="mt-5 flex justify-center gap-10">
          <Image
            width={500}
            height={500}
            src="/images/about-us.png"
            alt="Image"
            className="h-96 w-1/2"
          />
          <div>
            <h2 className="text-2xl font-bold uppercase text-primary">
              Hệ thống bài kiểm tra & Ban quản lý chất lượng đào tạo
            </h2>
            <ul className="mt-3 flex list-inside list-disc flex-col gap-4 text-base font-semibold text-primary">
              <li>Kiểm tra Năng lực tiếng Anh đầu vào - Placement test</li>
              <li>Kiểm tra Giữa kỳ, Cuối kỳ - Midterm & Final test</li>
              <li>Ôn tập unit - Unit review & Check-point</li>
              <li>Bài tập Dự án thuyết trình - Project Tasks</li>
              <li>
                Hội đồng GV phụ trách chất lượng đào tạo mỗi học viên: GV bản ngữ,
                GV Việt Nam, GV Chủ nhiệm & GV Trợ giảng
              </li>
            </ul>
            <Link
              href="/about"
              className="group relative mt-10 flex w-52 items-center justify-start rounded-full bg-primary p-3 text-white transition-all duration-300 ease-in-out hover:w-56"
            >
              <span className="flex-grow transform px-3 text-base font-bold transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:text-white">
                Tìm hiểu thêm
              </span>
              <span className="absolute right-0 flex items-center justify-center rounded-full border border-white bg-red-500 px-4 py-2 transition-all duration-300 ease-in-out group-hover:translate-x-8 group-hover:opacity-0 group-hover:text-white">
                <HiOutlineArrowSmallRight size={30} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default AboutUsComponent;
