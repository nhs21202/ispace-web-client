import { MENU_LINK_TYPE, MenuListItem } from "@/utilities/types/menu.type";

const menus: MenuListItem[] = [
  {
    id: 1,
    title: "Giới thiệu",
    linkType: MENU_LINK_TYPE.PAGE,
    link: "/about",
    children: [
      {
        id: 11,
        title: "Tầm nhìn sứ mệnh",
        linkType: MENU_LINK_TYPE.SECTION,
        link: "/about#tam-nhin-su-menh",
      },
      {
        id: 12,
        title: "Lộ trình đào tạo",
        linkType: MENU_LINK_TYPE.SECTION,
        link: "/about#lo-trinh-dao-tao",
      },
      {
        id: 13,
        title: "Mục tiêu đào tạo",
        linkType: MENU_LINK_TYPE.SECTION,
        link: "/about#muc-tieu-dao-tao",
      },
      {
        id: 14,
        title: "Phương pháp giảng dạy",
        linkType: MENU_LINK_TYPE.SECTION,
        link: "/about#phuong-phap-giang-day",
      },
      {
        id: 15,
        title:"Cơ sở vật chất",
        linkType: MENU_LINK_TYPE.SECTION,
        link: "/about#co-so-vat-chat",
      },
      {
        id: 16,
        title: "Kiểm soát chất lượng",
        linkType: MENU_LINK_TYPE.SECTION,
        link: "/about#kiem-soat-chat-luong",
      },
      {
        id: 17,
        title: "Đội ngũ giáo viên",
        linkType: MENU_LINK_TYPE.SECTION,
        link: "/about#doi-ngu-giao-vien",
      },
    ],
  },
  {
    id: 2,
    title: "Khóa học",
    linkType: MENU_LINK_TYPE.PAGE,
    link: "/courses",
    children: [
      {
        id: 21,
        title: "Tiếng Anh Mầm Non",
        linkType: MENU_LINK_TYPE.PAGE,
        link: "/courses/english-kindergarten",
      },
      {
        id: 22,
        title: "Tiếng Anh Tiểu Học",
        linkType: MENU_LINK_TYPE.PAGE,
        link: "/courses/english-primary",
      },
      {
        id: 23,
        title: "Tiếng Anh Thiếu Niên",
        linkType: MENU_LINK_TYPE.PAGE,
        link: "/courses/english-teen",
      },
      {
        id: 24,
        title: "Luyện thi IELTS",
        linkType: MENU_LINK_TYPE.PAGE,
        link: "/courses/ielts-preparation",
      },
    ],
  },
  {
    id: 3,
    title: "Tin tức & Thư viện",
    linkType: MENU_LINK_TYPE.PAGE,
    link: "/news",
  },
  {
    id: 4,
    title: "Tuyển dụng",
    linkType: MENU_LINK_TYPE.PAGE,
    link: "/recruit",
  },
  {
    id: 5,
    title: "Liên hệ",
    linkType: MENU_LINK_TYPE.PAGE,
    link: "/contact",
  },
];

export default menus;
