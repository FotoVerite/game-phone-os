// Description: OP and his brother discuss a reddit creepypaste/rumor.
// Point: Give context for the setting of the game and set tone of the horror. Also so how fractured his family is

import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

const LENNY = MESSAGE_CONTACT_NAME.LENNY;
const SELF = MESSAGE_CONTACT_NAME.SELF;

enum OPTIONS_LENNY_YES_EXACTLY {
  A = "Yes exactly",
}
const OPTIONS = OPTIONS_LENNY_YES_EXACTLY;

export const yes_exactly: ChoosableRouteType = {
  id: ROUTE_IDS_LENNY.YES_EXACTLY,
  name: "Lenny claims he did not sign protagonist up to cat facts",
  options: Object.values(OPTIONS),
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.NOTIFICATION_IM_STILL_CONFUSED]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [
      {
        name: SELF,
        messages: [OPTIONS.A],
      },
      {
        name: LENNY,
        messages: ["I'm insulted you'd think I'd do something so lame"],
      },
      {
        name: SELF,
        messages: ["Well who else would do it?"],
      },
      {
        name: LENNY,
        messages: [
          "I don't know, your boyfriend, or your friend Chris he's always been humor challenged",
        ],
      },
      {
        name: SELF,
        messages: ["I don't think Michael would do that"],
      },
      {
        name: LENNY,
        messages: [
          "How would I know, you barely talk about him. It's been six months and I still haven't met him",
        ],
      },
      {
        name: SELF,
        messages: ["We've been over this."],
      },
      {
        name: LENNY,
        messages: ["Are you ever going to introduce him to mom"],
      },
      {
        name: SELF,
        messages: ["Do you want him to break up with me."],
      },
      {
        name: LENNY,
        messages: ["She's not that bad....", "Emma loves her."],
      },
      {
        name: SELF,
        messages: ["If you say so, so you really didn't"],
      },
      {
        name: LENNY,
        messages: ["No!"],
      },
    ],
  },
};
