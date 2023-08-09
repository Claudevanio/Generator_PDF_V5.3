import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

import styles from "./styles";
import { TableCell, TableCellBold } from "./components/tableCells";
import TableBankLoan from "./components/tableBankLoan.jsx/tableBankLoan";
import { TablesCreditCard } from "./components/tablesCreditCard/tablesCreditCard";
import {
  formatarValorParaReal,
  calculateExtrapoledMargin,
  calculateExtrapoledMarginCard,
  calculatePercentage35,
  calculatePercentage5,
  calculateUsedMargin,
  calculateUsedMarginCard,
} from "./logic";
import HeaderPageComponent from "./components/headerPage";
import DividerComponent from "./components/divider";
import { getAbsoluteUrl } from "@/utils/vercel-utils";

const TableSide: React.FC<TableProps> = ({ children }) => (
  <View
    style={[
      styles.table,
      { borderRight: "none", width: "34%", alignSelf: "flex-end" },
    ]}
  >
    {children}
  </View>
);

const Table: React.FC<TableProps> = ({ children }) => (
  <View style={[styles.table, { width: "60%", alignSelf: "flex-end" }]}>
    {children}
  </View>
);

interface TableProps {
  children: React.ReactNode;
}

const MyDocument = ({ datas, date }: { datas: any; date: string }) => {
  return (
    <Document pageMode="fullScreen">
      <Page size="A3">
        <HeaderPageComponent />
        <View style={styles.page}>
          <View style={styles.title}>
            <Text>HISTÓRICO DE</Text>
            <Text style={styles.titleBold}>EMPRÉSTIMO CONSIGNADO</Text>
          </View>
          <DividerComponent />
          <View>
            <Text style={{ textAlign: "center", marginBottom: 8 }}>
              {datas.listaDadosPessoais.nome}
            </Text>
          </View>

          {/* Painel Benefícios */}

          <View style={styles.panelBeneficio}>
            <View style={styles.titleTablePanel}>
              <View style={styles.image}>
                <Image
                  src={`${getAbsoluteUrl()}/api/read-file?filename=person-img.png`}
                  style={{ marginRight: 16 }}
                />
              </View>
              <Text style={styles.bold}> Beneficio </Text>
            </View>

            <View style={{ padding: 32 }}>
              <View style={{ width: 300, marginRight: 80, padding: "2" }}>
                <Text style={{ fontFamily: "Helvetica-Bold", color: "blue" }}>
                  {datas.listaDadosBeneficio.especie}
                </Text>
              </View>

              <View style={styles.columnsPanel}>
                <View style={{ width: 300, marginRight: 80, padding: "2" }}>
                  <Text>
                    <Text style={styles.bold}>Nº Benefício: </Text>
                    {datas.listaDadosBeneficio.beneficio}
                  </Text>
                  <Text>
                    <Text style={styles.bold}>Situação: </Text>{" "}
                    {datas.listaDadosBeneficio.situacao}
                  </Text>
                  <Text>
                    <Text style={styles.bold}>Pago em:</Text>{" "}
                    {datas.listaDadosBancario.codigoBanco}-{" "}
                    {datas.listaDadosBancario.nomeBanco}
                  </Text>
                  <Text>
                    <Text style={styles.bold}>Meio: </Text>
                    {datas.listaDadosBancario.tipoMeioPagamento}
                  </Text>
                  <Text>
                    <Text style={styles.bold}>Agência:</Text>{" "}
                    {datas.listaDadosBancario.agencia}
                  </Text>
                  <Text>
                    <Text style={styles.bold}>Conta Corrente:</Text>
                    {datas.listaDadosBancario.cc}
                  </Text>
                </View>

                <View style={{ width: "50%" }}>
                  {datas.listaDadosBeneficio.representanteLegal === false ? (
                    <Text>Não possui representante legal</Text>
                  ) : (
                    <Text>Possui representante legal</Text>
                  )}

                  {datas.listaDadosBeneficio.possuiProcurador === false ? (
                    <Text>Não possui Pocurador</Text>
                  ) : (
                    <Text>Possui Procurador</Text>
                  )}

                  {datas.listaDadosBeneficio.pensao === false ? (
                    <Text>Não é pensão alimentícia</Text>
                  ) : (
                    <Text>É pensão alimentícia</Text>
                  )}

                  {datas.listaDadosBeneficio.bloqueioEmprestimo === false ? (
                    <Text>Liberado para empréstimo </Text>
                  ) : (
                    <Text>Não liberado para empréstimo </Text>
                  )}

                  {datas.listaDadosBeneficio.elegivel === true ? (
                    <Text style={styles.bold}>Elegível para empréstimos</Text>
                  ) : (
                    <Text style={styles.bold}>
                      Não elegível para empréstimos
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>

          {/* Painel Resumo Financeiro */}

          <View style={styles.panelEmprestimo}>
            <View style={styles.titleTablePanel}>
              <View style={styles.image}>
                <Image
                  src={`${getAbsoluteUrl()}/api/read-file?filename=cifrao-img.png`}
                  style={{ marginRight: 16 }}
                />
              </View>
              <Text style={styles.bold}>
                Margem para Empréstimo/Cartão e Resumo Financeiro
              </Text>
            </View>

            <View style={{ padding: 32, paddingLeft: 70 }}>
              <View style={{ flexDirection: "row" }}>
                <TableSide>
                  <View
                    style={[
                      styles.tableHeaderSide,
                      { borderTop: "none", height: 23 },
                    ]}
                  >
                    <TableCellBold>BASE DE CÁLCULO </TableCellBold>
                  </View>
                  <View style={styles.tableHeaderSide}>
                    <TableCellBold>MARGEM CONSIGNÁVEL* </TableCellBold>
                  </View>
                  <View style={styles.tableHeaderSide}>
                    <TableCellBold>MARGEM UTILIZADA </TableCellBold>
                  </View>
                  <View style={styles.tableHeaderSide}>
                    <TableCellBold>MARGEM RESERVADA** </TableCellBold>
                  </View>
                  <View style={styles.tableHeaderSide}>
                    <TableCellBold>MARGEM DISPONÍVEL </TableCellBold>
                  </View>
                  <View style={[styles.tableHeaderSide, { height: 25 }]}>
                    <TableCellBold>MARGEM EXTRAPOLADA** </TableCellBold>
                  </View>
                </TableSide>

                <Table>
                  <View style={styles.tableHeader}>
                    <View
                      style={{
                        width: 180,
                        borderRight: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          paddingTop: 5,
                          alignSelf: "center",
                        }}
                      >
                        EMPRÉSTIMOS{" "}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: 118,
                        borderRight: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          paddingTop: 5,
                          alignSelf: "center",
                        }}
                      >
                        RMC
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 118,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          paddingTop: 5,
                          alignSelf: "center",
                        }}
                      >
                        RCC
                      </Text>
                    </View>
                  </View>
                  {/**DataCells */}
                  <View style={styles.tableRow}>
                    <View style={styles.tableColunm1}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            datas.listaDadosBeneficio.basedeCalculo
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm2}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            datas.listaDadosBeneficio.basedeCalculo
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm3}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            datas.listaDadosBeneficio.basedeCalculo
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>
                  </View>

                  <View style={styles.tableRow}>
                    <View style={styles.tableColunm1}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            calculatePercentage35(
                              datas.listaDadosBeneficio.basedeCalculo
                            )
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm2}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            calculatePercentage5(
                              datas.listaDadosBeneficio.basedeCalculo
                            )
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm3}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            calculatePercentage5(
                              datas.listaDadosBeneficio.basedeCalculo
                            )
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>
                  </View>
                  {/**Margem Utilizada */}
                  <View style={styles.tableRow}>
                    <View style={styles.tableColunm1}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            calculateUsedMargin(
                              datas.listaDadosBeneficio.basedeCalculo,
                              datas.listaDadosBeneficio.valorMargemDisponivel
                            )
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm2}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            calculateUsedMarginCard(
                              datas.listaDadosBeneficio.basedeCalculo,
                              datas.listaDadosBeneficio.valorMargemDisponivelRMC
                            )
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm3}>
                      {!!datas.listaDadosBeneficio.basedeCalculo ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            calculateUsedMarginCard(
                              datas.listaDadosBeneficio.basedeCalculo,
                              datas.listaDadosBeneficio.valorMargemDisponivelRCC
                            )
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>
                  </View>
                  {/**Margem Reservada */}
                  <View style={styles.tableRow}>
                    <View style={styles.tableColunm1}>
                      <TableCell> {formatarValorParaReal(0)}</TableCell>
                    </View>

                    <View style={styles.tableColunm2}>
                      <TableCell> ---</TableCell>
                    </View>

                    <View style={styles.tableColunm3}>
                      <TableCell> ---</TableCell>
                    </View>
                  </View>
                  {/**Margem Disponivel */}
                  <View style={styles.tableRow}>
                    <View style={styles.tableColunm1}>
                      {!!datas.listaDadosBeneficio.valorMargemDisponivel ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            datas.listaDadosBeneficio.valorMargemDisponivel
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm2}>
                      {!!datas.listaDadosBeneficio.valorMargemDisponivelRMC ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            datas.listaDadosBeneficio.valorMargemDisponivelRMC
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>

                    <View style={styles.tableColunm3}>
                      {!!datas.listaDadosBeneficio.valorMargemDisponivelRCC ? (
                        <TableCell>
                          {" "}
                          {formatarValorParaReal(
                            datas.listaDadosBeneficio.valorMargemDisponivelRCC
                          )}
                        </TableCell>
                      ) : (
                        <TableCell> ---</TableCell>
                      )}
                    </View>
                  </View>
                  {/**Margem Extrapolada */}
                  <View style={[styles.tableRow, { borderBottom: "none" }]}>
                    <View style={styles.tableColunm1}>
                      <TableCell>
                        {" "}
                        {calculateExtrapoledMargin(
                          datas.listaDadosBeneficio.basedeCalculo,
                          datas.listaDadosBeneficio.valorMargemDisponivel
                        )}
                      </TableCell>
                    </View>

                    <View style={styles.tableColunm2}>
                      <TableCell>
                        {calculateExtrapoledMarginCard(
                          datas.listaDadosBeneficio.basedeCalculo,
                          datas.listaDadosBeneficio.valorMargemDisponivelRMC
                        )}
                      </TableCell>
                    </View>

                    <View style={styles.tableColunm3}>
                      <TableCell>
                        {calculateExtrapoledMarginCard(
                          datas.listaDadosBeneficio.basedeCalculo,
                          datas.listaDadosBeneficio.valorMargemDisponivelRCC
                        )}
                      </TableCell>
                    </View>
                  </View>
                </Table>
              </View>
              <View style={{ paddingRight: 46 }}>
                <Text style={styles.SmallFont}>
                  A margem consignável atual representa 45% da base de cálculo
                  para empréstimos. Dessa margem, 35% é para empréstimos e 10%
                  para cartão, sendo 5% para RMC e 5% para RCC.
                </Text>
                <Text style={styles.SmallFont}>
                  ** O valor da margem reservada está incluído no valor da
                  margem utilizada.
                </Text>
                <Text style={styles.SmallFont}>
                  *** A margem extrapolada representa o valor que excedeu a
                  margem disponível, que pode ocorrer em situações específicas
                  como a redução da renda do benefício
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer} fixed>
          <DividerComponent />
          <View style={[styles.logoInss, { fontSize: 8 }]}>
            <Image
              style={{ width: 120, alignSelf: "flex-end" }}
              src={`${getAbsoluteUrl()}/api/read-file?filename=logo-inss.png`}
            />
            <Text style={{ alignSelf: "flex-end" }}>{date}</Text>
            <Text style={{ alignSelf: "flex-end" }}>1 / 3</Text>
          </View>
        </View>
      </Page>

      <Page size="A3">
        <HeaderPageComponent />
        <View style={styles.page}>
          <TableBankLoan datas={datas.listaEmprestimos} />
          <Text style={[styles.SmallFont, { marginTop: 8, marginBottom: 140 }]}>
            *Contratos que comprometem a margem consignável
          </Text>
        </View>
        <View style={styles.footer} fixed>
          <DividerComponent />
          <View
            style={[
              styles.logoInss,
              {
                fontSize: 8,
                justifyContent: "space-between",
                flexDirection: "row",
              },
            ]}
          >
            <Image
              style={{ width: 120, alignSelf: "flex-end" }}
              src={`${getAbsoluteUrl()}/api/read-file?filename=logo-inss.png`}
            />
            <View>
              <Text style={{ alignSelf: "flex-end" }}>{date}</Text>
              <Text style={{ alignSelf: "flex-end" }}>2 / 3</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A3">
        <HeaderPageComponent />
        <View style={[styles.page]}>
          <Text style={styles.tableTitle}> CARTÃO DE CRÉDITO</Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 6,
              border: 1,
              borderBottom: "none",
              backgroundColor: "#f2f2f2",
              padding: 2,
              justifyContent: "center",
              width: 754,
              height: 24,
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>
              CARTÃO DE CRÉDITO - RMC
            </Text>
          </View>

          <TablesCreditCard datas={datas.listaRMC} />

          <Text style={[styles.SmallFont, { marginBottom: 40 }]}>
            *Contratos que comprometem a margem consignável
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 6,
              border: 1,
              borderBottom: "none",
              backgroundColor: "#f2f2f2",
              padding: 2,
              justifyContent: "center",
              width: 754,
              height: 24,
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>
              CARTÃO DE CRÉDITO - RCC
            </Text>
          </View>
          {/* Painel Resumo Financeiro */}
          <TablesCreditCard datas={datas.novos_RCC} />
          <Text style={[styles.SmallFont, { marginBottom: 80 }]}>
            *Contratos que comprometem a margem consignável
          </Text>
        </View>

        <View style={styles.footer} fixed>
          <DividerComponent />
          <View
            style={[
              styles.logoInss,
              {
                fontSize: 8,
                justifyContent: "space-between",
                flexDirection: "row",
              },
            ]}
          >
            <Image
              style={{ width: 120, alignSelf: "flex-end" }}
              src={`${getAbsoluteUrl()}/api/read-file?filename=logo-inss.png`}
            />
            <View>
              <Text style={{ alignSelf: "flex-end" }}>{date}</Text>
              <Text style={{ alignSelf: "flex-end" }}>3 / 3</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
