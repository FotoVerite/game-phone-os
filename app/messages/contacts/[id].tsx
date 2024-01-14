import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React, { FC } from "react";
import { ImageBackground } from "react-native";
import { YStack, YGroup, H2, H3 } from "tamagui";

import ContactInformation from "@/src/web/messages/ContactInformation";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

const Page: FC = () => {
  const { id } = useLocalSearchParams<{
    id?: string;
  }>();
  const store = useInfoContext<ConversationFilesStoreType>();
  const contacts = store().contacts;
  if (!id) {
    return <></>;
  }
  const info = contacts[id];

  return <ContactInformation info={info} />;
};

export default Page;
