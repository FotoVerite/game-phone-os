import { ROUTE_IDS_ZARA_BENTHAM } from "../../../zara/routes/routes";
import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const lenny_want_to_hear_something_scary: NotificationRouteFileType = {
  id: ROUTE_IDS_LENNY.NOTIFICATION_WANT_TO_HEAR_SOMETHING_SCARY,
  name: "Want to hear something scary I heard on reddit",
  delay: 12000,
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
      name: MESSAGE_CONTACT_NAME.LENNY,
      messages: ["I read the most fucked up shit on reddit today"],
    },
  ],
};
