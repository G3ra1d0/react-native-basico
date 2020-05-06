import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Simples from "./componentes/Simples";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ola Mundo!</Text>
      <Simples texto="Passando um texto para componente (Props)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
