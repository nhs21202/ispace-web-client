import React from "react";
import Image from "next/image";
import ReadmoreButton from "@/components/ReadmoreButton";
import ComponentTitle from "./ComponentTitle";

const AboutUsComponent = () => {
  return (
    <div className="font-sans">
      <div>
        <ComponentTitle title ="GIỚI THIỆU VỀ ISPACE ENGLISH"/>
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
          <ReadmoreButton href="about" className="w-52 hover:w-56"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
