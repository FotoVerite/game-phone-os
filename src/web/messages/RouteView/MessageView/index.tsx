import React, { FC } from "react";

import StringMessage from "./StringMessage";
import { ConversationFilesStoreType } from "../../ConversationFilesProvider/types";
import { useInfoContext } from "../../contexts/InfoContext";

import {
  MESSAGE_CONTENT,
  isContentWithMeta,
} from "@/src/phoneApplications/Messages/hooks/contentWithMetaTypes";
import { MessageContentType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const MessageView: FC<{
  name: string;
  content: MessageContentType;
}> = ({ content, name }) => {
  const store = useInfoContext<ConversationFilesStoreType>();
  const colors = store().colorHash[name];
  if (isContentWithMeta(content)) {
    switch (content.type) {
      case MESSAGE_CONTENT.STRING:
        return <StringMessage colors={colors} content={content} />;
      default:
        return <></>;
    }
  } else {
    return (
      <StringMessage
        colors={colors}
        content={{ type: MESSAGE_CONTENT.STRING, content }}
      />
    );
  }
};

export default MessageView;
