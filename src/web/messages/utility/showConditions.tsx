import { Link } from "expo-router";
import React from "react";
import { H3, H4, H5, Paragraph, Text, View, YStack } from "tamagui";

import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";
import {
  OptionType,
  ROUTE_STATUS_TYPE,
  RouteChosenConditionType,
  RouteConditionsType,
  RouteViewedConditionType,
} from "@/src/phoneApplications/Messages/hooks/routes/types";

type ltgtType = "lt" | "gt" | "lte" | "gte";

const humanReadableRouteStatus = (status: ROUTE_STATUS_TYPE) => {
  switch (status) {
    case ROUTE_STATUS_TYPE.AVAILABLE:
      return "Is Available";
    case ROUTE_STATUS_TYPE.CONDITIONS_NOT_MET:
      return "Is Not Viewable";
    case ROUTE_STATUS_TYPE.FINISHED:
      return "Has Been Finished";
    case ROUTE_STATUS_TYPE.STARTED:
      return "Is being viewed";
  }
};

const displayConditions = (
  routeName: string,
  routesMap: ContactRouteHashType,
  conditions?: RouteConditionsType | RouteConditionsType[]
) => {
  if (!conditions) {
    return <></>;
  }
  if (Array.isArray(conditions)) {
    return conditions.map((conditionals, index) => {
      return (
        <YStack key={`or-conditionals-${routeName}-${index}`}>
          {conditionsToHumanReadable(routesMap, conditionals, index)}
          {index < conditions.length - 1 && <Paragraph mt="$3">OR</Paragraph>}
        </YStack>
      );
    });
  }
  return conditionsToHumanReadable(routesMap, conditions, 0);
};

const conditionsToHumanReadable = (
  routesMap: ContactRouteHashType,
  conditions: RouteConditionsType,
  index: number
) => {
  return Object.keys(conditions).map((name) => {
    const conditionals = conditions[name as MESSAGE_CONTACT_NAME];
    return (
      <YStack
        key={`${name}-block-${index}`}
        backgroundColor="$gray8"
        borderRadius="$1"
        pt="$1"
        mt="$3"
      >
        <Link href={`/messages/contacts/${name}`}>
          <H5 paddingHorizontal="$2" paddingBottom="$1.5" fontWeight="800">
            {name}
          </H5>
        </Link>
        <>
          {parseViews(name, conditionals?.views)}
          {parseBlocked(conditionals?.blocked)}
          {parseRoutesConditions(name, routesMap[name], conditionals?.routes)}
        </>
      </YStack>
    );
  });
};

const parseViews = (name: string, conditions?: RouteViewedConditionType) => {
  if (!conditions) {
    return <></>;
  }

  const ltgtHumanReadable = (key: ltgtType) => {
    switch (key) {
      case "lt":
        return "Less Than";
      case "lte":
        return "Less Than or Equal to";
      case "gt":
        return "Greater Than";
      case "gte":
        return "Greater Than or Equal to";
      default:
        return "Unknown";
    }
  };
  Object.keys(conditions).map((key) => {
    return (
      <Paragraph color="$gray2" key={`${name}-${key}`}>
        {ltgtHumanReadable(key as ltgtType)} {conditions[key as ltgtType]}
      </Paragraph>
    );
  });
};
const parseBlocked = (condition?: boolean) => {
  if (condition) {
    return <Paragraph color="$gray2">Blocked</Paragraph>;
  }
};
const parseRoutesConditions = (
  contactName: string,
  routeHash: RouteHash,
  conditions?: RouteChosenConditionType
) => {
  if (!conditions) {
    return <></>;
  }
  return Object.keys(conditions).map((id) => {
    const { name, options } = routeHash[id];
    const { status, chosen, not_chosen, timeSince } = conditions[id];
    return (
      <View key={`${name}-${id}`}>
        <View backgroundColor="$gray10" bbrr="$2" bblr="$2">
          <Paragraph
            backgroundColor="$gray10"
            paddingHorizontal="$2"
            paddingVertical="$2"
            fontStyle="italic"
            textShadowColor="#00000088"
            textShadowOffset={{ width: 1, height: 1 }}
            textShadowRadius={2}
          >
            <Link href={`/messages/contacts/${contactName}/routes/${id}`}>
              {name}
            </Link>
          </Paragraph>
          <View paddingHorizontal="$2">
            <Paragraph>{status && humanReadableRouteStatus(status)}</Paragraph>
            {chosen && (
              <Paragraph>{humanReadableOptions(chosen)} Chosen</Paragraph>
            )}
            {not_chosen && (
              <Paragraph>
                {humanReadableOptions(not_chosen)} Not Chosen
              </Paragraph>
            )}
          </View>
        </View>
      </View>
    );
  });
};

const humanReadableOptions = (choices: string[]) => {
  let output = "";
  if (choices.length == 1) {
    return choices[0];
  }
  choices.forEach((choice, index) => {
    if (index > choice.length - 1) {
      output += `${choice}, `;
    }
    output += `or ${choice}`;
  });
  return output;
};

export { displayConditions };
