import {
  OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT,
  protagonist_choice_to_send_images_or_not,
} from "./routes/choosable/protagonist_choice_to_send_images_or_not";
import { spam1_exchange_one } from "./routes/choosable/spam1_exchange_one";
import { what_is_with_this_serial_killer_bullshit } from "./routes/choosable/what_is_with_this_serial_stalker_bullshit";
import {
  did_not_send_images,
  notification_sent_images,
} from "./routes/notifications/notifications_for_images_choice";
import { spam1_introduction } from "./routes/notifications/spam_introduction";
import { ROUTE_IDS_ANTAGONIST_FIRST_NUMBER } from "./routes/routes";
import {
  DEFAULT_CONVERSATION_INFO,
  MESSAGE_CONTACT_NAME,
} from "../../../constants";
import { ROUTE_STATUS_TYPE } from "../../../hooks/routes/types";
import { ConversationFileType } from "../../../hooks/useConversations/types";

const NAME = MESSAGE_CONTACT_NAME.SPAM1;
const antagonist_first_number: ConversationFileType = {
  full_name: NAME,
  age: 39,
  displayName: "1-222-666-1337",
  phoneNumber: "1-222-666-1337",
  tags: [NAME],
  colors: DEFAULT_CONVERSATION_INFO.colors,
  // effects: [
  //   {
  //     type: EFFECT_TYPE.LOGLINE_REPLACEMENT,
  //     conditions: {
  //       [MESSAGE_CONTACT_NAME.MICHAEL]: { views: { gt: 1 } },
  //       [MESSAGE_CONTACT_NAME.ZARA]: { views: { gt: 8 } },
  //     },
  //     data: <Jumbled message="You'll never be good enough" />,
  //   },
  //   {
  //     type: EFFECT_TYPE.LOGLINE_REPLACEMENT,
  //     conditions: { [MESSAGE_CONTACT_NAME.MICHAEL]: { views: { gt: 1 } } },
  //     data: <P>You're not the one</P>,
  //   },
  // ],
  heroImage: DEFAULT_CONVERSATION_INFO.avatar,
  interfaceColor: DEFAULT_CONVERSATION_INFO.colors[0],
  notificationRoutes: [
    spam1_introduction,
    notification_sent_images,
    did_not_send_images,
  ],
  blockable: {
    conditions: {
      [MESSAGE_CONTACT_NAME.SPAM1]: {
        routes: {
          [ROUTE_IDS_ANTAGONIST_FIRST_NUMBER.PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT]:
            {
              chosen: [
                OPTIONS_ANTAGONIST_PROTAG_CHOICE_TO_SEND_IMAGES_OR_NOT.B,
              ],
              status: ROUTE_STATUS_TYPE.FINISHED,
            },
        },
      },
    },
  },
  exchanges: [],
  routes: [
    spam1_exchange_one,
    protagonist_choice_to_send_images_or_not,
    what_is_with_this_serial_killer_bullshit,
  ],
};

export default antagonist_first_number;
