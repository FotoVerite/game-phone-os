import React, { FC, PropsWithChildren } from "react";

import { RouteHash } from "./types";
import { InfoContextProvider } from "../contexts/InfoContext";

import useDefaults from "@/app/messages/hooks/useDefault";
import { ROUTE_TYPE } from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

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
      routes[route.id] = {
        type: ROUTE_TYPE.CHOOSE,
        name: route.name,
        options: route.options,
        route: route.routes,
      };
    }
    for (const route of contact.notificationRoutes || []) {
      routes[route.id] = {
        type: ROUTE_TYPE.NOTIFICATION,
        name: route.name,
        exchanges: route.exchanges,
      };
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
