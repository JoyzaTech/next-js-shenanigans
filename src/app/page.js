'use client'; // This makes the component a client-side component

import { useState } from 'react';
import Image from 'next/image';
import Loading from './loading.js';

export default function Page() {
  const [isLoadingFirst, setIsLoadingFirst] = useState(true);
  const [isLoadingSecond, setIsLoadingSecond] = useState(true);
  const [isLoadingThird, setIsLoadingThird] = useState(true);

  const handleImageLoad = (setIsLoading) => {
    setIsLoading(false); 
  };

  return (
    <div>
      <h1>Fetched Image</h1>

      {isLoadingFirst && <Loading />}
      <Image 
        src="https://res.cloudinary.com/dripkr7ll/image/upload/v1740084048/next-js-shenangians/qrsirge4arpwwwmyebim.webp"
        alt="I use arch btw"
        width={500}
        height={300}
        onLoadingComplete={() => handleImageLoad(setIsLoadingFirst)}
      />

      {isLoadingSecond && <Loading />}
      <Image 
        src="https://res.cloudinary.com/dripkr7ll/image/upload/v1731016038/full-cloud-tasks/Screenshot%202024-10-15%20at%201.40.51%C3%A2%C2%80%C2%AFPM.png.png"
        alt="Freedom"
        width={500}
        height={300}
        onLoadingComplete={() => handleImageLoad(setIsLoadingSecond)}
      />

      {isLoadingThird && <Loading />}
      <div style={{ textAlign: 'center' }}>
        <h1>Ultra HD Image</h1>
        <Image
          src="https://res.cloudinary.com/dripkr7ll/image/upload/v1740084890/next-js-shenangians/js2vtozua5icvqerfic4.jpg"
          alt="Why are you using this wallpaper? It's higher quality than your monitor."
          width={4000}
          height={2500}
          priority={true}
          onLoadingComplete={() => handleImageLoad(setIsLoadingThird)}
        />
      </div>
    </div>
  );
}