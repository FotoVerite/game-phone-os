import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";

import SiteContainer from "@/src/web/SiteContainer";
import ConversationFilesProvider from "@/src/web/messages/ConversationFilesProvider";

export default function MessagesLayout() {
  const { id } = useGlobalSearchParams<{
    id?: string;
  }>();

  return (
    <ConversationFilesProvider>
      <SiteContainer>
        <Stack initialRouteName="messages">
          <Stack.Screen
            name="overview"
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="contacts/[id]"
            options={{
              headerBackVisible: true,
              headerTitle: `Contact: ${id}`,
            }}
          />
          <Stack.Screen
            name="routes/[id]"
            options={{
              headerBackVisible: true,
              headerTitle: `Routes For: ${id}`,
            }}
          />
        </Stack>
      </SiteContainer>
    </ConversationFilesProvider>
  );
}
