import { ROUTE_IDS_LENNY } from "../../../lenny/routes/routes";
import { ROUTE_IDS_EMMA } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const your_mom_is_a_cunt: NotificationRouteFileType = {
  id: ROUTE_IDS_EMMA.YOUR_MOM_IS_A_CUNT,
  name: "Emma replies about her true feeling about her mother in law",
  purpose:
    "Brief glimpse into how Leonard works with his wife and that maybe Protagonist isn't off base with his assessment of his family.",
  delay: 2000,
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.YES_EXACTLY]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.EMMA,
      messages: ["Your Mom is a raging cunt. :D"],
    },
  ],
};
