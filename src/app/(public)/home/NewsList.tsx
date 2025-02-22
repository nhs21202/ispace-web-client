import React from 'react'
import ComponentTitle from "@/components/ComponentTitle";
import CardHomeNews from '@/components/Cards/CardHomeNews'
import { newsData } from '@/mocks/news'
import ReadmoreButton from '@/components/ReadmoreButton'

const NewsList = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ComponentTitle title ="Tin tức & sự kiện"/>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2   lg:px-24 mt-5">
        {newsData.slice(0,4).map((news, index) => (
          <CardHomeNews
            key={index}
            imageUrl={news.imageUrl}
            title={news.title}
            overview={news.overview}
            slug = {news.slug}
          />
        ))}
      
      </div>
      <ReadmoreButton href="/news" title="Xem thêm" className="w-48"/>
    </div>
  )
}

export default NewsList