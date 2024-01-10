import { MESSAGE_CONTACT_NAME } from "@Components/phoneApplications/Messages/constants";
import { ROUTE_STATUS_TYPE } from "@Components/phoneApplications/Messages/hooks/routes/types";

import { LENNY_ROUTE_IDS } from "../../../lenny/routes/routes";
import { CAT_FACT_IDS } from "../routes";

export const cat_facts_first_notification = {
  id: CAT_FACT_IDS.FIRST_NOTIFICATION,
  delay: 5500,
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [LENNY_ROUTE_IDS.MIDNIGHT_SOCIETY]: {
          status: ROUTE_STATUS_TYPE.STARTED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.CAT_FACTS,
      messages: [
        "Thank You for signing up for Cat Facts! You will now receive daily facts about cats! >o<",
      ],
    },
  ],
};
