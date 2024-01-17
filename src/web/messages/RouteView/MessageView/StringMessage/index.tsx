import {
  ContentWithMetaType,
  StringContentWithMeta,
  isContentWithMeta,
} from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import React, { FC } from "react";
import { YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const StringMessage: FC<{
  name: string;
  colors: string[];
  content: StringContentWithMeta;
}> = ({ content, name, colors }) => {
  return (
    <YStack theme="dark">
      <LinearGradient colors={colors}>{content.content}</LinearGradient>
    </YStack>
  );
};

export default StringMessage;
