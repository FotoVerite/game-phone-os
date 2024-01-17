import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { FC, ReactElement } from "react";
import {
  H2,
  H3,
  Paragraph,
  ScrollView,
  Separator,
  Text,
  View,
  YStack,
} from "tamagui";

import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const outputDescription = (description?: string[] | ReactElement<Text>) => {
  if (!description) {
    return <></>;
  }
  if (Array.isArray(description)) {
    return (
      <View mt="$2">
        {description.map((p, index) => (
          <Text color="$gray12" key={`paragraph-${index}`}>
            {p}
          </Text>
        ))}
      </View>
    );
  }
  return <View mt="$2">{description}</View>;
};

const routeNumber = (info: ConversationFileType) => {
  return (info.notificationRoutes?.length || 0) + info.routes.length;
};

const ContactInformation: FC<{ info: ConversationFileType }> = ({ info }) => {
  const spacer = (
    <Separator
      bc={info.interfaceColor}
      marginVertical="$4"
      width="90%"
      alignSelf="center"
    />
  );
  return (
    <ScrollView>
      <YStack f={1} alignSelf="center" paddingHorizontal="$2">
        <Image
          source={info.heroImage}
          contentFit="contain"
          style={{ height: 300 }}
        />
        <H2>{info.full_name}</H2>
        {spacer}
        <H3>Display Name: {info.name}</H3>
        {spacer}
        <H3>Nick Name</H3>
        {spacer}
        {info.age && (
          <>
            <Paragraph>Age: {info.age}</Paragraph>
          </>
        )}
        {outputDescription(info.description)}
        {spacer}
        <Link href={`/messages/contacts/${info.full_name}/routes`}>
          Total Routes: {routeNumber(info)}
        </Link>
      </YStack>
    </ScrollView>
  );
};

export default ContactInformation;
