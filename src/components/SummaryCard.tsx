import Image from "next/image";
import React from "react";
import { Three_Dot } from "../assets";
import { formatPercentage } from "../utils/formatPercentage";

const SummaryCard = ({
  title,
  total,
  change,
}: {
  title: string;
  total: string | number;
  change: number;
}) => {
  return (
    <div className="bg-[rgba(52,_97,_111,_0.09)] p-[20] md:p-[24px] lg:p-[28px] rounded-[20px] hover:shadow-lg duration-150 w-full md:w-[calc(50%-28px)] xl:w-[calc(25%-28px)]">
      <div className="flex flex-row justify-between mb-[18px]">
        <div className="font-semibold md:font-bold text-[17px] text-[#1B2528]">
          {title}
        </div>
        <button className="py-1 px-2 border-[1px] border-transparent hover:border-[rgba(73,_101,_110,_0.2)] hover:bg-gray-100 bg-transparent rounded-[16px]">
          <Image
            src={Three_Dot}
            alt="Three_Dot"
            width={20}
            height={20}
            className="h-auto w-[20px] object-cover object-center"
          />
        </button>
      </div>
      <div>
        <div className="mb-[4px] text-[#1B2528] text-[28px] md:text-[36px] leading-9 md:leading-10 font-bold">
          {total}
        </div>
        <div className="text-[13px] font-medium text-[#3E7383]">
          {formatPercentage(change)}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
