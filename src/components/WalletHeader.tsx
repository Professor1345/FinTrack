import { NextPage } from "next";
import Image from "next/image";
import {
  Dropdown,
  PurityBliss,
  Three_Dot,
  UserFour,
  UserOne,
  UserTwo,
} from "../assets";

type Props = {
  dashboardNav: string;
  setDashboardNav: React.Dispatch<React.SetStateAction<string>>;
};

const WalletHeader: NextPage<Props> = ({ dashboardNav, setDashboardNav }) => {
  const icons = [PurityBliss, UserOne, UserTwo, UserFour];
  return (
    <div className="my-4 md:my-6 lg:my-7">
      <div className="flex items-center justify-between flex-wrap mb-4 lg:mb-5">
        <div className="flex items-center gap-4 mb-4 md:mb-2">
          <button className="flex flex-row items-center gap-1 border-[1.5px] py-1 px-2 border-transparent hover:border-[rgba(73,_101,_110,_0.2)] hover:bg-gray-100 rounded-[16px]">
            <h1 className="text-xl md:text-2xl font-bold text-[#1B2528]">
              Wallet Ledger
            </h1>
            <Image
              src={Dropdown}
              alt="Dropdown"
              width={24}
              height={24}
              className="h-auto w-[24px] object-cover object-center"
            />
          </button>
          <span className="px-2 py-1 bg-[rgba(52,97,111,0.09)] text-[#1B2528] text-xs font-medium rounded-full flex items-center">
            <div className="w-[6px] h-[6px] bg-[#087A2E] rounded-full mr-1"></div>
            Active
          </span>
        </div>
        <div className="flex flex-row items-center gap-[12px]">
          <button className="px-[16px] py-1 md:py-2 bg-[#4B8B9F] text-black text-sm rounded-[16px] hover:bg-[#396977] transition-colors">
            Share
          </button>
          <button className="py-1 px-2 md:p-2 border-[1.5px] border-[rgba(73,_101,_110,_0.2)] hover:bg-gray-100 rounded-[16px]">
            <Image
              src={Three_Dot}
              alt="Three_Dot"
              width={20}
              height={20}
              className="h-auto w-[20px] object-cover object-center"
            />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex -space-x-2  rotate-180">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white overflow-hidden rotate-180"
            >
              <Image
                src={icon}
                alt="Users"
                className="size-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <span className="text-sm md:text-[15px] text-[rgba(21,_39,_45,_0.62)]">
          Ava, Liam, Noah +12 others
        </span>
      </div>

      <div className="border-b border-gray-200">
        <nav className="flex text-sm md:text-[15px]">
          <button
            onClick={() => setDashboardNav("overview")}
            className={`border-b-2 py-3 px-7 font-medium ${
              dashboardNav === "overview"
                ? "border-[#4B8B9F] text-[#437D8E]"
                : "border-transparent text-[rgba(21,39,45,0.62)] hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setDashboardNav("transactions")}
            className={`border-b-2 py-3 px-7 hover:text-gray-700 font-medium ${
              dashboardNav === "transactions"
                ? "border-[#4B8B9F] text-[#437D8E]"
                : "border-transparent text-[rgba(21,39,45,0.62)] hover:text-gray-700"
            }`}
          >
            Transactions
          </button>
        </nav>
      </div>
    </div>
  );
};
export default WalletHeader;
