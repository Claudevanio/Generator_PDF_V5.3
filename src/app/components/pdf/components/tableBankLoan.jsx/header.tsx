import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles";

import { TableCell, TableCellSmall } from "../tableCells";

const TableBankLoanHeader: React.FC = () => (
  <View>
    <Text style={styles.tableTitle}>EMPRÉSTIMOS BANCÁRIOS</Text>

    <View>
      <View style={[styles.table, { width: "100%" }]}>
        <View
          style={[styles.tableHeader, {fontFamily: "Helvetica", height: 30, paddingBottom: 2, paddingLeft: 16 }]}
        >
          <Text style={{ fontSize: 14, paddingTop: 7, color: "gray" }}>
            CONTRATOS ATIVOS E SUSPENSOS*
          </Text>
        </View>

        <View style={{ flexDirection: "row", height: 44 }}>
          <View
            style={[
              styles.tableHeaderShort,
              { textAlign: "center", width: 90 },
            ]}
          >
            <TableCellSmall>CONTRATO</TableCellSmall>
          </View>
          <View style={styles.tableHeaderShort}>
            <TableCellSmall>BANCO</TableCellSmall>
          </View>
          <View style={[styles.tableHeaderShort, { width: 55 }]}>
            <TableCellSmall>SITUAÇÃO</TableCellSmall>
          </View>
          <View style={[styles.tableHeaderShort, { width: 65 }]}>
            <TableCellSmall>ORIGEM DA AVERBAÇÃO</TableCellSmall>
          </View>
          <View style={[styles.tableHeaderShort, { width: 55 }]}>
            <TableCellSmall>DATA{"\n"} INCLUSÃO</TableCellSmall>
          </View>

          <View
            style={{
              fontFamily: "Helvetica-Bold",
              backgroundColor: "#f2f2f2",
              width: 125,
            }}
          >
            <View style={{ borderBottom: 1, borderRight: 1, paddingBottom: 1 }}>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 7,
                  padding: 2,
                }}
              >
                COMPETÊNCIA
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                height: "100%",
              }}
            >
              <View
                style={[
                  styles.tableHeaderShort,
                  {
                    borderRight: 1,
                    width: 70,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 7,
                    padding: 2,
                  }}
                >
                  INÍCIO DE {"\n"}DESCONTO
                </Text>
              </View>

              <View
                style={[styles.tableHeaderShort, { width: 70, borderRight: 1 }]}
              >
                <Text
                  style={{
                    fontSize: 7,
                    padding: 2,
                    flex: 1,
                  }}
                >
                  FIM DE {"\n"} DESCONTO
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.tableHeaderShort, { width: 74 }]}>
            <TableCellSmall>QUANTIDADE DE PARCELAS</TableCellSmall>
          </View>

          <View
            style={{
              fontFamily: "Helvetica-Bold",
              backgroundColor: "#f2f2f2",
              width: "30%",
            }}
          >
            <View style={{ borderBottom: 1 }}>
              <Text
                style={{
                  alignSelf: "center",

                  fontSize: 7,
                  padding: 2,
                }}
              >
                VALOR
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                height: "100%",
              }}
            >
              <View
                style={{
                  width: 49,
                  borderRight: 1,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                    padding: 2,
                  }}
                >
                  PARCELA
                </Text>
              </View>

              <View
                style={{
                  borderRight: 1,
                  width: 34,
                  flexDirection: "row",
                  alignItems: "flex-end",
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
                  IOF
                </Text>
              </View>

              <View
                style={{
                  borderRight: 1,
                  width: 60,
                  flexDirection: "row",
                  alignItems: "flex-end",
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
                  EMPRESTADO
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                  }}
                >
                  LIBERADO
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              fontFamily: "Helvetica-Bold",
              backgroundColor: "#f2f2f2",
              width: "30%",
            }}
          >
            <View style={{ borderBottom: 1, borderLeft: 1 }}>
              <Text
                style={{
                  alignSelf: "center",

                  fontSize: 7,
                  padding: 2,
                }}
              >
                DATA
              </Text>
            </View>

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
                  width: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 7,
                    padding: 2,
                  }}
                >
                  SUSPENS.{"\n"}BANCO
                </Text>
              </View>

              <View
                style={{
                  borderRight: 1,
                  width: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                    padding: 2,
                  }}
                >
                  SUSPENS.{"\n"} INSS
                </Text>
              </View>

              <View
                style={{
                  borderRight: 1,
                  width: "30%",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                    padding: 2,
                  }}
                >
                  REATIV.{"\n"}BANCO
                </Text>
              </View>

              <View
                style={{
                  width: "25%",
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
                  REATIV.{"\n"}INSS
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default TableBankLoanHeader;
