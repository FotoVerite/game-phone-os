import { ROUTE_IDS_MICHAEL_MYERS } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ExchangeBlockType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

export enum MICHAEL_ABOUT_TONIGHT_REPLY_OPTIONS {
  A = "Yaaasss",
  B = "Blerg",
}

const OPTIONS = MICHAEL_ABOUT_TONIGHT_REPLY_OPTIONS;
const MICHAEL = MESSAGE_CONTACT_NAME.MICHAEL;
const SELF = MESSAGE_CONTACT_NAME.SELF;

const exchanges: ExchangeBlockType[] = [
  {
    name: MICHAEL,
    messages: [
      "You set up your new phone yet?",
      "Want to try out that Camera.",
    ],
  },
  {
    name: SELF,
    messages: ["Someone’s very hot to trot"],
  },
  {
    name: MICHAEL,
    messages: [
      "Hot to trot. Who uses that?",
      "Yes, sir you’re the bee's knees and just the ginchiest",
    ],
  },
  {
    name: SELF,
    messages: ["I believe you, if I could send history."],
  },
  {
    name: MICHAEL,
    messages: [
      "Only when I’m drunk quoting my father…",
      "Wait why can’t you send history",
    ],
  },
  {
    name: SELF,
    messages: [
      "Contacts are borked. This reads as Maybe Michael",
      {
        type: MESSAGE_CONTENT.SNAPSHOT,
        content: {
          filename: "MICHAEL_SNAPSHOT",
          backup: "ADD",
        },
      },
    ],
  },
  {
    name: MICHAEL,
    messages: [
      "UGh, that's my default profile portrait?",
      "Well that sucks, any ideas if/when it can be fixed.",
    ],
  },
  {
    name: SELF,
    messages: ["Hopefully a few hours."],
  },
  {
    name: MICHAEL,
    messages: [
      "Well since you’re cut-off from the world might as make yourself useful.",
      "Now take off your shirt and send me something to get me revved up for later",
    ],
  },
  {
    name: SELF,
    messages: ["In a bit.", "Kinda need to psych myself up"],
  },
  {
    name: MICHAEL,
    messages: ["You look great. The new routine is really working for you."],
  },
];

export const michael_about_tonight_reply: ChoosableRouteType = {
  id: ROUTE_IDS_MICHAEL_MYERS.PROTAG_REPLY_TO_ABOUT_TONIGHT,
  options: Object.values(OPTIONS),
  conditions: {
    [MESSAGE_CONTACT_NAME.MICHAEL]: {
      routes: {
        [ROUTE_IDS_MICHAEL_MYERS.NOTIFICATION_IM_EXCITED_FOR_TONIGHT]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [].concat(exchanges),
    [OPTIONS.B]: [
      {
        name: SELF,
        messages: [OPTIONS.B],
      },
      {
        name: MICHAEL,
        messages: ["Whats wrong?"],
      },
      {
        name: SELF,
        messages: ["It's been a day"],
      },
      {
        name: MICHAEL,
        messages: ["Is it bad?"],
      },
      {
        name: SELF,
        messages: ["No, just draining."],
      },
    ].concat(exchanges),
  },
};
