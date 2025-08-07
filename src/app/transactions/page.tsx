import { NextPage } from "next";
import AppWrapper from "../../components/AppWrapper";

type Props = object;

const Page: NextPage<Props> = ({}) => {
  return (
    <AppWrapper>
      <div className="text-center">Transactions</div>
    </AppWrapper>
  );
};

export default Page;
