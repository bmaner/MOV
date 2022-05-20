import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styles from "../../styles/styles.module.css";
import { cls } from "../../libs/client/utils";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <div
        className={cls(
          styles.font_regular_500,
          router.pathname === "/wishbearland" ? "bg-[rgba(0,0,0,0.1)]" : "",
          "fixed top-0 left-0 z-20 flex items-center sm:items-start justify-between h-auto px-3 py-1 md:px-5 md:pt-4 w-[100vw]"
        )}
      >
        <Link href={"/"}>
          <div
            className={cls(
              router.pathname === "/"
                ? "md:text-[15vw] md:leading-[12vw]"
                : "text-[50px] md:leading-[50px]",
              `text-[50px] cursor-pointer flex`
            )}
          >
            <div
              className={cls("text-[rgba(242,242,242,0.1)] hidden sm:block")}
            >
              MOV
            </div>
            <div
              className={cls(
                "text-[rgba(242,242,242,0.5)] hidden sm:block",
                router.pathname === "/"
                  ? "-ml-[5px] md:-ml-[1.5rem]"
                  : "-ml-[5px]"
              )}
            >
              MOV
            </div>
            <div
              className={cls(
                "text-[rgba(242,242,242,1)]",
                router.pathname === "/"
                  ? "-ml-[5px] md:-ml-[1.5rem]"
                  : "-ml-[5px]"
              )}
            >
              MOV
            </div>
          </div>
        </Link>
        <Link href={"/contact"}>
          <a
            className={cls(
              styles.font_light_700,
              `transition text-[#f2f2f2] hover:text-[#ddba96] sm:mt-[0.85rem] md:mt-0`
            )}
          >
            <span className="uppercase">contact</span>
          </a>
        </Link>
      </div>
    </>
  );
}
