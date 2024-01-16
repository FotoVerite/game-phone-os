import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  MESSAGE_CONTENT,
  NEXT_MESSAGE_EFFECT_TYPE,
} from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  OPTION_EFFECT_TYPE,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum OPTIONS_ZARA_BENTHAM_PROTAG_I_BORKED_MY_PHONE {
  A = "OMG human interaction!",
  B = "I can't deal with anyone right now.",
  C = "I am waste of space",
}

const options = OPTIONS_ZARA_BENTHAM_PROTAG_I_BORKED_MY_PHONE;

const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

// Description: OP and ZARA discuss why OP has no contacts in his phone.
// Point: Give context for the setting of the game and set tone of most messages.

export const borked_phone: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM.PROTAG_I_BORKED_MY_PHONE,
  options: [
    {
      label: options.B,
      value: options.B,
      effect: OPTION_EFFECT_TYPE.STATIC,
      data: "This is a thought spiral, I am sounding insane",
    },
    {
      label: options.A,
      value: options.A,
    },
    {
      label: options.C,
      value: options.C,
      effect: OPTION_EFFECT_TYPE.STATIC,
      data: "This is a thought spiral, I am sounding insane",
    },
  ],
  conditions: {
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.NOTIFICATION_HOW_IS_THE_NEW_PHONE]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [options.A]: [
      {
        name: SELF,
        messages: [options.A],
      },
      {
        name: ZARA,
        messages: ["Well, that's a reaction!"],
      },
      {
        name: SELF,
        messages: [
          "I'm loosing my mind, my sanity!",
          {
            type: MESSAGE_CONTENT.STRING,
            content: "I kinda sorta...",
            nextMessageEffect: {
              type: NEXT_MESSAGE_EFFECT_TYPE.RETYPE,
              data: ["I ruined my phone and my life", "I kinda ruined my life"],
            },
          },
          "froze my account and lost all my contacts...",
          "and now I don't know what to do",
          { type: MESSAGE_CONTENT.EMOJI, content: "💀" },
        ],
      },
      {
        name: ZARA,
        messages: [
          "Poor baby",
          "It sounds so hard to be you",
          "So how did this happen?",
        ],
      },
      {
        name: SELF,
        messages: ["Via stupidity"],
      },
      {
        name: ZARA,
        messages: ["No, really, how?"],
      },
      {
        name: SELF,
        messages: [
          "Unsure, I think my keychain was using a stale password and I just kept trying to enter it till it locked me out for the next…",
          "5 hours I think.",
        ],
      },
      {
        name: ZARA,
        messages: ["What will you do?"],
      },
      {
        name: SELF,
        messages: ["Probably kill myself."],
      },
      {
        name: ZARA,
        messages: [{ type: MESSAGE_CONTENT.EMOJI, content: "😦" }],
      },
      {
        name: SELF,
        messages: [
          "I’m trying to find some of my contacts in the meantime, but I was overzealous with inbox zero.",
        ],
      },

      {
        name: ZARA,
        messages: ["Inbox what?"],
      },
      {
        name: SELF,
        messages: ["I deleted nearly all my emails instead of archiving."],
      },
      {
        name: ZARA,
        messages: ["That sounds like an amazing system"],
      },
    ],
  },
};
