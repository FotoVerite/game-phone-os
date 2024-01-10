import { StyleSheet } from "react-native";
import { Image } from "expo-image";

import { Text, View } from "@/components/Themed";
import {
  InfoType,
  MESSAGE_CONTACT_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { router, useLocalSearchParams } from "expo-router";
import { FC, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/src/theme";
import contactCards from "@/src/web/messages/ContactCollation";

const ContactCard: FC = () => {
  const { contact } = useLocalSearchParams<{
    contact?: keyof typeof MESSAGE_CONTACT_NAME;
  }>();

  if (!contact) {
    return <></>;
  }

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const name = MESSAGE_CONTACT_NAME[contact];
  const avatar = MESSAGE_CONTACT_INFO[name].avatar;

  console.log(contactCards);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={MESSAGE_CONTACT_INFO[name].colors}
        style={{ flex: 1, padding: theme.spacing.p2 }}
      >
        <Text style={styles.title}>{name}</Text>
        <View
          style={{
            width: "50%",
            height: 300,
            backgroundColor: "transparent",
          }}
        >
          <Image
            style={{ flex: 1, width: "100%", height: "100%" }}
            source={avatar}
            placeholder={blurhash}
            contentFit="contain"
            contentPosition="left top"
            transition={100}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: theme.spacing.p2,
  },
  row: {
    flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
