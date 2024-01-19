import { ROUTE_IDS_MICHAEL_MYERS } from "../../../michael/routes/routes";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const zara_do_you_want_any_contacts: NotificationRouteFileType = {
  id: ROUTE_IDS_ZARA_BENTHAM.NOTIFICATION_DO_YOU_WANT_ANY_CONTACTS,
  name: "Do you want any contacts?",
  delay: 2500,
  conditions: {
    [MESSAGE_CONTACT_NAME.MICHAEL]: {
      routes: {
        [ROUTE_IDS_MICHAEL_MYERS.NOTIFICATION_IM_EXCITED_FOR_TONIGHT]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.I_AM_BEING_HARASSED]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.ZARA,
      messages: ["Do you want any of our mutual contacts"],
    },
  ],
};
