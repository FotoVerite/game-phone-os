import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "../../antagonist_first_number/routes/routes";
import { ROUTE_IDS_ZARA_BENTHAM } from "../../zara/routes/routes";
import { ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES } from "../routes/routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants/index";
import { ROUTE_STATUS_TYPE } from "@/src/phoneApplications/Messages/hooks/routes/types";

export const dont_you_miss_me = {
  id: ROUTE_IDS_ANTAGONIST_BLOCKED_ROUTES.NOTIFICATION_DONT_YOU_MISS_ME,
  name: "Don't you miss me",
  delay: 500,
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM1]: {
      blocked: true,
      routes: {
        [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.NOTIFICATION_DID_SEND_IMAGES]: {
          status: ROUTE_STATUS_TYPE.CONDITIONS_NOT_MET,
        },
        [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.NOTIFICATION_DID_NOT_SEND_IMAGES]: {
          status: ROUTE_STATUS_TYPE.CONDITIONS_NOT_MET,
        },
      },
    },
    [MESSAGE_CONTACT_NAME.ZARA]: {
      routes: {
        [ROUTE_IDS_ZARA_BENTHAM.PROTAG_I_DONT_FEEL_SECURE_WITH_MICHAEL]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.SPAM2,
      messages: ["Don't you miss me?"],
    },
  ],
};
