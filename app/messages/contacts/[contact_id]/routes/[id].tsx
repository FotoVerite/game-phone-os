import React, { FC } from "react";
import { H2, YGroup, YStack } from "tamagui";

import useRouteParams from "@/app/messages/hooks/useRouteParams";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

const Page: FC = () => {
  const { contact_id, id } = useRouteParams();
  const store = useInfoContext<ConversationFilesStoreType>();
  const { contacts, routesHash } = store();
  if (!contact_id || !id) {
    return <></>;
  }
  const info = contacts[contact_id];
  console.log("HELLO", routesHash, info.full_name);
  const route = routesHash[info.full_name][id];
  return (
    <YStack>
      <H2>{route.name}</H2>
      <YGroup></YGroup>
    </YStack>
  );
};

export default Page;
