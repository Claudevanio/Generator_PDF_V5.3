import { Text, View } from "@react-pdf/renderer";
import styles from "./styles/styles";
import { TableCellSmall } from "../tableCells";

const TablesCreditCardHeader: React.FC = () => (
  <View
    style={[
      styles.table,
      {
        width: "94%",
        borderTop: 1,
        borderRight: 1,
        borderLeft: 1,
      },
    ]}
  >
    <View style={[styles.tableHeader, { height: 36, alignItems: "center" }]}>
      <Text
        style={{
          fontSize: 14,
          paddingLeft: 12,
          color: "gray",
        }}
      >
        CONTRATOS ATIVOS E SUSPENSOS*
      </Text>
    </View>

    <View style={{ flexDirection: "row", height: 32 }}>
      <View style={[styles.tableHeaderShort, { textAlign: "center" }]}>
        <TableCellSmall>CONTRATO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 80 }]}>
        <TableCellSmall>BANCO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 65 }]}>
        <TableCellSmall>SITUAÇÃO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 75, flex: 1 }]}>
        <TableCellSmall>ORIGEM DA{"\n"}AVERBAÇÃO</TableCellSmall>
      </View>
      <View style={[styles.tableHeaderShort, { width: 65 }]}>
        <TableCellSmall>DATA{"\n"} INCLUSÃO</TableCellSmall>
      </View>

      <View
        style={{
          backgroundColor: "#f2f2f2",
          width: 120,
        }}
      >
        <View style={{ borderBottom: 1 }}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 7,
              padding: 2,
              paddingBottom: 4,
            }}
          >
            VALOR
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={[styles.tableHeaderShort, { width: 75, flex: 1 }]}>
            <Text style={{ flex: 1, fontSize: 7, marginTop: 3 }}>
              LIMITE DE{"\n"} CARTÃO
            </Text>
          </View>

          <View
            style={{
              width: 60,
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 7,
                paddingBottom: 2,
                textAlign: "center",
              }}
            >
              RESERVADO
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#f2f2f2",
          width: 280,
        }}
      >
        <View style={{ borderBottom: 1, borderLeft: 1 }}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 7,
              padding: 2,
              paddingBottom: 4,
            }}
          >
            DATA
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              borderRight: 1,
              borderLeft: 1,
              width: 70,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 7,
                marginTop: 2,
              }}
            >
              SUSPENSÃO{"\n"}BANCO
            </Text>
          </View>

          <View
            style={{
              borderRight: 1,
              width: 70,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 7,
                padding: 2,
                textAlign: "center",
              }}
            >
              SUSPENSÃO{"\n"} INSS
            </Text>
          </View>

          <View
            style={{
              borderRight: 1,
              width: 70,
              flexDirection: "row",
              alignItems: "flex-end",
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
              REATIVAÇÃO{"\n"}BANCO
            </Text>
          </View>

          <View
            style={{
              width: 70,
              flexDirection: "row",
              alignItems: "flex-end",
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
              REATIVAÇÃO{"\n"}INSS
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default TablesCreditCardHeader;
