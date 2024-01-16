import { ROUTE_IDS_MICHAEL_MYERS } from "../../../michael/routes/routes";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum OPTIONS_ZARA_BENTHAM_I_DONT_FEEL_SECURE_WITH_MICHAEL {
  A = "I wish I felt secure with Michael.",
}

const OPTIONS = OPTIONS_ZARA_BENTHAM_I_DONT_FEEL_SECURE_WITH_MICHAEL;
const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const i_dont_feel_secure: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM.PROTAG_I_DONT_FEEL_SECURE_WITH_MICHAEL,
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
    [OPTIONS.A]: [
      {
        name: SELF,
        messages: [OPTIONS.A],
      },
      {
        name: ZARA,
        messages: [
          "I mean, you decided to date a serial killer so it make sense you’d feel this way",
        ],
      },
      {
        name: SELF,
        messages: [
          //{type: MESSAGE_CONTENT.EMOJI, content:'🙁'},
          "Gurl please that joke was tired the first time you said it.",
        ],
      },
      {
        name: ZARA,
        messages: [
          "Who names their kid Michael Myers.",
          "I mean he’s weird enough that it fits.",
        ],
      },
      {
        name: SELF,
        messages: [
          "Zara, I will mute you if you continue to talk shit about my boyfriend.",
          "I get that you don’t like him but I honestly don’t have the energy to deal with your issues when I’m asking about mine.",
        ],
      },
      {
        name: ZARA,
        messages: ["Okay you’re right, I just went agro. It’s a bad look."],
      },
      {
        name: SELF,
        messages: ["Thank you"],
      },
      {
        name: ZARA,
        messages: ["What's up?"],
      },
      {
        name: SELF,
        messages: ["I just don’t feel sexy"],
      },
      {
        name: ZARA,
        messages: [
          "I mean I could talk about how much I want your D but I don’t think we have that relationship.",
        ],
      },
      {
        name: SELF,
        messages: [
          "No seriously, he’s in this amazing shape and I’m this doughy lump of nothing that can barely do a pullup.",
        ],
      },
      {
        name: ZARA,
        messages: [
          "And you can command a room and make 300K. I kinda think abs are overrated in a partner.",
        ],
      },
      {
        name: SELF,
        messages: ["Not in the gay community. I just worry I don’t rate."],
      },
      {
        name: ZARA,
        messages: ["Well he isn’t the community is he."],
      },
    ],
  },
};
