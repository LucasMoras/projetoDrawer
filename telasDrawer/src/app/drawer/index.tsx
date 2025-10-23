import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

type DrawerNavProp = DrawerNavigationProp<any>;

export default function Index() {
  const navigation = useNavigation<DrawerNavProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Button
        title="Abrir Menu Gaveta"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});
