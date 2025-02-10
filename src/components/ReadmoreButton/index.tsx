"use client"
import { cn } from '@/utilities/helper/common.helper';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

type Props = {
  href: string;
  className?: string;
  title?:string;
};

const ReadmoreButton = ({ href, className, title }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative mt-10 flex items-center justify-start rounded-full bg-primary p-3 text-white transition-all duration-300 ease-in-out",
        className
      )}
    >
      <span className="flex-grow transform px-3 text-base font-bold transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:text-white">
        {title || "Tìm hiểu thêm"}
      </span>
      <span className="absolute right-0 flex items-center justify-center rounded-full border border-white bg-red-500 px-4 py-2 transition-all duration-300 ease-in-out group-hover:translate-x-8 group-hover:opacity-0 group-hover:text-white">
        <HiOutlineArrowSmallRight size={30} />
      </span>
    </Link>
  );
};

export default ReadmoreButton;
