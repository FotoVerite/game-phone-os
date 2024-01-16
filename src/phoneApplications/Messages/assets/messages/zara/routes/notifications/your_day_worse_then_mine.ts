import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

export const your_day_worse_then_mine: NotificationRouteFileType = {
  id: ROUTE_IDS_ZARA_BENTHAM.NOTIFICATION_YOUR_DAY_IS_WORSE_THAN_MINE,
  delay: 3000,
  conditions: {
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.PROTAG_I_BORKED_MY_PHONE]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.ZARA,
      messages: ["Trying to decide if your day is worse then mine..."],
    },
  ],
};
