import React, { FC } from "react";
import { H2, Text, YStack } from "tamagui";

import useRouteParams from "@/app/messages/hooks/useRouteParams";
import {
  isChoosableRoute,
  isNotificationRoute,
} from "@/src/phoneApplications/Messages/hooks/routes/guards";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider/types";
import ChoosableRouteView from "@/src/web/messages/RouteView/ChoosableRouteView";
import NotificationRouteView from "@/src/web/messages/RouteView/NotificationRouteView";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

const Page: FC = () => {
  const { contact_id, id } = useRouteParams();
  const store = useInfoContext<ConversationFilesStoreType>();
  const { contacts, routesHash } = store();
  if (!contact_id || !id) {
    return <></>;
  }
  const info = contacts[contact_id];
  const route = routesHash[info.full_name][id];
  return (
    <YStack marginVertical="$4" f={1}>
      <H2 p="$2">{route.name}</H2>
      {isNotificationRoute(route) && (
        <NotificationRouteView info={info} route={route} />
      )}
      {isChoosableRoute(route) && <ChoosableRouteView route={route} />}
    </YStack>
  );
};

export default Page;
