import { ROUTE_IDS_MICHAEL_MYERS } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  OPTION_EFFECT_TYPE,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum I_FEEL_WRONG_OPTIONS {
  A = "Michael, I don't feel sexy",
  B = "Dude, I don't want this pressure to preform for you",
  C = "Suuuuure, give me a few",
}

const SELF = MESSAGE_CONTACT_NAME.SELF;

export const i_feel_wrong: ChoosableRouteType = {
  id: ROUTE_IDS_MICHAEL_MYERS.PROTOG_I_FEEL_WRONG,
  options: [
    {
      label: I_FEEL_WRONG_OPTIONS.A,
      value: I_FEEL_WRONG_OPTIONS.A,
      effect: OPTION_EFFECT_TYPE.MELT,
      data: "Gah what's wrong with me",
    },

    {
      label: I_FEEL_WRONG_OPTIONS.B,
      value: I_FEEL_WRONG_OPTIONS.B,
      effect: OPTION_EFFECT_TYPE.STATIC,
      data: "I don't want to sound frigid",
    },
    {
      effect: OPTION_EFFECT_TYPE.DISPLAY_AFTER_OTHER_SELECTION,
      data: [I_FEEL_WRONG_OPTIONS.A, I_FEEL_WRONG_OPTIONS.B],
      label: I_FEEL_WRONG_OPTIONS.C,
      value: I_FEEL_WRONG_OPTIONS.C,
    },
  ],
  conditions: {
    [MESSAGE_CONTACT_NAME.MICHAEL]: {
      routes: {
        [ROUTE_IDS_MICHAEL_MYERS.PROTAG_REPLY_TO_ABOUT_TONIGHT]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [I_FEEL_WRONG_OPTIONS.C]: [
      {
        name: SELF,
        messages: [I_FEEL_WRONG_OPTIONS.C],
      },
    ],
  },
};
