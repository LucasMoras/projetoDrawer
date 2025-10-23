import { StyleSheet, Text, View } from "react-native";

export default function Tela02() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela03</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22 },
});
