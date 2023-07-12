import { Text, View } from "@react-pdf/renderer";
import styles from "./styles";

const DividerComponent: React.FC = () => (
  <View style={{marginBottom: 4, display: "flex", flexDirection: "row", alignItems: "center" }}>
    <View style={styles.lineGray}></View>
    <View style={styles.lineBlue}></View>
    <View style={styles.lineGray}></View>
  </View>
);

export default DividerComponent;
