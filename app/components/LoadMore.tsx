'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { fetchAnime } from '../action'
import AnimeCard from './AnimeCard'

let page = 2;

export type AnimeCard = JSX.Element;

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (inView)
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      })
  
  }, [data, inView])
  

  return (
    <>
      <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image 
            src='./spinner.svg' alt="spinner"
            width={56} height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  )
}

export default LoadMore