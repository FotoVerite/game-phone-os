import { ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES } from "../routes/routes";

import {
  MESSAGE_CONTACT_NAME,
  SNAPSHOT_NAMES,
} from "@/src/phoneApplications/Messages/constants";
import {
  EFFECT_TYPE,
  MESSAGE_CONTENT,
} from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  ChoosableRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export enum SPAM2_WHAT_IS_WITH_THIS_SERIAL_STALKER_BULLSHIT_OPTIONS {
  A = "What the fuck are you on?",
}

const OPTIONS = SPAM2_WHAT_IS_WITH_THIS_SERIAL_STALKER_BULLSHIT_OPTIONS;
const SPAM = MESSAGE_CONTACT_NAME.SPAM2;
const SELF = MESSAGE_CONTACT_NAME.SELF;

export const antagonist_blocked_what_is_this_serial_killer_bullshit: ChoosableRouteType =
  {
    id: ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.PROTAG_WHAT_IS_THIS_SERIAL_KILLER_BULLSHIT,
    name: "What the fuck is wrong with you?",
    options: Object.values(OPTIONS),
    conditions: {
      [MESSAGE_CONTACT_NAME.SPAM2]: {
        routes: {
          [ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_DONT_YOU_MISS_ME]: {
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
          name: SPAM,
          messages: [
            "I'm just being friendly",
            "Much more friendlier than you",
            "You really have a very shoddy vocabulary",
          ],
        },
        {
          name: SELF,
          messages: [
            {
              type: MESSAGE_CONTENT.STRING,
              content: "What is with this serial stalker bullshit?!",
              effect: {
                type: EFFECT_TYPE.BACKGROUND_SNAPSHOT,
                data: { filename: SNAPSHOT_NAMES.SERIAL_SNAPSHOT },
              },
            },
          ],
        },
        {
          name: SPAM,
          messages: ["That's not very nice"],
        },
      ],
    },
  };
