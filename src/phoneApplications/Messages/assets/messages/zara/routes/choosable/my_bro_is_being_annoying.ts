import { ROUTE_IDS_LENNY } from "../../../lenny/routes/routes";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum OPTIONS_ZARA_BENTHAM_MY_BRO_IS_ANNOYING {
  A = "My Bro is being so annoying",
}

const OPTIONS = OPTIONS_ZARA_BENTHAM_MY_BRO_IS_ANNOYING;
const ZARA = MESSAGE_CONTACT_NAME.ZARA;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const my_bro_is_being_annoying: ChoosableRouteType = {
  id: ROUTE_IDS_ZARA_BENTHAM.PROTAG_MY_BRO_IS_ANNOYING,
  name: "My brother is being annoying",
  purpose: "Give additional context and information about Leonard",
  options: Object.values(OPTIONS),
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.PROTAG_DOES_HE_WANT_TO_HEAR_THE_STORY_CHOICES]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  routes: {
    [OPTIONS.A]: [
      { name: SELF, messages: [OPTIONS.A] },
      {
        name: ZARA,
        messages: ["Which one?"],
      },
      {
        name: SELF,
        messages: [
          "The one who's terminally online. All day every day going on about twitter or reddit or playing LoL",
          "He loves sending inane karma farming posts",
          "Like my mom sending email chain letters or fox news articles.",
          "Like clockwork",
        ],
      },
      {
        name: ZARA,
        messages: [
          "I think terminally online is calling League of Legends, LoL?!",
          "Who does that?",
          "Also you meant the one who's married with the cute 3 year old?",
        ],
      },
      {
        name: SELF,
        messages: ["Ya"],
      },
    ],
  },
};
