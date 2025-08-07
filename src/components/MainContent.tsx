"use client";
import { NextPage } from "next";
import WalletHeader from "./WalletHeader";
import { useState } from "react";
import Overview from "./Overview";
import { transactionsData } from "../shared/data";
import { TransactionTable } from "./TransactionTable";

type Props = object;

const MainContent: NextPage<Props> = ({}) => {
  const [dashboardNav, setDashboardNav] = useState("overview");
  return (
    <div className=" min-h-[calc(100vh-70px)] xl:min-h-[calc(100vh-59px)]">
      <WalletHeader
        dashboardNav={dashboardNav}
        setDashboardNav={setDashboardNav}
      />
      {dashboardNav === "overview" && <Overview />}
      {dashboardNav === "transactions" && (
        <TransactionTable transactions={transactionsData} isLoading={false} />
      )}
    </div>
  );
};

export default MainContent;
