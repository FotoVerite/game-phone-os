import { your_mom_is_a_cunt } from "./routes/notifications/your_mom_is_a_cunt";

import {
  DEFAULT_CONVERSATION_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const EMMA = MESSAGE_CONTACT_NAME.EMMA;
export const emma: ConversationFileType = {
  full_name: EMMA,
  displayName: "Maybe: Emma",
  tags: [EMMA],
  heroImage: DEFAULT_CONVERSATION_INFO.avatar,
  colors: DEFAULT_CONVERSATION_INFO.colors,
  interfaceColor: DEFAULT_CONVERSATION_INFO.colors[0],
  notificationRoutes: [your_mom_is_a_cunt],
  exchanges: [],
  routes: [],
};
