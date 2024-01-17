import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { H4, ScrollView, XStack, YGroup, YStack, View, GetRef } from "tamagui";

import OptionView from "..";
import enumerateBlocks from "../../utility/enumerateBlocks";
import MessageView from "../MessageView";

import { ChoosableRouteType } from "@/src/phoneApplications/Messages/hooks/routes/types";
import { ExchangeBlockType } from "@/src/phoneApplications/Messages/hooks/useConversations/types";

const ChoosableRouteView: FC<{
  route: ChoosableRouteType;
}> = ({ route }) => {
  const [choice, setChoice] = useState<string | undefined>();
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
        <OptionView options={route.options} setter={setter} />
      </View>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef.current?.scrollTo({ y: 0, animated: false });
        }}
      >
        <YStack
          maw={1000}
          alignSelf="center"
          backgroundColor="$gray10"
          borderRadius="$2"
        >
          {enumerateBlocks(blocks)}
        </YStack>
      </ScrollView>
    </YStack>
  );
};

export default ChoosableRouteView;
