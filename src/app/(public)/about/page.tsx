"use client"
import BannerSlider from "@/components/BannerSlider";
import ComponentTitle from "@/components/ComponentTitle";
import React from "react";
import Image from "next/image";
import TeacherSlider from "./TeacherSlider";



const AboutPage = () => {
  return (
    <div className="text-base">
      <BannerSlider />
      <div className="container mx-auto my-10 px-3 xl:px-10">
        <div>
          <ComponentTitle title="ISPACE ENGLISH - CHÚNG TÔI LÀ AI?" />
          <p className="mt-5 text-base italic">
            Với bề dày kinh nghiệm trong lĩnh vực giảng dạy tiếng Anh chuyên
            sâu, iSpace English tự hào là đơn vị tiên phong đem đến những trải
            nghiệm học tập bậc nhất cho học sinh tại khu vực 03 Quận Nội đô: Tây
            Hồ, Ba Đình, Hoàn Kiếm - Hà Nội. Chúng tôi tin rằng với những nỗ lực
            không ngừng nghỉ nghiên cứu và phát triển chương trình học, iSpace
            English sẽ là hành trang, niềm tin, động lực và cảm hứng cho học
            sinh vượt qua bất kỳ thử thách, chinh phục điểm số môn tiếng Anh và
            các kỳ thi Anh ngữ Chuẩn Cambridge.
          </p>
        </div>
        <div className="mt-5" id="tam-nhin-su-menh">
          <ComponentTitle title="Tầm nhìn & sứ mệnh" />
          <div className="mt-5 flex flex-col items-center xl:flex-row xl:gap-72">
            <div className="w-full text-lg leading-relaxed xl:w-[40%]">
              <p className="text-justify">
                <span className="font-bold">SỨ MỆNH </span>đem đến cho các con
                một môi trường học tập thông minh, nơi bồi dưỡng TRÍ-LỰC toàn
                diện cho thế hệ trẻ.
              </p>
              <p className="mt-4 text-justify">
                <span className="font-bold">TẦM NHÌN </span>trở thành một trường
                học ngoại ngữ nơi mà tất cả học sinh cảm thấy được yêu thương,
                tôn trọng và được khích lệ để không ngừng tiến bước nâng cao
                chính mình và nuôi dưỡng tinh thần học tập trọn đời.
              </p>
            </div>

            <div className="w-2/3 lg:w-[30%]">
              <Image
                src="/images/skill.png"
                alt="Tầm nhìn & Sứ mệnh"
                width={120}
                height={120}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-10" id="lo-trinh-dao-tao">
          <ComponentTitle title="LỘ TRÌNH ĐÀO TẠO TOÀN DIỆN XUYÊN SUỐT" />
          <p className="mt-5 text-center italic">
            Lộ trình đào tạo của iSpace English đều được Ban nghiên cứu & phát
            triển chương trình (RnD) xây dựng dựa trên Quy chuẩn năng lực đầu ra
            theo Khung Tham Chiếu Chung Châu Âu Về Ngôn Ngữ{" "}
            <span className="font-bold"> (CEFR)</span> & tích hợp nội dung dạng
            bài thi chứng chỉ tiếng Anh Cambridge
            <span className="font-bold">
              {" "}
              (Cambridge English Language Assessment)
            </span>{" "}
            .
          </p>
          <Image
            src="/images/roadmap.png"
            alt="Lộ trình"
            width={500}
            height={500}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="mt-10" id="muc-tieu-dao-tao">
          <div className="mt-5 flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full text-lg leading-relaxed xl:w-1/2">
              <ComponentTitle title="Mục tiêu đào tạo tổng quan" />
              <p className="mt-5 text-justify">
                Chương trình giảng dạy tại iSpace English được xây dựng nhằm
                trang bị cho học sinh không những là năng lực giao tiếp tiếng
                Anh mà còn là những phẩm chất cốt lõi, kỹ năng thiết yếu của Thế
                kỷ đang dần toàn cầu hóa, chinh phục điểm số môn học và hòa nhập
                quốc tế.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Sử dụng tiếng Anh toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết.
                </li>
                <li>
                  Học tập tiến bộ, nâng cao điểm số môn tiếng Anh trên trường.
                </li>
                <li>
                  Sẵn sàng cho các kỳ thi Anh ngữ Chuẩn Quốc tế: Cambridge YLE,
                  KET, PET, IELTS, TOEFL.
                </li>
                <li>
                  Tự tin hòa nhập, giao tiếp, thuyết trình tiếng Anh trước đám
                  đông.
                </li>
                <li>
                  Đam mê đọc sách, thích thú học hỏi, khám phá, nâng cao tinh
                  thần &quot;học tập trọn đời&quot;.
                </li>
              </ul>
            </div>

            <div className="w-2/3 xl:w-1/2">
              <Image
                src="/images/target-section.png"
                alt="Tầm nhìn & Sứ mệnh"
                width={300}
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10" id="phuong-phap-giang-day">
          <div className="mt-5 flex flex-col items-center gap-12 xl:flex-row-reverse">
            <div className="w-full text-lg leading-relaxed xl:w-1/2">
              <ComponentTitle title="Phương pháp giảng dạy" />
              <div className="mt-5 text-justify">
                <p className="font-bold">
                  Mô hình đào tạo đa giác quan (Multi-Sensory Learning)
                </p>
                <p>
                  Tại iSpace English, học sinh sẽ không học thuộc lòng hay lặp
                  lại kiến thức ngôn ngữ một cách nhàm chán. Học viên được tiếp
                  xúc với ngôn ngữ bằng cả âm thanh, hình ảnh, lẫn vận động
                  khiến cho liên kết não bộ với từ ngữ trở nên mạnh mẽ, và nhờ
                  đó giúp các em ghi nhớ bài học lâu hơn, việc tiếp thu ngôn ngữ
                  trở nên tự nhiên, đồng thời giảm thiểu căng thẳng xuống mức
                  thấp nhất, việc học ngoại ngữ với các em sẽ không còn là áp
                  lực phải hoàn thành mỗi ngày.
                </p>
                <ol className="list-decimal pl-5">
                  <li>
                    <strong>iSpace Touch:</strong> Mô hình tương tác ứng dụng
                    Công nghệ với Bảng thông minh: Học viên có cơ hội trải
                    nghiệm các hoạt động trò chơi trí tuệ thú vị, hình ảnh minh
                    họa đẹp mắt, âm thanh sống động trên màn hình được thiết kế
                    độc quyền cho các bộ sách giáo trình, giúp học sinh phát âm
                    chuẩn, nhận diện mặt chữ, từ vựng dễ dàng hơn và hứng thú
                    với việc học luyện tập tiếng Anh.
                  </li>
                  <li>
                    <strong>Learning through Playing:</strong> Các trò chơi, bài
                    hát, hoạt động phản xạ thể chất được giáo viên thiết kế bài
                    giảng dựa trên ngữ cảnh thực tế. Học sinh được chơi trò chơi
                    đồng thời và bắt chước lại cấu trúc câu của người bản ngữ.
                    Mô hình học sinh chủ động vận động giúp tăng tốc độ tiếp
                    thu, cải thiện khả năng phản xạ, tư duy và tự tin sử dụng
                    tiếng Anh.
                  </li>
                  <li>
                    <strong>Bookworks:</strong> Song hành với các hoạt động trải
                    nghiệm, học viên được rèn luyện thêm thông qua các bài tập
                    thực hành, phiếu bài tập củng cố kiến thức. Đội ngũ Giáo
                    viên ngoại ngữ Chuyên viên đào tạo của iSpace sẽ giúp các bé
                    tổng hợp kiến thức cơ bản còn lặp, giảng giải, đào sâu kiến
                    thức dựa theo chương trình học đã tiếp nhận.
                  </li>
                </ol>
              </div>
            </div>

            <div className="w-2/3 xl:w-1/2">
              <Image
                src="/images/teaching-method.png"
                alt="Tầm nhìn & Sứ mệnh"
                width={300}
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-10" id="co-so-vat-chat">
          <div className="mt-5 flex flex-col items-center gap-12 xl:flex-row">
            <div className="w-full text-center text-lg leading-relaxed xl:w-1/2">
              <ComponentTitle title="HỆ THỐNG CƠ SỞ VẬT CHẤT TIÊU CHUẨN 5 SAO" />
              <div className="mt-5 text-justify">
                <p>
                  Các Cơ sở đào tạo của iSpace English được thiết kế theo chủ đề
                  Không gian vũ trụ & các hành tinh, giúp khơi gợi óc tò mò,
                  khám phá, chinh phục thử thách trong hành trình học tập thông
                  minh của <strong>“CÁC PHI HÀNH GIA ISPACE”</strong>
                </p>
                <p>
                  Phòng học hiện đại, đảm bảo môi trường học tập tốt cho các học
                  viên với các trang thiết bị như:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    {" "}
                    Tivi tương tác chạm thông minh – Interactive Smart TV
                  </li>
                  <li>
                    Phần mềm giảng dạy độc quyền, các công cụ kết nối internet,
                    giáo cụ dạy học, giúp học sinh hiểu nhanh và nắm bắt tốt với
                    tốc độ bài giảng.
                  </li>
                  <li>
                    Giáo trình & sách bài tập hiện đại dễ học, thông tin cao,
                    đến từ các Nhà xuất bản Giáo dục uy tín hàng đầu thế giới.
                  </li>
                  <li>
                    Thư viện sách với đa dạng các loại sách, truyện song ngữ làm
                    giàu vốn kiến thức nền và hiểu biết xã hội cho học viên.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-2/3 xl:w-1/2">
              <Image
                src="/images/facilities.png"
                alt="Tầm nhìn & Sứ mệnh"
                width={500}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-10" id="kiem-soat-chat-luong">
          <div className="mt-5 flex flex-col items-center gap-12 xl:flex-row-reverse">
            <div className="w-full text-center text-lg leading-relaxed xl:w-1/2">
              <ComponentTitle title="HỆ THỐNG ĐÁNH GIÁ & BAN QUẢN LÝ CHẤT LƯỢNG ĐÀO TẠO" />
              <div className="mt-5 text-justify">
                <p>
                  Sự tiến bộ của mỗi học sinh trong suốt quá trình học tập mà
                  mỗi quan tâm hàng đầu tại iSpace English, chính vì vậy, trong
                  chương trình học, các con học sinh sẽ được sát sao, quan tâm,
                  rèn dũa bởi Đội ngũ Giáo viên Nước ngoài, GV Việt Nam, Giáo
                  viên Trợ giảng và Chuyên viên phòng Đào tạo. Học viên sẽ được
                  kiểm tra, đánh giá mức độ tiến bộ thường xuyên thông qua các
                  bài kiểm tra định kỳ.
                </p>
                <p className="font-bold">
                  Hệ thống các bài kiểm tra xuyên suốt mỗi khóa học:
                </p>
                <ol className="list-decimal pl-5">
                  <li>
                    {" "}
                    Tivi tương tác chạm thông minh – Interactive Smart TV
                  </li>
                  <li>
                    Phần mềm giảng dạy độc quyền, các công cụ kết nối internet,
                    giáo cụ dạy học, giúp học sinh hiểu nhanh và nắm bắt tốt với
                    tốc độ bài giảng.
                  </li>
                  <li>
                    Giáo trình & sách bài tập hiện đại dễ học, thông tin cao,
                    đến từ các Nhà xuất bản Giáo dục uy tín hàng đầu thế giới.
                  </li>
                  <li>
                    Thư viện sách với đa dạng các loại sách, truyện song ngữ làm
                    giàu vốn kiến thức nền và hiểu biết xã hội cho học viên.
                  </li>
                </ol>
              </div>
            </div>

            <div className="w-2/3 xl:w-1/2">
              <Image
                src="/images/facilities.png"
                alt="Tầm nhìn & Sứ mệnh"
                width={500}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-10" id="lo-trinh-dao-tao">
          <ComponentTitle title="ĐỘI NGŨ GIÁO VIÊN BẢN NGỮ & VIỆT NAM GIÀU KINH NGHIỆM" />
          <p className="mt-5">
            Nhà sáng lập - Giám đốc điều hành của iSpace English cùng các Cộng
            sự là các giáo viên giàu kinh nghiệm, với năng lực giảng dạy xuất
            sắc đến từ Trường Đại học Ngoại ngữ, ĐH Quốc gia Hà Nội - Ngôi
            trường ĐH uy tín hàng đầu cả nước trong lĩnh vực giảng dạy tiếng
            Anh, giúp khẳng định chất lượng đào tạo vượt trội tại iSpace
            English.
          </p>
          <p className="my-5">
            Ngoài Đội ngũ Giáo viên Việt Nam, Giáo viên Bản ngữ tại iSpace
            English là những Thầy Cô đến từ các Quốc gia như Anh Quốc, Ireland,
            Úc, Mỹ và Nam Phi. Với trên 5 năm kinh nghiệm giảng dạy cho trẻ em
            Việt Nam, mỗi bài học dưới sự dẫn dắt hoạt động tài tình của các
            Thầy Cô như các bài hát, hoạt động thể chất, trò chơi vận động vui
            nhộn giúp khơi dậy khả năng tư duy, liên tưởng cho học viên từ đó
            giúp các em nắm vững và thành thạo kiến thức ngôn ngữ nhanh chóng.
          </p>
        <TeacherSlider/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
