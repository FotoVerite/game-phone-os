// Description: OP and his brother discuss a reddit creepypaste/rumor.
// Point: Give context for the setting of the game and set tone of the horror. Also so how fractured his family is

import { ROUTE_IDS_CAT_FACTS } from "../../../cat_facts/routes/routes";
import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

const SELF = MESSAGE_CONTACT_NAME.SELF;

enum OPTIONS_LEONARD_PROTAG_BECAUSE_YOU_THINK_ITS_FUNNY {
  A = "Because you think it's funny",
}
const OPTIONS = OPTIONS_LEONARD_PROTAG_BECAUSE_YOU_THINK_ITS_FUNNY;

export const because_you_think_its_funny: ChoosableRouteType = {
  id: ROUTE_IDS_LENNY.PROTOG_BECAUSE_YOU_THINK_ITS_FUNNY,
  options: Object.values(OPTIONS),
  name: "Because you think it's funny",
  purpose:
    "Shows that Protagonist doesn't trust Lenny and think he'll send stupid pranks",
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.PROTAG_WHY_AM_I_GETTING_CAT_FACTS]: {
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
          {
            type: MESSAGE_CONTENT.STRING,
            content:
              "Ugh, another one, I need to block it. Clowder of cats my ass",
            conditions: {
              [MESSAGE_CONTACT_NAME.CAT_FACTS]: {
                routes: {
                  [ROUTE_IDS_CAT_FACTS.NOTIFICATION_CLOWDER_OF_CATS]: {
                    status: ROUTE_STATUS_TYPE.FINISHED,
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
};
