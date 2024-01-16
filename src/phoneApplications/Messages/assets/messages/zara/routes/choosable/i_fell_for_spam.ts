import creepyBabyThree from "../../../antagonist_first_number/assets/creepyBaby3.jpeg";
import { OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT } from "../../../antagonist_first_number/routes/choosable/protagonist_choice_to_send_images_or_not";
import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "../../../antagonist_first_number/routes/routes";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants/index";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
  OptionType,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ExchangeBlockType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

export enum OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM {
  DID_SEND_IMAGES = "Fucking Spammers",
  DID_NOT_SEND_IMAGES = "I fell for spam",
}

const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

const OPTIONS: OptionType[] = [
  {
    label: OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_NOT_SEND_IMAGES,
    value: OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_NOT_SEND_IMAGES,
    conditions: {
      [MESSAGE_CONTACT_NAME.SPAM1]: {
        routes: {
          [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT]:
            {
              chosen: [
                OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT.B,
              ],
            },
        },
      },
    },
  },
  {
    label: OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_SEND_IMAGES,
    value: OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_SEND_IMAGES,
    conditions: {
      [MESSAGE_CONTACT_NAME.SPAM1]: {
        routes: {
          [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT]:
            {
              chosen: [
                OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT.A,
              ],
            },
        },
      },
    },
  },
];
const did_not_send_images: ExchangeBlockType[] = [
  {
    name: SELF,
    messages: [
      OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_NOT_SEND_IMAGES,
      "I can't believe I fell for a `How are you doing`",
    ],
  },
  { name: ZARA, messages: ["I always wondered who those people were."] },
  {
    name: SELF,
    messages: [
      "I guess one response back isn’t falling for them. I just feel fucking dumb, like accidentally picking up a scam likely call.",
      {
        type: MESSAGE_CONTENT.STRING,
        content: "I did block and report, like it does anything.",
        conditions: { [MESSAGE_CONTACT_NAME.SPAM1]: { blocked: true } },
      },
    ],
  },
  {
    name: ZARA,
    messages: [
      "Why you gotta hate on Scam, he's a lovely guy. Just called me 30 minutes ago asking for me to signup for Spectrum for the 30th time. Last time he tried to introduce me to His Brother 'The Nigerian Price' Mark Likely",
    ],
  },
  {
    name: SELF,
    messages: [
      "Yeah... you should really not write your own jokes for your channel",
    ],
  },
  {
    name: ZARA,
    messages: [{ type: MESSAGE_CONTENT.EMOJI, content: "😤" }],
  },
];

const did_send_images: ExchangeBlockType[] = [
  {
    name: SELF,
    messages: [OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_SEND_IMAGES],
  },
  { name: ZARA, messages: ["I always wondered who those people were."] },
  {
    name: SELF,
    messages: [
      "They make me so angry, who are these fuckers trying to phish or bother people",
    ],
  },
  {
    name: ZARA,
    messages: [
      "I think mostly underpaid people working in call centers in China or Russia? I remember reading an article a long time ago. Could be 100% wrong of course",
    ],
  },
  {
    name: SELF,
    messages: ["I've started to send them creepy baby images/ads in response"],
  },
  {
    name: ZARA,
    messages: ["Really?"],
  },
  {
    name: SELF,
    messages: ["Yeah, more rewarding then blocking them"],
  },

  {
    name: ZARA,
    messages: ["What do you mean by creepy baby ads"],
  },
  {
    name: SELF,
    messages: [{ type: MESSAGE_CONTENT.IMAGE, content: creepyBabyThree }],
  },
  {
    name: ZARA,
    messages: ["OMG that's terrifying.", "I need some brainbleech now"],
  },
  {
    name: SELF,
    messages: ["Hey you asked"],
  },
];

export const i_fell_for_spam: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM.PROTAG_I_FELL_FOR_SPAM,
  options: OPTIONS,
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM1]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT]:
          { status: ROUTE_STATUS_TYPE.FINISHED },
      },
    },
  },
  routes: {
    [OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_SEND_IMAGES]: did_send_images,
    [OPTIONS_ZARA_BENTHAM_I_FELL_FOR_SPAM.DID_NOT_SEND_IMAGES]:
      did_not_send_images,
  },
};
