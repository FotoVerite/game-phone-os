import { useLocalSearchParams } from "expo-router";
import React, { FC } from "react";

import ContactInformation from "@/src/web/messages/ContactInformation";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

const Page: FC = () => {
  const { contact_id, id } = useLocalSearchParams<{
    contact_id?: string;
    id?: string;
  }>();
  const store = useInfoContext<ConversationFilesStoreType>();
  const contacts = store().contacts;
  if (!contact_id) {
    return <></>;
  }
  const info = contacts[contact_id];

  return <></>;
};

export default Page;
