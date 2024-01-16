import React, { FC, PropsWithChildren } from "react";

import { InfoContextProvider } from "../contexts/InfoContext";
import { ContactRouteHashType, RouteHash } from "../utility/showConditions";

import useDefaults from "@/app/messages/hooks/useDefault";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

export interface ConversationFilesStoreType {
  contacts: { [index: string]: ConversationFileType };
  errors: string[];
  routesHash: ContactRouteHashType;
}

const ConversationFilesProvider: FC<PropsWithChildren> = ({ children }) => {
  const contactFiles = require.context(
    "../../../phoneApplications/Messages/assets/messages",
    true,
    /\index.ts|index.tsx$/
  );

  const [contactList, errors] = useDefaults<ConversationFileType>(contactFiles);
  const contacts = contactList.reduce(
    (acc, contact) => {
      acc[contact.full_name] = contact;
      return acc;
    },
    {} as { [name: string]: ConversationFileType }
  );

  const reduceToRoutes = (contact: ConversationFileType) => {
    const routes = {} as RouteHash;
    for (const route of contact.routes) {
      routes[route.id] = { name: route.name, options: route.options };
    }
    for (const route of contact.notificationRoutes || []) {
      routes[route.id] = { name: route.name };
    }
    return routes;
  };

  const routesHash = contactList.reduce((acc, contact) => {
    acc[contact.full_name] = reduceToRoutes(contact);
    return acc;
  }, {} as ContactRouteHashType);
  return (
    <InfoContextProvider initialValue={{ contacts, errors, routesHash }}>
      {children}
    </InfoContextProvider>
  );
};

export default ConversationFilesProvider;
