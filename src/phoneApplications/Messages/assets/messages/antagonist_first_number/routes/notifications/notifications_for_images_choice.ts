import { ROUTE_IDS_MICHAEL_MYERS } from "../../../michael/routes/routes";
import { ROUTE_IDS_ZARA_BENTHAM } from "../../../zara/routes/routes";
import { OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT } from "../choosable/protagonist_choice_to_send_images_or_not";
import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "../routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  NotificationRouteFileType,
  NotificationRouteType,
  ROUTE_STATUS_TYPE,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

export const notification_sent_images: NotificationRouteFileType = {
  id: ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.NOTIFICATION_DID_SEND_IMAGES,
  delay: 2500,
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM1]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT]:
          {
            chosen: [OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT.A],
          },
      },
    },
    [MESSAGE_CONTACT_NAME.MICHAEL]: {
      routes: {
        [ROUTE_IDS_MICHAEL_MYERS.NOTIFICATION_IM_EXCITED_FOR_TONIGHT]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
        },
      },
    },
  },
  exchanges: [
    {
      name: MESSAGE_CONTACT_NAME.SPAM1,
      messages: ["I'm starting to see the beauty in these images"],
    },
  ],
};

export const did_not_send_images: NotificationRouteFileType = {
  id: ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.NOTIFICATION_DID_NOT_SEND_IMAGES,
  delay: 2500,
  conditions: {
    [MESSAGE_CONTACT_NAME.SPAM1]: {
      routes: {
        [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT]:
          {
            chosen: [OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT.B],
          },
      },
    },
    [MESSAGE_CONTACT_NAME.MICHAEL]: {
      routes: {
        [ROUTE_IDS_MICHAEL_MYERS.NOTIFICATION_IM_EXCITED_FOR_TONIGHT]: {
          status: ROUTE_STATUS_TYPE.FINISHED,
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
      name: MESSAGE_CONTACT_NAME.SPAM1,
      messages: ["Why so quiet?", "Aren't we friends?"],
    },
  ],
};
