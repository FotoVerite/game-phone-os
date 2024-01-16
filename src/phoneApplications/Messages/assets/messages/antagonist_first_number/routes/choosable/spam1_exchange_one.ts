import spam1_image from "../../assets/spam1.png";
import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants/index";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ExchangeBlockType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

export enum OPTIONS_ANTAGONIST_PROTAG_FIRST_RESPONSE {
  A = "New Phone, Who Dis",
  B = "Sorry, who is this?",
  C = "I'm doing okay. How are you doing today?",
}

const OPTIONS = OPTIONS_ANTAGONIST_PROTAG_FIRST_RESPONSE;
const SPAM1 = MESSAGE_CONTACT_NAME.SPAM1;
const SELF = MESSAGE_CONTACT_NAME.SELF;

const exchanges: ExchangeBlockType[] = [
  {
    name: SPAM1,
    messages: [
      "Hi my name is Kaori and I'm new to the area.",
      { type: MESSAGE_CONTENT.IMAGE, content: spam1_image },
    ],
  },
];

export const spam1_exchange_one: ChoosableRouteType = {
  id: ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_FIRST_RESPONSE,
  options: Object.values(OPTIONS),
  conditions: {
    [SPAM1]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.NOTIFICATION_INTRODUCTION]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [{ name: SELF, messages: [OPTIONS.A] }].concat(exchanges),
    [OPTIONS.B]: [{ name: SELF, messages: [OPTIONS.B] }].concat(exchanges),
    [OPTIONS.C]: [{ name: SELF, messages: [OPTIONS.C] }].concat(exchanges),
  },
};
