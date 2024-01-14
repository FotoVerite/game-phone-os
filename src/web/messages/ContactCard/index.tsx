import { ChevronRight } from "@tamagui/lucide-icons";
import { ImageBackground } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { FC, ReactElement } from "react";
import { H2, H3, InputFrame, Text, View, YGroup, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

import { ConversationFilesStoreType } from "../ConversationFilesProvider";

import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

const outputDescription = (description?: string[] | ReactElement<Text>) => {
  if (!description) {
    return <></>;
  }
  if (Array.isArray(description)) {
    return (
      <View mt="$2">
        {description.map((p, index) => (
          <Text color="$gray6" key={`paragraph-${index}`}>
            {p}
          </Text>
        ))}
      </View>
    );
  }
  return <View mt="$2">{description}</View>;
};

const ContactCard: FC = () => {
  const { contact } = useLocalSearchParams<{
    contact?: string;
  }>();
  const store = useInfoContext<ConversationFilesStoreType>();

  const contacts = store().contacts;
  if (!contact) {
    return <></>;
  }
  const info = contacts[contact];
  const colors = info.colors?.concat([]) || ["$gray9", "gray12"];
  colors.unshift("transparent");
  const size = 400;
  const br = 12;
  return (
    <YStack
      w={size}
      h={size}
      alignSelf="center"
      onPress={() => router.push(`/messages/contacts/${info.full_name}`)}
    >
      <ImageBackground
        source={info.heroImage}
        style={{ flex: 1 }}
        imageStyle={{ borderRadius: br }}
      >
        <LinearGradient colors={colors} f={1} br={br} locations={[0, 0.8, 1]}>
          <YGroup position="absolute" bottom="$4" paddingHorizontal="$4">
            <H2 color="$gray2">{info.full_name}</H2>
            <H3 color="$gray2">Blockable: {info.blockable ? "Yes" : "No"}</H3>
            {outputDescription(info.description)}
          </YGroup>
        </LinearGradient>
      </ImageBackground>
    </YStack>
  );
};

export default ContactCard;
