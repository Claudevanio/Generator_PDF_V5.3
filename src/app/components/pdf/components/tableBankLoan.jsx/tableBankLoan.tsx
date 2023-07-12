import { View } from "@react-pdf/renderer";
import TableBankLoanHeader from "./header";
import TableBankLoanBody from "./body";

interface TableBankLoanProps {
  datas: any[];
}

const TableBankLoan: React.FC<TableBankLoanProps> = ({ datas }) => (
  <View>
    <TableBankLoanHeader />

    {datas && Array.isArray(datas) ? (
      <>
        {datas.map((data: any, i: number) => (
          <TableBankLoanBody key={i} data={data} />
        ))}
      </>
    ) : (
      <></>
    )}
  </View>
);

export default TableBankLoan;
