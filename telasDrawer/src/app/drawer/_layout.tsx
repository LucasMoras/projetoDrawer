import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Primeira tela",
            title: "Tela01",
          }}
        />
        <Drawer.Screen
          name="tela02"
          options={{
            drawerLabel: "Segunda tela",
            title: "Tela02",
          }}
        />
        <Drawer.Screen
          name="tela03"
          options={{
            drawerLabel: "Terceira tela",
            title: "Tela03",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
