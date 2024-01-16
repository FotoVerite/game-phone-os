import { TO_SELF_IDS } from "../../../toSelf/routes/routes";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const how_is_the_phone_coming: NotificationRouteFileType = {
  id: ROUTE_IDS_ZARA_BENTHAM.NOTIFICATION_HOW_IS_THE_NEW_PHONE,
  name: "How's the Phone?",
  description: "Zara ask PO how he is liking his new phone",
  delay: 1000,
  conditions: {
    [MESSAGE_CONTACT_NAME.SELF]: {
      routes: {
        [TO_SELF_IDS.CHECK_IF_TEXT_IS_WORKING]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.ZARA,
      messages: ["How's the new phone coming along?"],
    },
  ],
};
