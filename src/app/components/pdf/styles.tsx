import { StyleSheet, Font } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 32,
  },
  title: {
    fontSize: 16,
    alignItems: "center",
    marginBottom: 8,
  },
  titleBold: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
  },
  titleTablePanel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 12,
    height: 40,
    backgroundColor: "#c8c8c8",
  },
  panelBeneficio: {
    border: 3,
    borderColor: "#c8c8c8",
    marginBottom: 12,
  },
  headerPanel: {},
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  panelEmprestimo: {
    border: 3,
    borderColor: "#c8c8c8",
  },
  image: {
    height: "100%",
  },
  logoInss: {
    width: "100%",
    justifyContent: "flex-start",
  },
  columnsPanel: {
    flexDirection: "row",
  },
  subTitle: {
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 10,
    marginTop: 20,
    textDecoration: "underline",
    fontWeight: 900,
  },
  tableTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 16,
  },
  SmallFont: {
    fontSize: 9,
  },
  rowView: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #EEE",
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
  },
  table: {
    borderStyle: "solid",
    border: 1,
    borderColor: "#000",
  },
  tableHeader: {
    fontFamily: "Helvetica-Bold",
    flexDirection: "row",
    height: 24,
    borderBottom: 1,
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
  },
  tableHeaderSide: {
    flexDirection: "row",
    width: "100%",
    height: 24,
    borderTop: 1,
    borderColor: "#000",
    paddingBottom: 4,
    paddingLeft: 8,
    backgroundColor: "#f2f2f2",
  },

  tableHeaderShort: {
    textAlign: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    width: "9%",
    borderRight: 1,
    backgroundColor: "#f2f2f2",
  },
  tableData: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "9%",
    borderRightWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: 1,
    borderColor: "#000",
    height: 24,
  },
  dataCells: {
    fontSize: 7,
    textAlign: "center",
  },
  tableCell: {
    fontSize: 10,
    paddingTop: 7,
    alignSelf: "flex-end",
  },
  tableCellExtraSmall: {
    fontFamily: "Helvetica-Bold",
    flex: 1,
    fontSize: 7,
  },

  tableColunm1: {
    width: 180,
    paddingRight: 4,
    alignContent: "center",
    borderRight: 1,
  },
  tableColunm2: {
    width: 119,
    paddingRight: 4,
    alignContent: "center",
    borderRight: 1,
  },
  tableColunm3: {
    width: 118,
    paddingRight: 4,
    alignContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});

export default styles;
