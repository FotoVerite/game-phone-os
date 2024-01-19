import { ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES } from "../routes/routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const why_dont_you_respond4: NotificationRouteFileType = {
  id: ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_FOURTH_WHY_DONT_YOU_RESPOND,
  name: "Why don't you reply fourth notification",
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM2]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_THIRD_WHY_DONT_YOU_RESPOND]:
          {
            status: ROUTE_STATUS_TYPE.FINISHED,
            timeSince: 5000,
          },
        [ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.PROTAG_WHAT_IS_THIS_SERIAL_KILLER_BULLSHIT]:
          {
            status: ROUTE_STATUS_TYPE.AVAILABLE,
          },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.SPAM2,
      messages: [
        {
          type: MESSAGE_CONTENT.STRING,
          content: "You're right to feel so out of Michael's league",
        },
      ],
    },
  ],
};
