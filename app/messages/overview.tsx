import React from "react";
import { H1, View, XStack, YStack } from "tamagui";

import ErrorBox from "@/src/web/ErrorBox";
import ContactCard from "@/src/web/messages/ContactCard";
import ConversationSideBar from "@/src/web/messages/ContactSideBar";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider/types";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

function FileImportErrors() {
  const store = useInfoContext<ConversationFilesStoreType>();
  return (
    <ErrorBox
      title="There Are Errors in imported Messages"
      errors={store().errors}
    />
  );
}

export default function Overview() {
  return (
    <YStack f={1}>
      <YStack>
        <H1 pb="$2" ta="center">
          Messages App Overview
        </H1>
        <FileImportErrors />
      </YStack>
      <XStack f={1}>
        <ConversationSideBar />
        <View f={1} justifyContent="center">
          <ContactCard />
        </View>
      </XStack>
    </YStack>
  );
}
