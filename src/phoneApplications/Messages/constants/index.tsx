import defaultAvatar from "../assets/avatars/unknown.jpeg";

export const DEFAULT_CONVERSATION_INFO = {
  avatar: defaultAvatar,
  colors: ["#6b6b6d", "#363243"],
};

export enum SNAPSHOT_NAMES {
  BLOCK_ANTAGONIST = "BLOCK_ANTAGONIST",
  SERIAL_SNAPSHOT = "SERIAL_SNAPSHOT",
  ZARA_FUCK_OFF = "ZARA_FUCK_OFF",
}

export enum MESSAGE_CONTACT_NAME {
  CAT_FACTS = "Cat Facts",
  CHRIS = "Chris Chen",
  EMMA = "Emma",
  LENNY = "Leonard",
  MICHAEL = "Michael Myers",
  MILEENA = "Mileena Powers",
  MY_SELF = "SELF",
  SELF = "Self",
  PROTAGONIST = "Protagonist",
  DEFAULT = "Default",
  SEAMLESS = "Seamless",
  SPAM1 = "Spam Messages First Number",
  SPAM2 = "Spam Messages Second Number",
  SPAM3 = "Spam Messages Third Number",
  SPAM4 = "Spam Messages Fourth Number",
  SPAM5 = "Spam Messages Fifth Number",
  SPAM6 = "Spam Messages Sixth Number",
  ZARA = "Zara Benham",
}

export const MESSAGE_DISPLAY_NAME: {
  [key in MESSAGE_CONTACT_NAME]: string;
} = {
  [MESSAGE_CONTACT_NAME.CAT_FACTS]: "KTHXBYE",
  [MESSAGE_CONTACT_NAME.CHRIS]: "Chris Chen",
  [MESSAGE_CONTACT_NAME.DEFAULT]: "",
  [MESSAGE_CONTACT_NAME.EMMA]: "Maybe: Emma",
  [MESSAGE_CONTACT_NAME.LENNY]: "Maybe: Lenny",
  [MESSAGE_CONTACT_NAME.MICHAEL]: "Maybe: Micahel",
  [MESSAGE_CONTACT_NAME.MILEENA]: "Mileena Powers",
  [MESSAGE_CONTACT_NAME.MY_SELF]: "Fotoverite",
  [MESSAGE_CONTACT_NAME.SELF]: "Fotoverite",
  [MESSAGE_CONTACT_NAME.PROTAGONIST]: "Fotoverite",
  [MESSAGE_CONTACT_NAME.SEAMLESS]: "40045",
  [MESSAGE_CONTACT_NAME.SPAM1]: "1-222-666-1337",
  [MESSAGE_CONTACT_NAME.SPAM2]: "1-223-666-1337",
  [MESSAGE_CONTACT_NAME.SPAM3]: "1-224-666-1337",
  [MESSAGE_CONTACT_NAME.SPAM4]: "1-225-666-1337",
  [MESSAGE_CONTACT_NAME.SPAM5]: "1-226-666-1337",
  [MESSAGE_CONTACT_NAME.SPAM6]: "1-227-666-1337",
  [MESSAGE_CONTACT_NAME.ZARA]: "Maybe: Zara",
};
