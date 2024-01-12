import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider";
import GradientWithHorizontalFade from "@/src/web/messages/GradientWithHorizontalFade";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";
import { H2, H3, XStack } from "tamagui";

const totalRoutes = (n = 0, c = 0) => n + c;
const ContactCard: FC = () => {
  const { contact } = useLocalSearchParams<{
    contact?: string;
  }>();
  const store = useInfoContext<ConversationFilesStoreType>();

  const contacts = store().contacts;
  if (!contact) {
    return <></>;
  }

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const info = contacts[contact];

  return (
    <View style={styles.container}>
      <XStack f={1}>
        <GradientWithHorizontalFade
          colors={info.colors}
          containerStyles={{ w: 48, mr: 12 }}
        />

        <View>
          <H2 style={styles.title}>{info.full_name}</H2>
          <H3 style={styles.title}>Contact Displays: {info.name}</H3>
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
      </XStack>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    borderRadius: 24,
    borderColor: "red",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
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
