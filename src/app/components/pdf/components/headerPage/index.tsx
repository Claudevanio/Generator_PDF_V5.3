import { Text, View } from "@react-pdf/renderer";
import styles from "./styles";

const HeaderPageComponent: React.FC = () => (
  <View style={styles.background}>
    <View style={styles.backgroundBlue}>
      <Text style={styles.text}>Instituto Nacional do Seguro Social</Text>
    </View>
  </View>
);

export default HeaderPageComponent;
