import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { NotificationRouteFileType } from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

export const zara_do_you_want_any_contacts: NotificationRouteFileType = {
  id: ROUTE_IDS_ZARA_BENTHAM.NOTIFICATION_DO_YOU_WANT_ME_TO_COME_OVER,
  delay: 2500,

  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.ZARA,
      messages: ["Do you want me to come over?"],
    },
  ],
};
