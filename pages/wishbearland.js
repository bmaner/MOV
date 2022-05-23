import React from "react";
import dynamic from "next/dynamic";
import Frames from "../components/canvas/Frames";
import { Html, PointerLockControls } from "@react-three/drei";
import Wood from "../components/canvas/Wood";
import Plywood from "../components/canvas/Plywood";
import {
  centerSeperationWallData,
  transImagePaperData,
  wallData,
  wallPaperData,
} from "../libs/client/data";
import TransImagePaper from "../components/canvas/transImagePaper";
import Head from "next/head";
import useMounted from "../libs/client/useMounted";
import Loading from "../components/dom/Loading";
import MusicPlayer from "../components/dom/MusicPlayer";
import Ceil from "../components/canvas/Ceil";
import useStore from "../helpers/store";
import Modal from "../components/dom/Modal";
import LCanvas from "../components/layout/canvas";

const FloorCom = dynamic(() => import("../components/canvas/Floor"), {
  ssr: false,
});
const WallCom = dynamic(() => import("../components/canvas/Wall"), {
  ssr: false,
});
const MemoWallCom = dynamic(() => import("../components/canvas/Wall"), {
  ssr: false,
});
const Player2Com = dynamic(() => import("../components/canvas/Player2"), {
  ssr: false,
});
const TvCom = dynamic(() => import("../components/canvas/tv"), {
  ssr: false,
});
const CenterSeperationWallCom = dynamic(
  () => import("../components/canvas/centerSeperationWall"),
  {
    ssr: false,
  }
);
const SmallPartitionCom = dynamic(
  () => import("../components/canvas/smallPartition"),
  {
    ssr: false,
  }
);
const WallPaperCom = dynamic(() => import("../components/canvas/WallPaper"), {
  ssr: false,
});

const FlowerCom = dynamic(() => import("../components/canvas/Flower"), {
  ssr: false,
});

const ArchCom = dynamic(() => import("../components/canvas/Arch"), {
  ssr: false,
});

const StarsCom = dynamic(() => import("../components/canvas/Star"), {
  ssr: false,
});

const MirrorCom = dynamic(() => import("../components/canvas/Mirror"), {
  ssr: false,
});

const RunWishBearCom = dynamic(
  () => import("../components/canvas/WishbearSplineRun"),
  {
    ssr: false,
  }
);

const FlyWishBearCom = dynamic(
  () => import("../components/canvas/WishbearSplineFly"),
  {
    ssr: false,
  }
);

const EntranceTextCom = dynamic(
  () => import("../components/canvas/EntranceText"),
  {
    ssr: false,
  }
);

const PlusCom = dynamic(() => import("../components/canvas/Plus"), {
  ssr: false,
});

const PostcardsCom = dynamic(() => import("../components/canvas/Postcard"), {
  ssr: false,
});

const StickersCom = dynamic(() => import("../components/canvas/Sticker"), {
  ssr: false,
});

const PolaroidsCom = dynamic(() => import("../components/canvas/Polaroid"), {
  ssr: false,
});

const MessagesCom = dynamic(() => import("../components/canvas/Messages"));

const DOM = () => {
  const [addMessage, setAddMessage] = useStore((state) => [
    state.addMessage,
    state.setAddMessage,
  ]);
  const isMounted = useMounted();
  return (
    <div>
      {isMounted ? (
        <>
          <Head>
            <title>bearwishland</title>
          </Head>
          {/* <MusicPlayer /> */}
          <div className="absolute border-2 border-solid rounded-full top-[50%] left-[50%] w-[10px] h-[10px] translate-x-[-50%] translate-y-[-50%] border-[rgba(0,0,0,0.5)] z-20"></div>
          {addMessage ? <Modal /> : null}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const R3F = () => {
  return (
    <>
      <LCanvas>
        <MemoWallCom
          position={[0, 5.5, -20]}
          rotation={[0, 0, 0]}
          longer={true}
        />
        {wallData.map((el, idx) => {
          return (
            <WallCom
              position={el.position}
              rotation={el.rotation}
              longer={el.longer}
              key={idx}
            />
          );
        })}
        {centerSeperationWallData.map((el, idx) => {
          return (
            <CenterSeperationWallCom
              position={el.position}
              rotation={el.rotation}
              longer={el.longer}
              key={idx}
            />
          );
        })}
        {wallPaperData.map((el, idx) => {
          return (
            <WallPaperCom
              position={el.position}
              rotation={el.rotation}
              args={el.args}
              set1={el.set1}
              set2={el.set2}
              url={el.url}
              key={idx}
            />
          );
        })}
        {transImagePaperData.map((el, idx) => {
          return (
            <TransImagePaper
              position={el.position}
              rotation={el.rotation}
              args={el.args}
              url={el.url}
              key={idx}
            />
          );
        })}
        <FloorCom position={[0, 0.5, 0]} />
        <ambientLight intensity={0.25} />
        <pointLight
          castShadow={true}
          receiveShadow={true}
          intensity={0.4}
          position={[10, 10, 5]}
        />
        <pointLight
          castShadow={true}
          receiveShadow={true}
          intensity={0.5}
          position={[-6, 10, 11]}
        />
        <pointLight
          castShadow={true}
          receiveShadow={true}
          intensity={0.7}
          position={[-6, 10, -10]}
        />
        <pointLight
          castShadow={true}
          receiveShadow={true}
          intensity={0.7}
          position={[10, 10, -10]}
        />
        <Frames />
        <FlowerCom />
        <SmallPartitionCom
          position={[5, 5.5, 18]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Wood position={[5.5, 0.3, -15.95]} />
        <Plywood position={[10, 5.5, -19.48]} />
        <Player2Com position={[13, 3, 5]} />
        <PointerLockControls />
        <ArchCom />
        <StarsCom />
        <MirrorCom />
        <RunWishBearCom />
        <FlyWishBearCom />
        <EntranceTextCom />
        <Ceil />
        <PostcardsCom />
        <StickersCom />
        <PolaroidsCom />
        <Html
          position={[14, 5, -6]}
          rotation={[0, 0, 0]}
          transform
          sprite
          occlude
        >
          <div className="description">
            <span style={{ fontSize: "1.5em" }}>💡</span> 상품을 클릭하면 구매
            페이지로 넘어갑니다.
          </div>
        </Html>
        <Html
          position={[0, 9, -19.4]}
          rotation={[0, 0, 0]}
          transform
          sprite
          occlude
        >
          <div className="description">
            <span style={{ fontSize: "1.5em" }}>💡</span> +를 클릭해서 메세지를
            남겨주세요!
          </div>
        </Html>
        <Html
          position={[11, 3, 0.7]}
          rotation={[0, 0, 0]}
          transform
          sprite
          occlude
        >
          <div className="description">
            <span style={{ fontSize: "1.5em" }}>💡</span> <br />
            좌클릭 : 방향조절 활성화 <br />
            ESC 키 : 방향조절 취소, 마우스 활성화
            <br />
            W,A,S,D : 이동
          </div>
        </Html>
        <MessagesCom />
        <PlusCom />
      </LCanvas>
    </>
  );
};

const Admin = () => {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  );
};

export default Admin;
