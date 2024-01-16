import React from "react";
import { H3, H4, Paragraph, Text, YStack } from "tamagui";

import {
  OptionType,
  ROUTE_STATUS_TYPE,
  RouteBlockedConditionType,
  RouteChosenConditionType,
  RouteConditionsType,
  RouteViewedConditionType,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { MESSAGE_CONTACT_NAME } from "@/src/phoneApplications/Messages/constants";

type ltgtType = "lt" | "gt" | "lte" | "gte";

export type RouteHash = {
  [routeId: string]: { name?: string; options?: OptionType[] | string[] };
};
export type ContactRouteHashType = {
  [full_name: string]: RouteHash;
};

const displayConditions = (
  routesMap: ContactRouteHashType,
  conditions?: RouteConditionsType | RouteConditionsType[]
) => {
  if (!conditions) {
    return <></>;
  }
  if (Array.isArray(conditions)) {
    return conditions.map((conditionals, index) => {
      return (
        <>
          {conditionsToHumanReadable(routesMap, conditionals)}{" "}
          {index < conditions.length - 1 && <Text>OR</Text>}
        </>
      );
    });
  }
  return conditionsToHumanReadable(routesMap, conditions);
};

const conditionsToHumanReadable = (
  routesMap: ContactRouteHashType,
  conditions: RouteConditionsType
) => {
  Object.keys(conditions).map((name) => {
    const conditionals = conditions[name as MESSAGE_CONTACT_NAME];
    return (
      <YStack>
        <H3 color="$gray2">{name}</H3>;<Paragraph>{}</Paragraph>
        {parseViews(name, conditionals?.views)}
        {parseBlocked(conditionals?.blocked)}
        {parseRoutesConditions(routesMap[name], conditionals?.routes)}
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
      <>
        <H4>{name}</H4>
        {status && humanReadableRouteStatus(status)}
        {chosen && <Paragraph>humanReadableOptions(chosen) Chosen</Paragraph>}
        {not_chosen && (
          <Paragraph>humanReadableOptions(not_chosen) Chosen</Paragraph>
        )}
      </>
    );
  });
};

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
