import { Text, View } from "@tamagui/core";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import useDefaults from "../hooks/useDefault";

import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";
import baseStyles from "@/src/styles";

export default function Routes() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const contactFiles = require.context(
    "../../../src/phoneApplications/Messages/assets/messages",
    true,
    /\index.ts$/
  );

  const [contactList] = useDefaults<ConversationFileType>(contactFiles);
  const contacts = contactList.reduce(
    (acc, contact) => {
      acc[contact.name] = contact;
      return acc;
    },
    {} as { [name: string]: ConversationFileType }
  );

  return (
    <View style={[baseStyles.center]}>
      <Text>Routes for: {id}</Text>
      <Text>{contacts[id].routes.length}</Text>
    </View>
  );
}
