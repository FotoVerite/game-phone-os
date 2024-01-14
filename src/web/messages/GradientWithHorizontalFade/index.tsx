import React, { FC } from "react";
import { ShorthandViewStyleProps, YStack, ZStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const GradientWithHorizontalFade: FC<{
  colors?: string[];
  containerStyles: ShorthandViewStyleProps;
}> = ({ colors, containerStyles }) => {
  return (
    // <YStack {...containerStyles}>
    //   <LinearGradient
    //     start={{ x: 0, y: 1 }}
    //     end={{ x: 1, y: 1 }}
    //     zIndex={2}
    //     width="100%"
    //     height="100%"
    //     position="absolute"
    //     colors={["transparent", "#F2F2F2"]}
    //   />
    //   <LinearGradient flex={1} zIndex={1} colors={colors || []} />
    // </YStack>
    <YStack {...containerStyles}>
      <ZStack flex={1}>
        <LinearGradient
          fullscreen
          btlr={"$6"}
          bblr={"$6"}
          colors={colors || []}
        />
        <LinearGradient
          fullscreen
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          zIndex={2}
          colors={["transparent", "#F2F2F2"]}
        />
      </ZStack>
    </YStack>
  );
};

export default GradientWithHorizontalFade;
