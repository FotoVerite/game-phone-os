import React, { FC } from "react";
import { YStack } from "tamagui";

import enumerateBlocks from "../../utility/enumerateBlocks";

import { NotificationRouteFileType } from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ConversationFileType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const NotificationRouteView: FC<{
  route: NotificationRouteFileType;
  info: ConversationFileType;
}> = ({ info, route }) => {
  return (
    <YStack
      alignSelf="center"
      backgroundColor="$gray10"
      borderRadius="$2"
      maw={700}
      width={"100%"}
    >
      {enumerateBlocks(route.exchanges)}
    </YStack>
  );
};

export default NotificationRouteView;
