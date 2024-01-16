import { ROUTE_IDS_ZARA_BENTHAM } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { NotificationRouteFileType } from "@/src/phoneApplications/Messages/hooks/routes/types";

export const zara_why_are_you_telling_me_to_fuck_off: NotificationRouteFileType =
  {
    id: ROUTE_IDS_ZARA_BENTHAM.WHY_ARE_YOU_TELLING_ME_TO_FUCK_OFF,
    purpose: "Showing the chaos Antagonist is starting to sow",
    delay: 2500,
    conditions: {},
    exchanges: [
      {
        name: MESSAGE_CONTACT_NAME.ZARA,
        messages: ["Why are you telling me to fuck off?"],
      },
    ],
  };
