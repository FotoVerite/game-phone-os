import React, { FC } from "react";
import { Paragraph, View, YStack } from "tamagui";

import { EmojiContentWithMeta } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";

const EmojiMessage: FC<{
  colors: string[];
  content: EmojiContentWithMeta;
}> = ({ content, colors }) => {
  return (
    <YStack theme="dark">
      <View p="$3">
        <Paragraph fontSize="$12">{content.content}</Paragraph>
      </View>
    </YStack>
  );
};

export default EmojiMessage;
