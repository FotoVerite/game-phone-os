import { Activity, Airplay } from "@tamagui/lucide-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { XGroup, Button, YStack, Text, ScrollView } from "tamagui";

import useContactParams from "@/app/messages/hooks/useContactParams";
import { AbstractRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider/types";
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

  const [routes, setRoutes] = useState<AbstractRouteType[]>([]);

  useEffect(() => {
    if (type === "notifications") {
      setRoutes(info.notificationRoutes || []);
    }
    if (type === "choosable") {
      setRoutes(info.routes || []);
    }
  }, [info, type]);

  return (
    <>
      <Stack.Screen
        options={{
          title: `${contact_id} - Routes`,
          headerStyle: { backgroundColor: info.interfaceColor },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
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
            <Button
              size="$8"
              icon={Airplay}
              onPress={() => setType("choosable")}
            >
              <Text>Choosable {info.routes.length}</Text>
            </Button>
          </XGroup.Item>
        </XGroup>
        <ScrollView borderBlockColor="$gray6" borderTopWidth={2}>
          {routes.map((r) => (
            <RouteInformation
              colors={info.colors || ["black", "black"]}
              route={r}
              contactRouteHash={routesHash}
              key={`route-${r.id}`}
            />
          ))}
        </ScrollView>
      </YStack>
    </>
  );
}
