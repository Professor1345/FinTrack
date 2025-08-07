import { NextPage } from "next";
// import { Activities, Dashboards, Hamburger, Home, Sales } from "../assets";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  sideNavLeftToggle: boolean;
  // setSideNavLeftToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavLeft: NextPage<Props> = ({
  sideNavLeftToggle,
  // setSideNavLeftToggle,
}) => {
  const pathname = usePathname();
  return (
    <div
      className={`sidenav-left w-[70%] md:w-[19%] lg:w-[18%] xl:w-[20%] border-b border-gray-300 shadow-md border-r ${
        sideNavLeftToggle
          ? "left-0 right-0 duration-500 md:block"
          : "-left-full right-full md:left-0 md:right-0 duration-500 md:hidden"
      }`}
    >
      {/* <button
        onClick={() => {
          setSideNavLeftToggle(false);
        }}
        className="block md:hidden text-4xl mx-3 leading-none"
      >
        &times;
      </button> */}
      <div className="flex flex-col py-2 gap-1">
        <Link
          href={"/"}
          className={`sidenav-left-button hover:bg-[rgba(56,_103,_118,_0.16)] rounded-2xl ${
            pathname === "/"
              ? " navbar-route-child before:block bg-[rgba(56,_103,_118,_0.16)] border border-black text-[#3A6C7B]"
              : " navbar-route-child before:hidden"
          }`}
        >
          <div className="sidenav-left-button-word">Dashboard</div>
        </Link>
        <Link
          href={"/transactions"}
          className={`sidenav-left-button hover:bg-[rgba(56,_103,_118,_0.16)] rounded-2xl ${
            pathname === "/transactions"
              ? " navbar-route-child before:block bg-[rgba(56,_103,_118,_0.16)] border border-black text-[#3A6C7B]"
              : " navbar-route-child before:hidden"
          }`}
        >
          <div className="sidenav-left-button-word">Transactions</div>
        </Link>
        <Link
          href={"/reports"}
          className={`sidenav-left-button hover:bg-[rgba(56,_103,_118,_0.16)] rounded-2xl ${
            pathname === "/reports"
              ? " navbar-route-child before:block bg-[rgba(56,_103,_118,_0.16)] border border-black text-[#3A6C7B]"
              : " navbar-route-child before:hidden"
          }`}
        >
          <div className="sidenav-left-button-word">Reports</div>
        </Link>
        <Link
          href={"/settings"}
          className={`sidenav-left-button hover:bg-[rgba(56,_103,_118,_0.16)] rounded-2xl ${
            pathname === "/settings"
              ? " navbar-route-child before:block bg-[rgba(56,_103,_118,_0.16)] border border-black text-[#3A6C7B]"
              : " navbar-route-child before:hidden"
          }`}
        >
          <div className="sidenav-left-button-word">Settings</div>
        </Link>
      </div>
    </div>
  );
};

export default SideNavLeft;
