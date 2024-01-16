import { but_seriously } from "./routes/but_seriously";
import { my_quads } from "./routes/my_quads";
import {
  DEFAULT_CONVERSATION_INFO,
  MESSAGE_CONTACT_NAME,
} from "../../../constants";
import { ConversationFileType } from "../../../hooks/useConversations/types";

const NAME = MESSAGE_CONTACT_NAME.MILEENA;
export const mileena: ConversationFileType = {
  full_name: NAME,
  displayName: NAME,
  phoneNumber: "(232)-232-2323",
  tags: [NAME],
  heroImage: DEFAULT_CONVERSATION_INFO.avatar,
  colors: DEFAULT_CONVERSATION_INFO.colors,
  interfaceColor: DEFAULT_CONVERSATION_INFO.colors[0],
  exchanges: [],
  routes: [my_quads, but_seriously],
};
