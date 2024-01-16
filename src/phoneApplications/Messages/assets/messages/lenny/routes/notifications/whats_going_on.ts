import { ROUTE_IDS_LENNY } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const my_ahri_build: NotificationRouteFileType = {
  id: ROUTE_IDS_LENNY.NOTIFICATION_WHAT_IS_GOING_ON,
  name: "Lenny asks if Protagonist is Okay",
  delay: 12000,
  conditions: [
    {
      [MESSAGE_CONTACT_NAME.LENNY]: {
        routes: {
          [ROUTE_IDS_LENNY.I_HAVE_NO_IDEA]: {
            status: ROUTE_STATUS_TYPE.FINISHED,
          },
        },
      },
    },
  ],
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.LENNY,
      messages: [
        "Are you okay?",
        "You can't just send a txt like that and go silent.",
      ],
    },
  ],
};
