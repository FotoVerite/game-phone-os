import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const im_still_confused: NotificationRouteFileType = {
  id: ROUTE_IDS_LENNY.NOTIFICATION_IM_STILL_CONFUSED,
  name: "I'm still confused",
  description:
    "Lenny follows up that he doesn't get why Protagonist is asking about Cat Facts.",
  delay: 2000,
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.PROTOG_BECAUSE_YOU_THINK_ITS_FUNNY]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.LENNY,
      messages: [
        "I'm still confused. You're getting spam messages from cat facts?",
      ],
    },
  ],
};
