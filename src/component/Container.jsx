import { SideBar } from "./Sidebar/SideBar";
import { MainSection } from "./Main-section/MainSection";

import { useContext, useEffect, useRef } from "react";
export const Container = () => {
  return (
    <div className="flex dark:bg-[#343434]">
      <SideBar />
      <MainSection />
    </div>
  );
};
