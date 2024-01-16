import { OPTIONS_ZARA_BENTHAM_CONTACT_CONVERSATION } from "./contact_conversation";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import { ChoosableRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum ZARA_I_NEED_CHRIS_OPTIONS {
  A = "I actually could use Chris' contact also",
}

const OPTIONS = ZARA_I_NEED_CHRIS_OPTIONS;
const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const can_i_have_chris: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM["PROTAG_CAN_I_HAVE_CHRIS'_CONTACT"],
  name: "Protag asks for Chris' contact ",
  options: Object.values(OPTIONS),
  conditions: {
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.CONTACT_CONVERSATION]: {
          not_chosen: [OPTIONS_ZARA_BENTHAM_CONTACT_CONVERSATION.B],
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
          "Alrighty.",
          {
            type: MESSAGE_CONTENT.VCARD,
            content: MESSAGE_CONTACT_NAME.CHRIS,
          },
        ],
      },
    ],
  },
};
