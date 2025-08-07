import { NextPage } from "next";
import Image from "next/image";
import {
  Search,
  Dashboards,
  Hamburger,
  UserOne,
  FinTrack_Logo,
} from "../assets";

interface Props {
  setSideNavLeftToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNav: NextPage<Props> = ({ setSideNavLeftToggle }) => {
  return (
    <div className="top-nav border-b border-gray-300">
      <button
        onClick={() => {
          setSideNavLeftToggle((prev) => !prev);
        }}
        className="sidenav-left-button-image mx-3 block md:hidden hover:bg-gray-200"
      >
        <Image
          src={Hamburger}
          alt="Menu logo"
          className="size-full object-cover object-center"
        />
      </button>
      <div className=" flex flex-row gap-6 xl:gap-8 items-center">
        <button
          onClick={() => {
            setSideNavLeftToggle((prev) => !prev);
          }}
          className="max-w-[25px] h-auto hidden md:block hover:bg-gray-200"
        >
          <Image
            src={Hamburger}
            alt="Menu logo"
            className="size-full object-cover object-center"
          />
        </button>
        <div className="text-gray-300 font-medium font-sans text-xl md:text-lg xl:text-xl">
          <Image
            src={FinTrack_Logo}
            alt="FinTrack logo"
            className="size-full object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="hidden md:flex flex-row gap-6 items-center">
          <button className="topnav-right-button hover:bg-gray-200">
            <Image className="size-full" src={Search} alt={"Search Icon"} />
          </button>
          <button className="topnav-right-button hover:bg-gray-200">
            <Image className="size-full" src={Dashboards} alt="Feedback" />
          </button>
        </div>
        <button className="topnav-right-button-user relative">
          <div className="rounded-full overflow-hidden">
            <Image className="size-full" src={UserOne} alt={"User"} />
          </div>
          {/* <div className="absolute bottom-0 right-0 bg-[#619C02] rounded-full border-2 border-white  size-3"></div> */}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
