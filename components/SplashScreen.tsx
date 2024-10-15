import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Cargando{dots}</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
