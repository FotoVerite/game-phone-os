import { Stack } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";

export default function MessagesLayout() {
  const colorScheme = useColorScheme();
  return (
    <Stack initialRouteName="messages">
      <Stack.Screen
        name="overview"
        options={{ presentation: "fullScreenModal", headerShown: false }}
      />
    </Stack>
  );
}
