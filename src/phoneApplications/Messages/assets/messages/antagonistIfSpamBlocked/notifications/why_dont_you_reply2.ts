import { ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES } from "../routes/routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const why_dont_you_respond2: NotificationRouteFileType = {
  id: ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_SECOND_WHY_DONT_YOU_RESPOND,
  name: "Why don't you reply second notification",
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM2]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_WHY_DONT_YOU_RESPOND]:
          {
            status: ROUTE_STATUS_TYPE.FINISHED,
            timeSince: 12000,
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
          content: "Why don't you reply?",
        },
        {
          type: MESSAGE_CONTENT.STRING,
          content: "You just want to ignore me",
        },
      ],
    },
  ],
};
