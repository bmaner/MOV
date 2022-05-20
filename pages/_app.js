import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/dom/config";
import Dom from "../components/layout/dom";
import partition from "../helpers/partition";
import dynamic from "next/dynamic";
import useStore from "../helpers/store";
import "../styles/globals.css";

const LCanvas = dynamic(() => import("../components/layout/canvas"), {
  ssr: false,
});

const Balance = ({ child }) => {
  const [r3f, dom] = partition(child, (c) => c.props.r3f === true);

  return (
    <>
      <Dom>{dom}</Dom>
      <LCanvas>{r3f}</LCanvas>
    </>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    useStore.setState({ router });
  }, [router]);

  return (
    <>
      <Header />
      <Dom>
        <Component {...pageProps} />
      </Dom>
    </>
  );
}

export default MyApp;
