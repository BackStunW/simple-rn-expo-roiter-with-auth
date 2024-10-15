import SplashScreen from "@/components/SplashScreen";
import { useAuth } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <SplashScreen />;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  // Renderizar el stack de navegación para las rutas protegidas.
  return <Stack screenOptions={{ headerShown: false }} />;
}
