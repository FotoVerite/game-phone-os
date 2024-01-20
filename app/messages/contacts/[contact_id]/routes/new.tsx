import { Activity, Airplay } from "@tamagui/lucide-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { XGroup, Button, YStack, Text, ScrollView } from "tamagui";

import useContactParams from "@/app/messages/hooks/useContactParams";
import { AbstractRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider/types";
import RouteForm from "@/src/web/messages/RouteView/RouteForm";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";
import RouteInformation from "@/src/web/messages/routes/RouteInformation";

export default function Routes() {
  const [type, setType] = useState<"notifications" | "choosable">(
    "notifications"
  );

  const contact_id = useContactParams();
  const store = useInfoContext<ConversationFilesStoreType>();
  const { contacts, routesHash } = store();

  const info = contacts[contact_id];

  return (
    <>
      <Stack.Screen
        options={{
          title: `New Route`,
          headerStyle: { backgroundColor: info.interfaceColor },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <RouteForm initialValues={{ name: "A Name" }} />
    </>
  );
}
