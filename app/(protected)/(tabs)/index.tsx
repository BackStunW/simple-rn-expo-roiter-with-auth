import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function IndexPage() {
  const router = useRouter();
  const { signOut, session } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>Welcome, {session}</Text>

      <Button title="_sitemap" onPress={() => router.push("/_sitemap")} />
      <Button title="Modal" onPress={() => router.push("/modal")} />

      <Button title="Sign Out" onPress={signOut} />
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
