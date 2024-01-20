import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { H4, ScrollView, XStack, YGroup, YStack, View, GetRef } from "tamagui";

import enumerateBlocks from "../../utility/enumerateBlocks";
import OptionView from "../OptionView";

import { areSimpleOptions } from "@/src/phoneApplications/Messages/hooks/routes/guards";
import {
  ChoosableRouteType,
  OptionType,
} from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ExchangeBlockType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const extractDefaultValue = (options: string[] | OptionType[]) => {
  if (options.length !== 1) {
    return undefined;
  }
  if (areSimpleOptions(options)) {
    return options[0];
  }
  return options[0].value;
};
const ChoosableRouteView: FC<{
  route: ChoosableRouteType;
}> = ({ route }) => {
  const options = route.options;
  const defaultValue = extractDefaultValue(options);
  const [choice, setChoice] = useState<string | undefined>(defaultValue);
  const [blocks, setBlocks] = useState<ExchangeBlockType[]>([]);

  const setter = useCallback(
    (value: string) => {
      setChoice(value);
    },
    [setChoice]
  );

  useEffect(() => {
    if (choice) setBlocks(route.routes[choice]);
  }, [choice, route.routes]);
  const scrollViewRef = useRef<GetRef<typeof ScrollView>>(null);

  return (
    <YStack f={1}>
      <View>
        <OptionView
          defaultValue={defaultValue}
          options={route.options}
          setter={setter}
        />
      </View>
      <ScrollView
        f={1}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef.current?.scrollTo({ y: 0, animated: false });
        }}
      >
        <View
          alignSelf="center"
          backgroundColor="$gray9"
          borderRadius="$2"
          maw={1000}
          width="100%"
          f={1}
        >
          {enumerateBlocks(blocks)}
        </View>
      </ScrollView>
    </YStack>
  );
};

export default ChoosableRouteView;
