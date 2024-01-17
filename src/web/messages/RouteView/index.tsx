import React, { FC } from "react";
import { XGroup, YStack, Text, ToggleGroup, Paragraph } from "tamagui";

import { areSimpleOptions } from "@/src/phoneApplications/Messages/hooks/routes/guards";
import { OptionType } from "@/src/phoneApplications/Messages/hooks/routes/types";

const createOptionToggles = (options: string[] | OptionType[]) => {
  if (areSimpleOptions(options)) {
    return options.map((option) => (
      <OptionToggle option={{ label: option, value: option }} key={option} />
    ));
  }
  return options.map((option) => (
    <OptionToggle option={option} key={option.value} />
  ));
};

const OptionToggle: FC<{
  option: OptionType;
}> = ({ option }) => {
  return (
    <ToggleGroup.Item value={option.value}>
      <Paragraph color="white">{option.label}</Paragraph>
    </ToggleGroup.Item>
  );
};

const OptionView: FC<{
  setter: (value: string) => void;
  options: OptionType[] | string[];
}> = ({ options, setter }) => {
  return (
    <YStack paddingVertical="$2" f={1}>
      <XGroup size="$4" alignSelf="center">
        <ToggleGroup
          theme="dark"
          type="single"
          onValueChange={(value) => setter(value)}
        >
          {createOptionToggles(options)}
        </ToggleGroup>
      </XGroup>
    </YStack>
  );
};

export default OptionView;
