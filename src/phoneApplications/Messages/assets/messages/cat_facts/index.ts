import { clowder_of_cats } from "./routes/notifications/clowder_of_cats";
import { cat_facts_first_notification } from "./routes/notifications/signup_notification";

import {
  DEFAULT_CONVERSATION_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const NAME = MESSAGE_CONTACT_NAME.CAT_FACTS;
const cat_facts: ConversationFileType = {
  full_name: MESSAGE_CONTACT_NAME.CAT_FACTS,
  phoneNumber: "555-555-5555",
  displayName: "KTHXBYE",
  colors: DEFAULT_CONVERSATION_INFO.colors,
  tags: [NAME],
  blockable: true,
  heroImage: DEFAULT_CONVERSATION_INFO.avatar,
  interfaceColor: DEFAULT_CONVERSATION_INFO.colors[0],
  notificationRoutes: [cat_facts_first_notification, clowder_of_cats],
  routes: [],
  exchanges: [],
};

export default cat_facts;
