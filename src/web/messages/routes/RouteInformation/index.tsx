import { Link } from "expo-router";
import React, { FC } from "react";
import { H2, H3, Separator, Theme, YStack } from "tamagui";

import { ContactRouteHashType } from "../../ConversationFilesProvider/types";
import { displayConditions } from "../../utility/showConditions";

import useContactParams from "@/app/messages/hooks/useContactParams";
import { AbstractRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";

const RouteInformation: FC<{
  colors: string[];
  route: AbstractRouteType;
  contactRouteHash: ContactRouteHashType;
}> = ({ colors, contactRouteHash, route }) => {
  const contact_id = useContactParams();

  const spacer = (
    <Separator
      bc={colors[0]}
      marginVertical="$4"
      width="95%"
      alignSelf="center"
    />
  );
  return (
    <Theme name="dark">
      <YStack
        alignSelf="center"
        width="90%"
        paddingHorizontal="$2"
        backgroundColor={colors[0]}
        p="$4"
        br="$4"
        marginVertical={24}
      >
        <Link href={`/messages/contacts/${contact_id}/routes/${route.id}`}>
          <H2>{route.name}</H2>
        </Link>
        {route.conditions && (
          <>
            {spacer}
            <H3>Conditions</H3>
          </>
        )}
        {displayConditions(route.name, contactRouteHash, route.conditions)}
      </YStack>
    </Theme>
  );
};

export default RouteInformation;
