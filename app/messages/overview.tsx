import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ContactCard from "./contact_card";
import useDefaults from "./hooks/useDefault";

import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";
import { Text } from "tamagui";

export default function Overview() {
  const contactFiles = require.context(
    "../../src/phoneApplications/Messages/assets/messages",
    true,
    /\index.ts$/
  );

  const contactList = useDefaults<ConversationFileType>(contactFiles);
  const contacts = contactList.reduce(
    (acc, contact) => {
      acc[contact.name] = contact;
      return acc;
    },
    {} as { [name: string]: ConversationFileType }
  );

  const names = contactList.map((contact) => contact.name);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Messages App Overview</Text>
        <View style={styles.row}>
          <View style={styles.sidebar}>
            {names.map((name, id) => (
              <Text
                key={`${id}-${name}`}
                onPress={() => router.setParams({ contact: name })}
              >
                {name}
              </Text>
            ))}
          </View>
          <ContactCard contactList={contacts} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: { flex: 1 },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
