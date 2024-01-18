import { X } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import React, { FC } from "react";
import { H2, Paragraph, View, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

import { ImageContentWithMeta } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";

const ImageMessage: FC<{
  content: ImageContentWithMeta;
}> = ({ content }) => {
  return (
    <YStack theme="dark">
      <View p="$3">
        <Image
          source={content.content}
          contentFit="contain"
          style={{ height: 500, width: 500 }}
        />
      </View>
    </YStack>
  );
};

export default ImageMessage;
