import { ROUTE_IDS_LENNY } from "../../../lenny/routes/routes";
import { ROUTE_IDS_CAT_FACTS } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { ROUTE_STATUS_TYPE } from "@/src/phoneApplications/Messages/hooks/routes/types";

export const cat_facts_first_notification = {
  id: ROUTE_IDS_CAT_FACTS.NOTIFICATION_SIGNUP,
  name: "Cat Fact Signup",
  delay: 5500,
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.PROTAG_DOES_HE_WANT_TO_HEAR_THE_STORY_CHOICES]: {
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
