import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  title: string;
  overview: string;
  slug: string;
};
const CardHomeNews = (props: Props) => {
  const { imageUrl, title, overview, slug } = props;
  return (
    <Link href={`/news/${slug}`}>
      <div className="group flex items-center overflow-hidden rounded-2xl border border-primary bg-white p-4 transition duration-200 ease-in-out hover:-translate-y-4 hover:bg-primary hover:shadow-xl">
        <div className="w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            className="h-full w-full rounded-lg object-cover"
            width={200}
            height={200}
          />
        </div>
        <div className="w-2/3 pl-4">
          <h2 className="text-lg font-semibold text-primary group-hover:text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-500 group-hover:text-white">
            {new Date().toLocaleDateString()}
          </p>
          <p className="mt-1 text-sm text-gray-700 group-hover:text-white">
            {overview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardHomeNews;
