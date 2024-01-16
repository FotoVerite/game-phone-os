// Description: OP and his brother discuss a reddit creepypaste/rumor.
// Point: Give context for the setting of the game and set tone of the horror. Also so how fractured his family is

import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

const LENNY = MESSAGE_CONTACT_NAME.LENNY;
const SELF = MESSAGE_CONTACT_NAME.SELF;

enum OPTIONS_LENNY_PROTAG_I_DONT_WANT_TO_GO_INTO_IT {
  A = "I...",
  B = "Just fuck off, you're never there when I need you",
  C = "What even is the point of discussing this",
}

const OPTIONS = OPTIONS_LENNY_PROTAG_I_DONT_WANT_TO_GO_INTO_IT;

export const i_dont_want_to_go_into_it: ChoosableRouteType = {
  id: ROUTE_IDS_LENNY.PROTAG_I_DONT_WANT_TO_GO_INTO_IT,
  name: "Protag navel gazes with Lenny",
  purpose: "Give more insight into how Protag feels in general",
  options: Object.values(OPTIONS_LENNY_PROTAG_I_DONT_WANT_TO_GO_INTO_IT),
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.NOTIFICATION_MY_AHRI_BUILD]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [
      {
        name: SELF,
        messages: [
          OPTIONS.A,
          "Do you ever feel that everything is laid out to get you?",
        ],
      },
      {
        name: LENNY,
        messages: ["In what way?"],
      },
      {
        name: SELF,
        messages: ["I don't know, sword of damocles?"],
      },
      {
        name: LENNY,
        messages: ["I don't know what that means"],
      },
      {
        name: SELF,
        messages: [
          "I don't know either",
          "I",
          "For a long time",
          "I've felt like my life split off somehow from where it was meant to go",
          "That I'm just observing as the days go by",
          "Never making a real decision",
          "That I never had that ability to begin with",
        ],
      },
      {
        name: SELF,
        messages: ["Same as it ever was"],
      },
      {
        name: LENNY,
        messages: ["Is this like a midlife crisis"],
      },
      {
        name: SELF,
        messages: [
          "I keep expecting to wake up in my beautiful house, with my beautiful wife and ask myself",
          "Self, how did I get here?",
        ],
      },
      {
        name: LENNY,
        messages: ["Dude, are you just fucking with me again"],
      },
      {
        name: SELF,
        messages: [
          "You're musical literacy always astounds me. Dad would have once in the lifetime on loop when driving us around to soccer",
        ],
      },
      {
        name: LENNY,
        messages: ["So you're fine?"],
      },
      {
        name: SELF,
        messages: [
          "Of course I'm fine, when aren't I fine.",
          "Just dealing with a troll",
        ],
      },
      {
        name: LENNY,
        messages: ["So just dealing with yourself then."],
      },
      {
        name: SELF,
        messages: [
          "I like shit posting, I'm not a troll. And I don't fuck with people I don't know",
        ],
      },
      {
        name: LENNY,
        messages: [
          "Alright",
          {
            type: MESSAGE_CONTENT.STRING,
            typingDelay: 5000,
            content:
              "just know I'm here for you dude. If things actually are hard",
          },
        ],
      },
    ],
  },
};
