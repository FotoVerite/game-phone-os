import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum OPTIONS_ZARA_BENTHAM_CONTACT_CONVERSATION {
  A = "Yeah, give me Mileena",
  B = "Yeah I need to talk to Chris",
}

const OPTIONS = OPTIONS_ZARA_BENTHAM_CONTACT_CONVERSATION;
const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const zara_contact_conversation: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM.CONTACT_CONVERSATION,
  options: Object.values(OPTIONS),
  conditions: {
    [ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.NOTIFICATION_DO_YOU_WANT_ANY_CONTACTS]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [
      { name: SELF, messages: [OPTIONS.A] },
      {
        name: ZARA,
        messages: [
          "Okay.",
          {
            type: MESSAGE_CONTENT.VCARD,
            content: MESSAGE_CONTACT_NAME.MILEENA,
            reaction: { name: "heart", color: "#dc1d1d", delay: 3000 },
          },
        ],
      },
    ],
    [OPTIONS.B]: [
      { name: SELF, messages: [OPTIONS.B] },
      {
        name: ZARA,
        messages: [
          "Okay.",
          {
            type: MESSAGE_CONTENT.VCARD,
            content: MESSAGE_CONTACT_NAME.CHRIS,
            reaction: { name: "heart", color: "#dc1d1d", delay: 3000 },
          },
        ],
      },
    ],
  },
};
