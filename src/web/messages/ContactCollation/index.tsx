import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  ChoosableRouteType,
  NotificationRouteType,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";
import { ReactElement } from "react";
const contactFiles = require.context("./contacts", false, /\.tsx$/);

export type ContactCardType = {
  name: string;
  phoneNumber: string;
  colors: string[];
  description: ReactElement;
  routes: (ChoosableRouteType | NotificationRouteType)[];
};

export type ContactCardHashType = {
  [key: string]: ContactCardType;
};
const contactList = contactFiles
  .keys()
  .map((contact) => contactFiles(contact)) as [{ default: ContactCardType }];

const contactCards = contactList.reduce((acc, contact) => {
  acc[contact.default.name] = contact.default;
  return acc;
}, {} as ContactCardHashType);

export default contactCards;
