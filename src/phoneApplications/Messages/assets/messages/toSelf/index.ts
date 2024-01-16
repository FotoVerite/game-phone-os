import moment from "moment";

import { check_if_txt_is_working } from "./routes/check_if_txt_is_working";

import {
  DEFAULT_CONVERSATION_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const SELF = MESSAGE_CONTACT_NAME.PROTAGONIST;
export const toSelf: ConversationFileType = {
  full_name: "Protagonist",
  name: MESSAGE_CONTACT_NAME.MY_SELF,
  tags: [SELF],
  colors: ["blue", "#363243"],
  phone_number: "(315)-242-2424",
  age: 39,
  heroImage: DEFAULT_CONVERSATION_INFO.avatar,
  interfaceColor: "blue",
  leaveAsDelivered: true,
  notificationRoutes: [],
  routes: [check_if_txt_is_working],
  exchanges: [
    {
      time: moment().subtract(5, "minutes").toISOString(),
      exchanges: [
        {
          name: MESSAGE_CONTACT_NAME.SELF,
          messages: ["Is this working?"],
        },
      ],
    },
  ],
};
