import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Text>One</Text>,
        }}
      />
      <Tabs.Screen
        name="tabTwo"
        options={{
          tabBarIcon: ({ color }) => <Text>Two</Text>,
        }}
      />
    </Tabs>
  );
}
