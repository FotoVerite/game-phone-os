import image from "@/src/notifications/NotificationPopupContainer/NotificationPopup/assets/default.jpeg";
import MediaContextProvider from "@/src/phoneApplications/Messages/context/Media";
import { MESSAGE_CONTENT } from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import { ElementType } from "react";
import { View } from "react-native";

import { SkImageBubble } from ".";
import { SkBubbleType } from "../types";

export default {
  title: "Bubbles/SkImageBubble",
  component: SkImageBubble,
};

export const Default: {
  args: SkBubbleType;
  decorators: any;
} = {
  args: {
    ID: "123",
    type: MESSAGE_CONTENT.STRING,
    width: 300,
    height: 300,
    addressee: true,
    isLastInExchange: false,
    content: image,
    colors: [],
    offset: 0,
    dispatch: () => {},
    setAsResolved: () => {},
  },
  decorators: [
    (Story: ElementType) => (
      <MediaContextProvider>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Story />
        </View>
      </MediaContextProvider>
    ),
  ],
};
