import { OPTIONS_ZARA_BENTHAM_CONTACT_CONVERSATION } from "./contact_conversation";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import { ChoosableRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum ZARA_CAN_I_HAVE_MILEENA {
  A = "Can I have Mel's number also.",
}

const OPTIONS = ZARA_CAN_I_HAVE_MILEENA;
const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const can_i_have_mileena: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM["PROTAG_CAN_I_HAVE_CHRIS'_CONTACT"],
  options: Object.values(OPTIONS),
  conditions: {
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ZARA_ROUTE_IDS.CONTACT_CONVERSATION]: {
          not_chosen: [OPTIONS_ZARA_BENTHAM_CONTACT_CONVERSATION.A],
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [
      {
        name: SELF,
        messages: [OPTIONS.A, "I need to talk to her about our workout"],
      },
      {
        name: ZARA,
        messages: [
          "Ok, let me know if you need anyone else.",
          { type: MESSAGE_CONTENT.EMOJI, content: "🏋🏼‍♀️" },

          {
            type: MESSAGE_CONTENT.VCARD,
            content: MESSAGE_CONTACT_NAME.MILEENA,
          },
        ],
      },
    ],
  },
};
