import { Activity, Airplay } from "@tamagui/lucide-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { XGroup, Button, YStack, Text } from "tamagui";
import { create } from "zustand";

import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";
import RouteInformation from "@/src/web/messages/routes/RouteInformation";

export default function Routes() {
  const [type, setType] = useState<"notifications" | "choosable">(
    "notifications"
  );

  const { id } = useLocalSearchParams<{
    id?: string;
  }>();
  const store = useInfoContext<ConversationFilesStoreType>();
  const contacts = store().contacts;
  if (!id) {
    return <></>;
  }
  const info = contacts[id];

  return (
    <YStack padding="$2" alignItems="center">
      <XGroup size="$4">
        <XGroup.Item>
          <Button
            size="$8"
            icon={Activity}
            onPress={() => setType("notifications")}
          >
            <Text>Notifications {info.notificationRoutes?.length}</Text>
          </Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button size="$8" icon={Airplay} onPress={() => setType("choosable")}>
            <Text>Choosable {info.routes.length}</Text>
          </Button>
        </XGroup.Item>
      </XGroup>

      {info.notificationRoutes?.map((r) => (
        <RouteInformation
          colors={info.colors || ["black", "black"]}
          route={r}
          contactRouteHash={store().routesHash}
          key={`route-${r.id}`}
        />
      ))}
    </YStack>
  );
}
