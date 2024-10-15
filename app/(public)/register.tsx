import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register!</Text>

      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
