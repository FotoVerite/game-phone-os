import React, { FC, PropsWithChildren } from "react";

import { InfoContextProvider } from "../contexts/InfoContext";

import useDefaults from "@/app/messages/hooks/useDefault";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

export interface ConversationFilesStoreType {
  contacts: { [index: string]: ConversationFileType };
  errors: string[];
}

const ConversationFilesProvider: FC<PropsWithChildren> = ({ children }) => {
  const contactFiles = require.context(
    "../../../phoneApplications/Messages/assets/messages",
    true,
    /\index.ts$/
  );

  const [contactList, errors] = useDefaults<ConversationFileType>(contactFiles);
  const contacts = contactList.reduce(
    (acc, contact) => {
      acc[contact.name] = contact;
      return acc;
    },
    {} as { [name: string]: ConversationFileType }
  );

  return (
    <InfoContextProvider initialValue={{ contacts, errors }}>
      {children}
    </InfoContextProvider>
  );
};

export default ConversationFilesProvider;
