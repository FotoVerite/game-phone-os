import { MessageEffectType } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import { ROUTE_TYPE } from "@/src/phoneApplications/Messages/hooks/routes/types";

export interface ZustandAbstractRouteType {
  id: string;
  name: string;
  description?: string;
  purpose?: string;
  delay?: number;
  contactId: string;
}

export interface ZustandChoosableRoute extends ZustandAbstractRouteType {
  type: ROUTE_TYPE.CHOOSE;
}

export interface ZustandNotificationRoute extends ZustandAbstractRouteType {
  type: ROUTE_TYPE.NOTIFICATION;
}

export type ZustandRoute = ZustandChoosableRoute | ZustandNotificationRoute;

export type ZustandRouteCreationProps = Omit<ZustandRoute, "id">;

export type ZustandRouteActions = {
  create: (routeProps: Omit<ZustandRoute, "id">) => void;
  update: (routeProps: ZustandRoute) => void;
  destroy: (id: string) => void;
};

export type ZustandRouteStore = {
  routes: ZustandRoute[];
} & ZustandRouteActions;
