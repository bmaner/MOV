import Head from "next/head";
import React from "react";

export default function Loading() {
  return (
    <>
      <Head>
        <title>loading</title>
      </Head>
      <div className="sticky top-0 -z-10 min-h-screen flex flex-col items-center justify-center">
        <video
          autoPlay
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="./MOVLoading.mp4" />
        </video>
      </div>
    </>
  );
}
