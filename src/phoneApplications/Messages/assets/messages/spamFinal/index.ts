import {
  DEFAULT_CONVERSATION_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const NAME = MESSAGE_CONTACT_NAME.SPAM1;
export const spam1: ConversationFileType = {
  full_name: NAME,
  tags: [NAME],
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
  notificationRoutes: [],
  exchanges: [],
  routes: [],
};
