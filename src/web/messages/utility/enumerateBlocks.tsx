import React from "react";
import { YGroup, H4 } from "tamagui";

import MessageView from "../RouteView/MessageView";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import { ExchangeBlockType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const enumerateBlocks = (blocks: ExchangeBlockType[]) => {
  return blocks.map((block, index) => {
    const alignment =
      block.name === MESSAGE_CONTACT_NAME.SELF ? "flex-end" : "flex-start";

    return (
      <YGroup
        f={1}
        key={`block-group-${index}-${block.name}`}
        p="$4"
        alignSelf={alignment}
        alignItems={alignment}
      >
        <H4>{block.name}</H4>
        {block.messages.map((message, innerIndex) => (
          <MessageView
            key={`message-${index}-${innerIndex}`}
            name={block.name}
            content={message}
          />
        ))}
      </YGroup>
    );
  });
};

export default enumerateBlocks;
