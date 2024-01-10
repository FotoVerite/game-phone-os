import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import { Link, router, useLocalSearchParams } from "expo-router";
import { FC, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/src/theme";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const totalRoutes = (n = 0, c = 0) => n + c;
const ContactCard: FC<{
  contactList: { [key: string]: ConversationFileType };
}> = ({ contactList }) => {
  const { contact } = useLocalSearchParams<{
    contact?: string;
  }>();

  if (!contact) {
    return <></>;
  }

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const info = contactList[contact];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <LinearGradient
          colors={info.colors || []}
          style={{
            width: theme.spacing.p1,
            height: "100%",
            marginEnd: theme.spacing.p1,
          }}
        ></LinearGradient>
        <View>
          <Text style={styles.title}>{info.full_name}</Text>
          <Text style={styles.title}>Contact Displays: {info.name}</Text>
          <View>
            <View
              style={{
                width: "50%",
                height: 300,
                backgroundColor: "transparent",
              }}
            >
              <Image
                style={{ flex: 1, width: "100%", height: "100%" }}
                source={info.heroImage}
                placeholder={blurhash}
                contentFit="contain"
                contentPosition="left top"
                transition={100}
              />
            </View>
            {info.description}
            <Text style={styles.title}>Routes</Text>
            <Text>{info.notificationRoutes?.length || 0} Notifications</Text>
            <Text>{info.routes?.length || 0} Choice Based Routes</Text>
            <Text>
              {totalRoutes(
                info.notificationRoutes?.length,
                info.routes.length
              ) || 0}{" "}
              Total
            </Text>
            <Link
              href={{
                pathname: "/messages/routes/[id]",
                params: { id: info.name },
              }}
            >
              View Routes
            </Link>
          </View>
        </View>
      </View>
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
    flex: 1,
    flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
