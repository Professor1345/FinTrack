"use client";

import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import SideNavLeft from "./SIdeNavLeft";
// import SideNavRight from "./SideNavRight";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [sideNavLeftToggle, setSideNavLeftToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSideNavLeftToggle(true);
      } else {
        setSideNavLeftToggle(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <TopNav setSideNavLeftToggle={setSideNavLeftToggle} />
      <div className="">
        <SideNavLeft
          sideNavLeftToggle={sideNavLeftToggle}
          // setSideNavLeftToggle={setSideNavLeftToggle}
        />
        <main
          className={`main-content ml-0 ${
            sideNavLeftToggle
              ? "md:ml-[19%] lg:ml-[18%] xl:ml-[20%]"
              : "md:ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppWrapper;
