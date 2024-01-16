import { Activity, Airplay } from "@tamagui/lucide-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { XGroup, Button, YStack, Text, ScrollView } from "tamagui";
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
  const { contacts, routesHash } = store();

  if (!id) {
    return <></>;
  }
  const info = contacts[id];
  return (
    <YStack paddingVertical="$2" f={1}>
      <XGroup size="$4" alignSelf="center">
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
      <ScrollView>
        {info.notificationRoutes?.map((r) => (
          <RouteInformation
            colors={info.colors || ["black", "black"]}
            route={r}
            contactRouteHash={routesHash}
            key={`route-${r.id}`}
          />
        ))}
      </ScrollView>
    </YStack>
  );
}
