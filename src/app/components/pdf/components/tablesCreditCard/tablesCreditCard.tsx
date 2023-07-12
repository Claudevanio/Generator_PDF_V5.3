import {  View } from "@react-pdf/renderer";
import TablesCreditCardHeader from "./header";
import TablesCreditCardBody from "./body";

interface TableCreditCardProps {
  datas: any[];
}

export const TablesCreditCard: React.FC<TableCreditCardProps> = ({ datas }) => (
  <View>
    <TablesCreditCardHeader />

    {datas && Array.isArray(datas) ? (
      <>
        {datas.map((data: any, i: number) => (
          <TablesCreditCardBody key={i} data={data} />
        ))}
      </>
    ) : (
      <></>
    )}
  </View>
);
