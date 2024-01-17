import { X } from "@tamagui/lucide-icons";
import React, { FC } from "react";
import { H2, Paragraph, View, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

import { StringContentWithMeta } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";

const StringMessage: FC<{
  colors: string[];
  content: StringContentWithMeta;
}> = ({ content, colors }) => {
  return (
    <YStack theme="dark">
      <LinearGradient colors={colors} br="$6" marginVertical="$1">
        <View p="$3">
          <Paragraph>{content.content}</Paragraph>
        </View>
      </LinearGradient>
    </YStack>
  );
};

export default StringMessage;
