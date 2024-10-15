import { useFonts } from "expo-font";
import { useEffect } from "react";

const useCustomFonts = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [error]);

  return { loaded, error };
};

export default useCustomFonts;
