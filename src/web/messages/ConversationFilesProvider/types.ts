import {
  OptionType,
  ROUTE_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

export type ContactRouteHashType = {
  [full_name: string]: RouteHash;
};
export type RouteHash = {
  [routeId: string]: {
    type: ROUTE_TYPE;
    name?: string;
    options?: OptionType[] | string[];
  };
};
export interface ConversationFilesStoreType {
  contacts: { [index: string]: ConversationFileType };
  errors: string[];
  routesHash: ContactRouteHashType;
}
