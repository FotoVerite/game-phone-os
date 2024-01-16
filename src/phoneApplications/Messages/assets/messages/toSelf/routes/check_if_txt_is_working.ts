import { TO_SELF_IDS } from "./routes";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { ChoosableRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";

const SELF = MESSAGE_CONTACT_NAME.SELF;

enum OPTIONS {
  A = "Okay, lets try it now without wifi",
}

export const check_if_txt_is_working: ChoosableRouteType = {
  id: TO_SELF_IDS.CHECK_IF_TEXT_IS_WORKING,
  options: [{ label: OPTIONS.A, value: OPTIONS.A }],
  routes: {
    [OPTIONS.A]: [
      {
        name: SELF,
        messages: [OPTIONS.A, "And now lets try texting from my computer"],
      },
    ],
  },
};
