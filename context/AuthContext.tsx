import { useStorageState } from "@/hooks/useStorageState";
import { router } from "expo-router";
import React from "react";

const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  session: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function AuthProvider({ children }: React.PropsWithChildren) {
  const { isLoading, session, setSession } = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setSession("John Doe");
          router.replace("/");
        },
        signOut: () => {
          setSession(null);
          router.replace("/login");
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = React.useContext(AuthContext);

  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useAuth must be wrapped in a <AuthProvider />");
    }
  }

  return value;
}
