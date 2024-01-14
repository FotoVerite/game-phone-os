import { ChevronRight } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { Link, router, useLocalSearchParams } from "expo-router";
import React, { FC, ReactElement } from "react";
import {
  H2,
  H3,
  InputFrame,
  Paragraph,
  ScrollView,
  Separator,
  Text,
  View,
  YGroup,
  YStack,
} from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

import { ConversationFilesStoreType } from "../ConversationFilesProvider";

import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";
import { AbstractRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";

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

const RouteInformation: FC<{ colors: string[]; route: AbstractRouteType }> = ({
  colors,
  route,
}) => {
  const spacer = (
    <Separator
      bc={colors[0]}
      marginVertical="$4"
      width="90%"
      alignSelf="center"
    />
  );
  return (
    <YStack f={1} alignSelf="center" paddingHorizontal="$2">
      <H2>{route.name}</H2>
    </YStack>
  );
};

export default RouteInformation;
