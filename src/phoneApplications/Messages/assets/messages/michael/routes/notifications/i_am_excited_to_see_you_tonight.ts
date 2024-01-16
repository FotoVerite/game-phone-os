import { ROUTE_IDS_ZARA_BENTHAM } from "../../../zara/routes/routes";
import { ROUTE_IDS_MICHAEL_MYERS } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const i_am_excited_to_see_you_tonight: NotificationRouteFileType = {
  id: ROUTE_IDS_MICHAEL_MYERS.NOTIFICATION_IM_EXCITED_FOR_TONIGHT,
  delay: 7500,
  conditions: {
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.PROTAG_I_FELL_FOR_SPAM]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
        [ROUTE_IDS_ZARA_BENTHAM.PROTAG_MY_BRO_IS_ANNOYING]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.MICHAEL,
      messages: [
        "Yo, so we’re still on for tonight? I can’t believe it’s been two weeks.",
      ],
    },
  ],
};
