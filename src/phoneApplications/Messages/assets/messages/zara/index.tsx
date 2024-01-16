import avatar from "./assets/avatar.jpg";
import { i_dont_know_what_to_do_with_myself } from "./routes/choosable/I_really_dont_know_what_to_do_with_myself";
import { spammer_is_being_weird } from "./routes/choosable/after_weirdness_starts/spammer_is_being_weird";
import { borked_phone } from "./routes/choosable/protag_I_borked_my_phone";
import { can_i_have_chris } from "./routes/choosable/can_i_have_chris";
import { can_i_have_mileena } from "./routes/choosable/can_i_have_mileena";
import { zara_contact_conversation } from "./routes/choosable/contact_conversation";
import { your_new_video } from "./routes/choosable/hows_the_new_video";
import { i_dont_feel_secure } from "./routes/choosable/i_dont_feel_secure";
import { i_fell_for_spam } from "./routes/choosable/i_fell_for_spam";
import { my_bro_is_being_annoying } from "./routes/choosable/my_bro_is_being_annoying";
import { zara_do_you_want_any_contacts } from "./routes/notifications/do_you_want_me_to_come_over";
import { how_is_the_phone_coming } from "./routes/notifications/how_is_the_new_phone";
import { update_on_the_phone } from "./routes/notifications/hows_getting_your_account_back";
import { your_day_worse_then_mine } from "./routes/notifications/your_day_worse_then_mine";
import { MESSAGE_CONTACT_NAME } from "../../../constants";
import { ConversationFileType } from "../../../hooks/useConversations/types";

const zara: ConversationFileType = {
  displayName: "Maybe: Zara",
  full_name: MESSAGE_CONTACT_NAME.ZARA,
  phoneNumber: "(212)-979-2934",
  tags: [MESSAGE_CONTACT_NAME.ZARA, "Hopescope", "Panopticon", "Ads", "Money"],
  colors: ["#b46be4", "#363243"],
  description: [
    `Successful beauty/skincare youtuber in the style of hopescope/cassandra bankson. Perky and outgoing and drawn to drama. Best friends with PO and dislikes Michael.`,
  ],
  age: 37,
  heroImage: avatar,
  interfaceColor: "#b46be4",
  notificationRoutes: [
    how_is_the_phone_coming,
    your_day_worse_then_mine,
    zara_do_you_want_any_contacts,
    update_on_the_phone,
  ],
  routes: [
    borked_phone,
    your_new_video,
    my_bro_is_being_annoying,
    i_fell_for_spam,
    zara_contact_conversation,
    i_dont_know_what_to_do_with_myself,
    i_dont_feel_secure,
    spammer_is_being_weird,
    can_i_have_chris,
    can_i_have_mileena,
  ],
  exchanges: [],
};

export default zara;
