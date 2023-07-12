import { Text } from "@react-pdf/renderer";
import styles from "../styles";

interface TableCellProps {
  children: React.ReactNode;
}

export const TableCellSmall: React.FC<TableCellProps> = ({ children }) => (
  <Text style={styles.tableCellExtraSmall}>{children}</Text>
);

export const TableCell: React.FC<TableCellProps> = ({ children }) => (
  <Text style={styles.tableCell}>{children}</Text>
);

export const TableCellBold: React.FC<TableCellProps> = ({ children }) => (
  <Text style={[styles.tableCell, {fontFamily: "Helvetica-Bold"}]}>{children}</Text>
);
