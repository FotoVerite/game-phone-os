// Description: OP and his brother discuss a reddit creepypaste/rumor.
// Point: Give context for the setting of the game and set tone of the horror. Also so how fractured his family is

import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ExchangeBlockType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const LENNY = MESSAGE_CONTACT_NAME.LENNY;
const SELF = MESSAGE_CONTACT_NAME.SELF;

enum OPTIONS_LENNY_PROTAG_I_HAVE_ZERO_IDEA_WHAT_YOURE_TALKING_ABOUT {
  A = "Botlane, ELO, WUT",
  B = "Maokai sucks",
  C = "Really don't want to talk about this right now",
}

const OPTIONS = OPTIONS_LENNY_PROTAG_I_HAVE_ZERO_IDEA_WHAT_YOURE_TALKING_ABOUT;
const exchanges: ExchangeBlockType[] = [
  {
    name: SELF,
    messages: [
      "I just...",
      "Sorry, I shouldn't have brought anything up",
      "I just have a lot of shit going on",
    ],
  },
];

export const i_have_zero_idea_what_youre_talking_about: ChoosableRouteType = {
  id: ROUTE_IDS_LENNY.PROTAG_DOES_HE_WANT_TO_HEAR_THE_STORY_CHOICES,
  description: "Protagonist doesn't understand the previous notification",
  options: Object.values(OPTIONS),
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
        messages: [OPTIONS.A],
      },
      {
        name: LENNY,
        messages: [
          "I thought you were studying the faq terminology I sent you?",
        ],
      },
      {
        name: SELF,
        messages: [
          "It all seems so complicated and unneeded, I'm not trying to go pro, I just want to spend time together",
        ],
      },
      {
        name: LENNY,
        messages: [
          "Yeah, same bro, and I want to win",
          "And we can with a bit of practice",
        ],
      },
      {
        name: SELF,
        messages: [
          "I still wish you had just gone in with me on destiny",
          "I get that game",
        ],
      },
      {
        name: LENNY,
        messages: [
          "Destiny sucks, Eververse sucks, they're just monetization vampires. `Overdelivery is actually DANGEROUS`",
        ],
      },
      {
        name: SELF,
        messages: [
          "Tell me how you really feel.",
          "You forgot, best gun feel in the industry",
        ],
      },
      {
        name: LENNY,
        messages: [
          "Keep talking shillup, can I get you a boat metaphor to go?",
        ],
      },
      {
        name: SELF,
        messages: ["You really meming about a video from five years ago"],
      },
      {
        name: LENNY,
        messages: ["I'm just speaking truth"],
      },
      {
        name: SELF,
        messages: ["I get why you don't like Destiny, I just"],
      },
    ].concat(exchanges),
    [OPTIONS.B]: [
      {
        name: SELF,
        messages: [
          OPTIONS.B,
          "His ult is slow, his early game is bad, and I find him booooring",
        ],
      },
      {
        name: LENNY,
        messages: ["Well who do you want to play?"],
      },
      {
        name: SELF,
        messages: ["A warlock"],
      },
      {
        name: LENNY,
        messages: ["Nope, no destiny, also you like the lamest class"],
      },
      {
        name: SELF,
        messages: [
          "League is too much commitment. My eyes glaze over trying to read the faqs/builds.",
          "And I read legalese for fun",
        ],
      },
      {
        name: LENNY,
        messages: [
          "No, as you always like to remind me, you read it for money",
        ],
      },
      {
        name: SELF,
        messages: ["That's not... I wasn't trying to get into it Lenny"],
      },
      {
        name: LENNY,
        messages: ["It always needs to be your way"],
      },
    ].concat(exchanges),
    [OPTIONS.C]: [
      {
        name: SELF,
        messages: [OPTIONS.C, "Like... I don't know dude"],
      },
      {
        name: LENNY,
        messages: ["???", "Boy troubles?"],
      },
      {
        name: SELF,
        messages: [
          OPTIONS.C,
          "No, this is weird, all of this is weird.",
          "It's been a  very weird day",
        ],
      },
    ].concat(exchanges),
  },
};
