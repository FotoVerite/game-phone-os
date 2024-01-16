import { ROUTE_IDS_ZARA_BENTHAM } from "../../../zara/routes/routes";
import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const spam1_introduction: NotificationRouteType = {
  id: ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.NOTIFICATION_INTRODUCTION,
  delay: 5000,
  conditions: {
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.PROTAG_I_WATCHED_YOUR_NEW_VIDEO]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.SPAM1,
      messages: ["How's is today going?"],
    },
  ],
};
