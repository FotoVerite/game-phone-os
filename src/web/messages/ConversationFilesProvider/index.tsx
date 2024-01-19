import React, { FC, PropsWithChildren } from "react";

import { ContactRouteHashType, RouteLookupHash } from "./types";
import { InfoContextProvider } from "../contexts/InfoContext";

import useDefaults from "@/app/messages/hooks/useDefault";
import useExports from "@/app/messages/hooks/useExports";
import { ROUTE_TYPE } from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const ConversationFilesProvider: FC<PropsWithChildren> = ({ children }) => {
  const contactFiles = require.context(
    "../../../phoneApplications/Messages/assets/messages",
    true,
    /\index.ts|index.tsx$/
  );

  const [contactList, errors] = useExports<ConversationFileType>(contactFiles);
  const contacts = contactList.reduce(
    (acc, contact) => {
      acc[contact.full_name] = contact;
      return acc;
    },
    {} as { [name: string]: ConversationFileType }
  );

  const colorHash = contactList.reduce(
    (acc, contact) => {
      acc[contact.full_name] = contact.colors;
      return acc;
    },
    {} as { [index: string]: string[] }
  );

  const reduceToRoutes = (contact: ConversationFileType) => {
    const routes = {} as RouteLookupHash;
    for (const route of contact.routes) {
      routes[route.id] = { type: ROUTE_TYPE.CHOOSE, ...route };
    }
    for (const route of contact.notificationRoutes || []) {
      routes[route.id] = { type: ROUTE_TYPE.NOTIFICATION, ...route };
    }
    return routes;
  };

  const routesHash = contactList.reduce((acc, contact) => {
    acc[contact.full_name] = reduceToRoutes(contact);
    return acc;
  }, {} as ContactRouteHashType);
  return (
    <InfoContextProvider
      initialValue={{ contacts, errors, routesHash, colorHash }}
    >
      {children}
    </InfoContextProvider>
  );
};

export default ConversationFilesProvider;
