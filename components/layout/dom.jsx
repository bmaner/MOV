import { cls } from "../../libs/client/utils";
import { useEffect, useRef } from "react";
import Header from "../dom/Header";
import MenuManager from "../dom/MenuManager";
import useStore from "../../helpers/store";

const Dom = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    useStore.setState({ dom: ref });
  }, []);

  return (
    <div
      className={cls(
        `absolute top-0 left-0 z-10 w-screen h-screen overflow-x-hidden dom`
      )}
      ref={ref}
    >
      <MenuManager>
        <Header />
        {children}
      </MenuManager>
    </div>
  );
};

export default Dom;
