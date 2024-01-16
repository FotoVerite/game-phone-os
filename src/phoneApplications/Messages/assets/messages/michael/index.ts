import avatar from "./assets/michael.jpg";
import { i_feel_wrong } from "./routes/choosable/I_feel_wrong";
import { michael_about_tonight_reply } from "./routes/choosable/about_tonight_reply";
import { i_am_excited_to_see_you_tonight } from "./routes/notifications/i_am_excited_to_see_you_tonight";
import { MESSAGE_CONTACT_NAME } from "../../../constants";
import { ConversationFileType } from "../../../hooks/useConversations/types";

export const michael: ConversationFileType = {
  full_name: MESSAGE_CONTACT_NAME.MICHAEL,
  displayName: "Maybe: Michael",
  age: 35,
  phoneNumber: "(201)-242-2424",
  colors: ["#f54295", "#8900fa"],
  tags: [MESSAGE_CONTACT_NAME.MICHAEL, "love", "boyfriend", "sex"],
  heroImage: avatar,
  interfaceColor: "#f54295",
  notificationRoutes: [i_am_excited_to_see_you_tonight],
  routes: [michael_about_tonight_reply, i_feel_wrong],
  exchanges: [],
};
