import { NextPage } from "next";
import { summaryData, transactionsData } from "../shared/data";
import SummaryCard from "./SummaryCard";
import { TransactionTable } from "./TransactionTable";

type Props = object;

const Overview: NextPage<Props> = () => {
  return (
    <div>
      {/* Dashboard Summary */}
      <div className="pb-[18px]">
        <div className="text-lg md:text-xl font-bold text-[#1B2528] mb-[18px]">
          Summary
        </div>
        <div className="flex flex-col  md:flex-row justify-center flex-wrap gap-[28px] w-full">
          <SummaryCard
            title={"Total Balance"}
            total={`$${summaryData.totalBalance.toLocaleString()}`}
            change={summaryData.balanceChange}
          />
          <SummaryCard
            title={"Total Credits"}
            total={`$${summaryData.totalCredits.toLocaleString()}`}
            change={summaryData.creditsChange}
          />
          <SummaryCard
            title={"Total Debits"}
            total={`$${summaryData.totalDebits.toLocaleString()}`}
            change={summaryData.debitsChange}
          />
          <SummaryCard
            title={"Transactions"}
            total={summaryData.transactionCount}
            change={summaryData.transactionChange}
          />
        </div>
      </div>
      <TransactionTable transactions={transactionsData} isLoading={false} />
    </div>
  );
};

export default Overview;
