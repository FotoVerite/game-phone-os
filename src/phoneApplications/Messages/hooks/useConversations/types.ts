import { ReactElement } from "react";
import { ImageSourcePropType } from "react-native";

import { MESSAGE_CONTACT_NAME } from "../../constants";
import {
  ContentWithMetaType,
  MessageEffectType,
} from "../contentWithMetaTypes";
import {
  ChoosableRouteType,
  NotificationRouteFileType,
  RouteConditionsType,
} from "../routes/types";

export type MessageContentType = string | ContentWithMetaType;

export type ExchangeBlockType = {
  name: MESSAGE_CONTACT_NAME;
  messages: MessageContentType[];
};

export type ConversationExchangeType = {
  time: string;
  exchanges: ExchangeBlockType[];
};

export type ConversationType = {
  availableEventRoutes?: number[];
  blockable?: boolean | { conditions: RouteConditionsType };
  blocked?: boolean;
  conditions?: RouteConditionsType;
  full_name: MESSAGE_CONTACT_NAME;
  displayName: string;
  effects?: MessageEffectType[];
  notificationRoutes?: NotificationRouteFileType[];
  exchanges: ConversationExchangeType[];
  group?: boolean;
  hasAvailableRoute?: boolean;
  heroImage: ImageSourcePropType;
  interfaceColor: string;
  leaveAsDelivered?: boolean;
  loglineContent: string;
  loglineTimestamp: string;
  routes: ChoosableRouteType[];
  tags: string[];
};
export type ConversationRecords = Record<
  MESSAGE_CONTACT_NAME,
  ConversationType
>;
export type ConversationListType = Pick<
  ConversationType,
  | "effects"
  | "heroImage"
  | "hasAvailableRoute"
  | "interfaceColor"
  | "displayName"
  | "loglineTimestamp"
  | "loglineContent"
  | "tags"
>;

export type ConversationListItemType = Omit<ConversationListType, "tags">;

export type ConversationFileType = Omit<
  ConversationType,
  | "hasAvailableRoute"
  | "loglineContent"
  | "loglineTimestamp"
  | "availableEventRoutes"
> & {
  age?: number;
  description?: ReactElement | string[];
  colors: string[];
  phoneNumber: string;
};
