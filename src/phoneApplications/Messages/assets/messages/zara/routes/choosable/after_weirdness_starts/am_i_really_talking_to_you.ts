import { ROUTE_IDS_ZARA_BENTHAM } from "../../routes";
import { OPTIONS_ZARA_BENTHAM_CONTACT_CONVERSATION } from "../contact_conversation";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { ChoosableRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum OPTIONS_ZARA_BENTHAM_AM_I_REALLY_TALKING_TO_YOU {
  A = "Am I really talking to you?",
}

const OPTIONS = OPTIONS_ZARA_BENTHAM_AM_I_REALLY_TALKING_TO_YOU;
const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const am_i_really_talking_to_you: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM.PROTAG_AM_I_REALLY_TALKING_TO_YOU,
  options: Object.values(OPTIONS_ZARA_BENTHAM_AM_I_REALLY_TALKING_TO_YOU),
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
        messages: ["You're starting to scare me!, Of course you are."],
      },
      {
        name: SELF,
        messages: [
          "I'm scaring myself",
          "Some of these txts seem impossible.",
          "They've been watching me for years",
        ],
      },
      {
        name: ZARA,
        messages: [
          "Honey, all your chats are backed up. They just combed them",
          "I know this is scary but you aren't in a horror film. It's just some bored kid",
          "They probably done some psychology/hot reading research",
        ],
      },
      {
        name: SELF,
        messages: [
          "You fucking rationalizing this isn't helping. When you find me with a knife stuck in  my ribs this rationalization will really help staunch the bleeding",
        ],
      },
      {
        name: ZARA,
        messages: ["You really believe they're coming to kill you?"],
      },
      {
        name: SELF,
        messages: ["They just seem to really hate me.", "It seems personal"],
      },
    ],
  },
};
