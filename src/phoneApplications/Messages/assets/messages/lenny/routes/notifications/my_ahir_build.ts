import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "../../../antagonist_first_number/routes/routes";
import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const my_ahri_build: NotificationRouteFileType = {
  id: ROUTE_IDS_LENNY.NOTIFICATION_MY_AHRI_BUILD,
  name: "Let me tell you about my Ahri Build",
  purpose:
    "Shows that Lenny is trying to build a better bound with Protagonist.",
  delay: 2000,
  conditions: [
    {
      [MESSAGE_CONTACT_NAME.SPAM1]: {
        routes: {
          [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_WHAT_IS_WITH_THIS_SERIAL_STALKER_BULLSHIT]:
            {
              status: ROUTE_STATUS_TYPE.FINISHED,
            },
        },
      },
    },
    {
      [MESSAGE_CONTACT_NAME.SPAM1]: {
        routes: {
          [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.NOTIFICATION_DID_NOT_SEND_IMAGES]:
            {
              status: ROUTE_STATUS_TYPE.FINISHED,
            },
        },
      },
    },
  ],
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.LENNY,
      messages: [
        "So I've been fucking around somewhat with Ahri, ELO still shit but she seems very OP in laning phase but falls off very hard after around 20 mins, especially if enemy botlane is fed, I'm thinking if you learn Maokai finally we might have some good synergy",
      ],
    },
  ],
};
