"use client"
import { cn } from '@/utilities/helper/common.helper';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

type Props = {
  href: string;
  className?: string;
  title?: string;
};

const ReadmoreButton = ({ href, className, title }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative mt-10 flex items-center justify-start rounded-full bg-white border border-primary p-3 text-primary transition-all duration-300 hover:bg-primary hover:text-white",
        className
      )}
    >
      <span className="flex-grow px-3 text-base font-bold transition-all duration-500 ease-in-out transform group-hover:translate-x-5">
        {title || "Tìm hiểu thêm"}
      </span>
      <span className="absolute right-0 flex items-center justify-center rounded-full border border-primary bg-primary px-4 py-2 text-white transition-all duration-500 transform group-hover:-translate-x-36 group-hover:opacity-0">
        <HiOutlineArrowSmallRight size={30} />
      </span>
    </Link>
  );
};

export default ReadmoreButton;
