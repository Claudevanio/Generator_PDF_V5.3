import { Text, View } from "@react-pdf/renderer";
import styles from "./styles/styles";
import { formatarValorParaReal } from "../../logic";

interface TableCreditCardBodyProps {
  data: any;
}

const TablesCreditCardBody: React.FC<TableCreditCardBodyProps> = ({ data }) => {
  return (
    <View style={[styles.table, { width: "94%" }]}>
      <View style={{ flexDirection: "row", height: 30 }}>
        <View style={[styles.tableData, { textAlign: "center" }]}>
          <Text style={styles.dataCells}>{data.numeroEmprestimo}</Text>
        </View>
        <View style={[styles.tableData, { width: 80 }]}>
          <Text style={styles.dataCells}>
            {data.codigoBanco} - {data.nomeBanco}
          </Text>
        </View>
        <View style={[styles.tableData, { width: 65 }]}>
          <Text style={styles.dataCells}>{data.situacao}</Text>
        </View>
        <View style={[styles.tableData, { width: 75 }]}>
          <Text style={styles.dataCells}>Averbação nova</Text>
        </View>
        <View style={[styles.tableData, { width: 65 }]}>
          <Text style={styles.dataCells}>{data.dataInclusao}</Text>
        </View>

        <View
          style={{
            width: 120,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: "100%",
            }}
          >
            <View
              style={{
                borderRight: 1,
                width: 60,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  padding: 2,
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {formatarValorParaReal(data.limite)}
              </Text>
            </View>

            <View
              style={{
                width: 60,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  padding: 2,
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {formatarValorParaReal(data.valor)}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 280,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: "100%",
            }}
          >
            <View
              style={{
                borderRight: 1,
                borderLeft: 1,
                width: 70,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 7,
                  padding: 2,
                }}
              >
                ---
              </Text>
            </View>

            <View
              style={{
                borderRight: 1,
                width: 70,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  padding: 2,
                  textAlign: "center",
                }}
              >
                ---
              </Text>
            </View>

            <View
              style={{
                borderRight: 1,
                width: 70,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  padding: 2,
                  textAlign: "center",
                }}
              >
                ---
              </Text>
            </View>

            <View
              style={{
                width: 70,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  padding: 2,
                  textAlign: "center",
                }}
              >
                ---
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TablesCreditCardBody;
