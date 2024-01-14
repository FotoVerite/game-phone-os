import { ChevronRight } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { ListItem, Text, YGroup } from "tamagui";

import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

const link = (name: string) => {
  if (Platform.OS === "web") {
    return router.setParams({ contact: name });
  }
  return router.push(`/messages/contacts/${name}`);
};
export default function ConversationSideBar() {
  const store = useInfoContext<ConversationFilesStoreType>();
  const contacts = store().contacts;

  return (
    <YGroup
      alignSelf="center"
      bordered
      f={1}
      miw={120}
      maw={240}
      size="$4"
      borderColor="$gray8"
      bw={2}
      borderStyle="solid"
    >
      <YGroup.Item>
        {Object.keys(contacts).map((name, id) => (
          <ListItem
            bc="transparent"
            hoverTheme
            key={`${id}-${name}`}
            onPress={() => link(name)}
            iconAfter={ChevronRight}
          >
            <Text>{name}</Text>
          </ListItem>
        ))}
      </YGroup.Item>
    </YGroup>
  );
}
