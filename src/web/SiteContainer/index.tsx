import React, { FC, PropsWithChildren } from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "tamagui";

const SiteContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView>
      <View padding={Platform.OS === "web" ? 24 : 0}>{children}</View>
    </SafeAreaView>
  );
};

export default SiteContainer;
