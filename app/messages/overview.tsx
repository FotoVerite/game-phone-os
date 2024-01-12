import React from "react";
import { H1, XStack, YStack } from "tamagui";

import ContactCard from "./contact_card";
import ErrorBox from "@/src/web/ErrorBox";
import SiteContainer from "@/src/web/SiteContainer";
import ConversationSideBar from "@/src/web/messages/ContactSideBar";
import ConversationFilesProvider, {
  ConversationFilesStoreType,
} from "@/src/web/messages/ConversationFilesProvider";
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
    <ConversationFilesProvider>
      <SiteContainer>
        <YStack f={1}>
          <YStack>
            <H1 pb="$2" ta="center">
              Messages App Overview
            </H1>
            <FileImportErrors />
          </YStack>
          <XStack f={1}>
            <ConversationSideBar />
            <ContactCard />
          </XStack>
        </YStack>
      </SiteContainer>
    </ConversationFilesProvider>
  );
}
