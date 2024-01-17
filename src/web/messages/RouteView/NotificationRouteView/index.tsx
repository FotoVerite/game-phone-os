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
    <YStack backgroundColor="$gray10" borderRadius="$2">
      {enumerateBlocks(route.exchanges)}
    </YStack>
  );
};

export default NotificationRouteView;
