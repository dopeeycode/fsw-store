import Image, { ImageProps } from 'next/image'
import React from 'react'

interface BannerProps extends ImageProps {
  src: 'banner-home-01.png' | 'banner-home-02.png' | 'banner-home-03.png'
}

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <Image
      src={`/images/${src}`}
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
    />
  )
}

export default Banner
