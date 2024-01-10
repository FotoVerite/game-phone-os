import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import {
  MESSAGE_CONTACT_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import ContactCard from "./contact_card";

export default function Overview() {
  const params = useLocalSearchParams<{
    contact?: keyof typeof MESSAGE_CONTACT_NAME;
  }>();
  const [contact, setContact] = useState(params.contact);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages App Overview</Text>
      <View style={styles.row}>
        <View style={styles.sidebar}>
          {Object.entries(MESSAGE_CONTACT_NAME).map(([key, name], id) => (
            <Text
              key={`${id}-${key}`}
              onPress={() => router.setParams({ contact: key })}
            >
              {name}
            </Text>
          ))}
        </View>
        <ContactCard />
      </View>
    </View>
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
