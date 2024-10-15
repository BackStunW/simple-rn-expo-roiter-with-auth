import * as SecureStore from "expo-secure-store";
import * as React from "react";

export async function setStorageItemAsync(key: string, value: string | null) {
  try {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  } catch (error) {
    console.error("Error managing SecureStore: ", error);
  }
}

export function useStorageState(key: string) {
  // Estado para el valor y el estado de carga
  const [state, setState] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  // Obtener el valor desde SecureStore
  React.useEffect(() => {
    setIsLoading(true); // Iniciar el estado de carga
    SecureStore.getItemAsync(key).then((value) => {
      setState(value);
      setIsLoading(false); // Finalizar el estado de carga cuando se obtiene el valor
    });
  }, [key]);

  // Función para actualizar el valor
  const setSession = React.useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key]
  );

  // Retornar el estado y la función para actualizar el valor como un objeto
  return {
    isLoading,
    session: state,
    setSession,
  };
}
