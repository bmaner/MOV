import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { cls } from "../libs/client/utils";
import Loading from "../components/dom/Loading";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import useMounted from "../libs/client/useMounted";
import LCanvas from "../components/layout/canvas";

const WishBearsCom = dynamic(
  () => import("../components/canvas/landingCanvas"),
  {
    ssr: false,
  }
);

const DOM = () => {
  const isMounted = useMounted();

  return (
    <>
      {isMounted ? (
        <>
          <Head>
            <title>home</title>
          </Head>
          <div className="fixed z-10 flex flex-col items-center justify-center overflow-hidden w-[100vw] h-[100vh]">
            <Link href={"/wishbearland"}>
              <a
                className={cls(
                  // 'sm:bottom-[35%] sm:left-4  sm:absolute',
                  " bg-[#f2f2f2] hover:bg-[#ddba96] border-[#ddba96] hover:border-[#f2f2f2] border w-[160px] md:[420px] h-[80px] md:h-[100px] transition-all text-[#ddba96] hover:text-[#f2f2f2] flex justify-center items-center cursor-pointer text-center text-lg md:text-2xl animate-pulse hover:animate-none",
                  styles.polygon
                )}
              >
                ENTER
                <br />
                WISHBEARLAND
              </a>
            </Link>
            <div
              className={cls(
                styles.font_regular_300,
                "absolute bottom-4 md:bottom-8 left-3 md:left-5 text-xs uppercase text-[#f2f2f2] select-none"
              )}
            >
              <div>EST.2022</div>
              <div>Museum</div>
              <div>Of</div>
              <div>Virtual</div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

// canvas components goes here
const R3F = () => {
  const isMounted = useMounted();
  return (
    <>
      {isMounted ? (
        <LCanvas>
          <WishBearsCom />
        </LCanvas>
      ) : null}
    </>
  );
};

const Page = () => {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  );
};

export default Page;
