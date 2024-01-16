import creepyBabyTwo from "../assets/creepyBaby2.jpeg";
import creepyBabyThree from "../assets/creepyBaby3.jpeg";
import creepyBabyOne from "../assets/creepy_baby1.jpg";
import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT {
  A = "Send Image",
  B = "Of Fucking Course",
}

const OPTIONS = OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT;
const SPAM1 = MESSAGE_CONTACT_NAME.SPAM1;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const protagonist_choice_to_send_images_or_not: ChoosableRouteType = {
  id: ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT,
  options: Object.values(
    OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT
  ),
  conditions: {
    [SPAM1]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_FIRST_RESPONSE]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [
      {
        name: SELF,
        messages: [{ type: MESSAGE_CONTENT.IMAGE, content: creepyBabyOne }],
      },
      {
        name: SPAM1,
        messages: [
          {
            type: MESSAGE_CONTENT.STRING,
            content: "Huh?",
            typingDelay: 3000,
          },
        ],
      },
      {
        name: SELF,
        messages: [{ type: MESSAGE_CONTENT.IMAGE, content: creepyBabyTwo }],
      },
      {
        name: SPAM1,
        messages: [
          {
            type: MESSAGE_CONTENT.STRING,
            content: "Why are you sending these?",
            typingDelay: 2000,
          },
        ],
      },
      {
        name: SELF,
        messages: [{ type: MESSAGE_CONTENT.IMAGE, content: creepyBabyThree }],
      },
    ],
    [OPTIONS.B]: [{ name: SELF, messages: [OPTIONS.B] }],
  },
};
