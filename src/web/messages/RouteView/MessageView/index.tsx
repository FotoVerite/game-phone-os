import React, { FC } from "react";

import StringMessage from "./StringMessage";

import {
  MESSAGE_CONTENT,
  isContentWithMeta,
} from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import { MessageContentType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const MessageView: FC<{
  name: string;
  colors: string[];
  content: MessageContentType;
}> = ({ content, name, colors }) => {
  if (isContentWithMeta(content)) {
    switch (content.type) {
      case MESSAGE_CONTENT.STRING:
        return <StringMessage colors={colors} name={name} content={content} />;
      default:
        return <></>;
    }
  } else {
    return (
      <StringMessage
        colors={colors}
        name={name}
        content={{ type: MESSAGE_CONTENT.STRING, content }}
      />
    );
  }
};

export default MessageView;
