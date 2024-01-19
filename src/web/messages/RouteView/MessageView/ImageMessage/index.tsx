import { X } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import React, { FC } from "react";
import { H2, Paragraph, View, XStack, YStack, useMedia } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

import { ImageContentWithMeta } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";

const ImageMessage: FC<{
  content: ImageContentWithMeta;
}> = ({ content }) => {
  const media = useMedia();

  const imageSize = media.gtMd ? 500 : 300;

  return (
    <YStack theme="dark">
      <View p="$3">
        <Image
          source={content.content}
          contentFit="contain"
          style={{ height: imageSize, width: imageSize }}
        />
      </View>
    </YStack>
  );
};

export default ImageMessage;
