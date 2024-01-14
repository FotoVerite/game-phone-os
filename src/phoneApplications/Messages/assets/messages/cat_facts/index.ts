import { clowder_of_cats } from "./routes/notifications/clowder_of_cats";
import { cat_facts_first_notification } from "./routes/notifications/first_notification";

import {
  MESSAGE_CONTACT_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const NAME = MESSAGE_CONTACT_NAME.CAT_FACTS;
const cat_facts: ConversationFileType = {
  name: NAME,
  full_name: "Cat Facts",
  tags: [NAME],
  blockable: true,
  heroImage: MESSAGE_CONTACT_INFO[NAME].avatar,
  interfaceColor: MESSAGE_CONTACT_INFO[NAME].colors[0],
  notificationRoutes: [cat_facts_first_notification, clowder_of_cats],
  routes: [],
  exchanges: [],
};

export default cat_facts;
