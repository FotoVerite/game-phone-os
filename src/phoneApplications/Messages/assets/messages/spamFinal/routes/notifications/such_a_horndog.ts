import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { NotificationRouteFileType } from "@/src/phoneApplications/Messages/hooks/routes/types";

import { SPAM_FINAL_ROUTE_IDS } from "../routes";

export const such_a_horndog: NotificationRouteFileType = {
  id: SPAM_FINAL_ROUTE_IDS.YOUR_BOY_IS_SUCH_A_HORNDOG,
  delay: 500,
  conditions: [],
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.SPAM4,
      messages: ["Your boy is such a horndog"],
    },
  ],
};
