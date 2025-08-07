import { useState } from "react";
import { Transaction } from "../shared/data";
import { formatCurrency } from "../utils/formatCurrency";
import { Dropdown } from "../assets";
import Image from "next/image";

export const TransactionTable = ({
  transactions,
  isLoading,
}: {
  transactions: Transaction[];
  isLoading: boolean;
}) => {
  const [sortKey, setSortKey] =
    useState<keyof (typeof transactions)[0]>("date");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: keyof (typeof transactions)[0]) => {
    if (key === sortKey) {
      setSortAsc(!sortAsc); // Toggle if same key
    } else {
      setSortKey(key);
      setSortAsc(true); // Default to ascending
    }
  };

  const sorted = [...transactions].sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];

    if (sortKey === "date") {
      valA = new Date(valA).getTime();
      valB = new Date(valB).getTime();
    } else if (typeof valA === "string" && typeof valB === "string") {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }

    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });

  if (isLoading) {
    return (
      <div className="text-center text-gray-500 py-8 animate-pulse">
        Loading transactions...
      </div>
    );
  }

  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No transactions to display.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mb-[28px]">
      <table className="w-full text-sm ">
        <thead>
          <tr className="text-left border-b border-[rgba(73,_101,_110,_0.2)] text-[rgba(21,39,45,0.62)] w-full">
            <th
              className="p-2 cursor-pointer md:w-[30%] lg:w-[45%] xl:w-[50%] hover:bg-gray-100"
              onClick={() => handleSort("date")}
            >
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div>Date</div>
                <Image
                  src={Dropdown}
                  alt="Dropdown"
                  width={24}
                  height={24}
                  className={`h-auto w-[24px] flex-shrink-0 object-cover object-center ${
                    sortKey === "date" && sortAsc ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </th>
            <th
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort("remark")}
            >
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div>Remark</div>
                <Image
                  src={Dropdown}
                  alt="Dropdown"
                  width={24}
                  height={24}
                  className={`h-auto w-[24px] flex-shrink-0 object-cover object-center ${
                    sortKey === "remark" && sortAsc ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </th>
            <th
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort("amount")}
            >
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div>Amount</div>
                <Image
                  src={Dropdown}
                  alt="Dropdown"
                  width={24}
                  height={24}
                  className={`h-auto w-[24px] flex-shrink-0 object-cover object-center ${
                    sortKey === "amount" && sortAsc ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </th>
            <th
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort("currency")}
            >
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div>Currency</div>
                <Image
                  src={Dropdown}
                  alt="Dropdown"
                  width={24}
                  height={24}
                  className={`h-auto w-[24px] flex-shrink-0 object-cover object-center ${
                    sortKey === "currency" && sortAsc
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </div>
            </th>
            <th
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort("type")}
            >
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div>Type</div>
                <Image
                  src={Dropdown}
                  alt="Dropdown"
                  width={24}
                  height={24}
                  className={`h-auto w-[24px] flex-shrink-0 object-cover object-center ${
                    sortKey === "type" && sortAsc ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((tx) => {
            const isValidDate = !isNaN(new Date(tx.date).getTime());
            const isValidAmount =
              typeof tx.amount === "number" && !isNaN(tx.amount);
            const isValidCurrency = typeof tx.currency === "string";

            if (!isValidDate || !isValidAmount || !isValidCurrency) {
              return null; // Skip invalid entries
            }
            return (
              <tr key={tx.id} className="border-b border-[rgba(73,_101,_110,_0.2)] text-[#1B2528] last:border-b-0">
                <td className="px-2 py-[18px] whitespace-nowrap md:w-[30%] lg:w-[45%] xl:w-[50%]">
                  {tx.date}
                </td>
                <td className="px-2 py-[18px] whitespace-nowrap">
                  {tx.remark}
                </td>
                <td className="px-2 py-[18px] whitespace-nowrap">
                  {tx.amount >= 0 ? "" : "-"}
                  {formatCurrency(tx.amount, tx.currency)}
                </td>
                <td className="px-2 py-[18px] whitespace-nowrap">
                  {tx.currency}
                </td>
                <td className="px-2 py-[18px] whitespace-nowrap flex items-center ">
                  <div className="flex items-center bg-[rgba(52,_97,_111,_0.09)] rounded-2xl py-1 px-2">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        tx.type === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-900">{tx.type}</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
