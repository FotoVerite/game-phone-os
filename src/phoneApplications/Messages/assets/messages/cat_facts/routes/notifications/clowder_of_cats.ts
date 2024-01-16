import { ROUTE_IDS_LENNY } from "../../../lenny/routes/routes";
import { ROUTE_IDS_CAT_FACTS } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { ROUTE_STATUS_TYPE } from "@/src/phoneApplications/Messages/hooks/routes/types";

export const clowder_of_cats = {
  id: ROUTE_IDS_CAT_FACTS.NOTIFICATION_CLOWDER_OF_CATS,
  name: "Clowder of Cats",
  delay: 5000,
  conditions: {
    [MESSAGE_CONTACT_NAME.LENNY]: {
      routes: {
        [ROUTE_IDS_LENNY.PROTAG_WHY_AM_I_GETTING_CAT_FACTS]: {
          status: ROUTE_STATUS_TYPE.STARTED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.CAT_FACTS,
      messages: ["A group of cats is known as a clowder."],
    },
  ],
};
