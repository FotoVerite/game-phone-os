import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { NotificationRouteFileType } from "@/src/phoneApplications/Messages/hooks/routes/types";

export const update_on_the_phone: NotificationRouteFileType = {
  id: ROUTE_IDS_ZARA_BENTHAM.NOTIFICATION_DID_YOU_GET_YOUR_ACCOUNT_BACK,
  name: "Did you get your phone account back notification",
  delay: 1000,
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM3]: {
      blocked: true,
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.ZARA,
      messages: ["How's the phone situation"],
    },
  ],
};
