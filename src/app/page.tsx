"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home"); // Điều hướng tự động sang trang /home
  }, [router]);

  return null; // Không có nội dung trên trang gốc
};

export default IndexPage;
