import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";

import SiteContainer from "@/src/web/SiteContainer";
import ConversationFilesProvider from "@/src/web/messages/ConversationFilesProvider";

export default function MessagesLayout() {
  const { id, contact_id } = useGlobalSearchParams<{
    id?: string;
    contact_id?: string;
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
            name="contacts/[contact_id]/index"
            options={{
              headerBackVisible: true,
              headerTitle: `${contact_id}`,
            }}
          />
          <Stack.Screen
            name="contacts/[contact_id]/routes/[id]"
            options={{
              headerBackVisible: true,
              headerTitle: `${contact_id} - ${id}`,
            }}
          />
          <Stack.Screen
            name="contacts/[contact_id]/routes/index"
            options={{
              headerBackVisible: false,
              headerTitle: `${contact_id} - Routes`,
            }}
          />
        </Stack>
      </SiteContainer>
    </ConversationFilesProvider>
  );
}
