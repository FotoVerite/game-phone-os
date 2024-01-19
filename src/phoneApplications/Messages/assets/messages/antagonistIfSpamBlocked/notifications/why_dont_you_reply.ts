import { ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES } from "../routes/routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { ROUTE_STATUS_TYPE } from "@/src/phoneApplications/Messages/hooks/routes/types";

export const why_dont_you_respond = {
  id: ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_WHY_DONT_YOU_RESPOND,
  name: "Why don't you reply?",
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM2]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_DONT_YOU_MISS_ME]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
          timeSince: 15000,
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
      messages: ["Why don't you reply?", "You just want to ignore me"],
    },
  ],
};
