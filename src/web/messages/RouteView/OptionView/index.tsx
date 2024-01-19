import React, { FC } from "react";
import { XGroup, YStack, Text, ToggleGroup, Paragraph } from "tamagui";

import { areSimpleOptions } from "@/src/phoneApplications/Messages/hooks/routes/guards";
import { OptionType } from "@/src/phoneApplications/Messages/hooks/routes/types";

const createOptionToggles = (
  percentage: string,
  options: string[] | OptionType[]
) => {
  if (areSimpleOptions(options)) {
    return options.map((option) => (
      <OptionToggle
        percentage={percentage}
        option={{ label: option, value: option }}
        key={option}
      />
    ));
  }
  return options.map((option) => (
    <OptionToggle percentage={percentage} option={option} key={option.value} />
  ));
};

const OptionToggle: FC<{
  percentage: string;
  option: OptionType;
}> = ({ percentage, option }) => {
  const disabled = option.effect != null;
  return (
    <ToggleGroup.Item
      value={option.value}
      width={percentage}
      disabled={disabled}
      backgroundColor={disabled ? "$red6" : undefined}
    >
      <Paragraph color="white">{option.label}</Paragraph>
    </ToggleGroup.Item>
  );
};

const OptionView: FC<{
  setter: (value: string) => void;
  options: OptionType[] | string[];
  defaultValue?: string;
}> = ({ options, setter }) => {
  const percentage = Math.ceil(100 / options.length) + "%";
  return (
    <YStack>
      <XGroup size="$4" alignSelf="center">
        <ToggleGroup
          theme="dark_alt1"
          disablePassBorderRadius="bottom"
          type="single"
          onValueChange={(value) => setter(value)}
          w="90%"
        >
          {createOptionToggles(percentage, options)}
        </ToggleGroup>
      </XGroup>
    </YStack>
  );
};

export default OptionView;
