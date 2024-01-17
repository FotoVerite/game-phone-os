import { Route } from "expo-router";

import {
  ChoosableRouteType,
  NotificationRouteFileType,
  ROUTE_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

export type ContactRouteHashType = {
  [full_name: string]: RouteLookupHash;
};

export type RouteLookupHash = {
  [id: string]:
    | (ChoosableRouteType & { type: ROUTE_TYPE.CHOOSE })
    | (NotificationRouteFileType & { type: ROUTE_TYPE.NOTIFICATION });
};
export interface ConversationFilesStoreType {
  contacts: { [index: string]: ConversationFileType };
  errors: string[];
  routesHash: ContactRouteHashType;
  colorHash: { [index: string]: string[] };
}
