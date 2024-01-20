import React, { FC, PropsWithChildren } from "react";
import { H3, Text, YStack } from "tamagui";

const ErrorBox: FC<
  PropsWithChildren & { title?: string; errors?: string[] }
> = ({ children, errors, title }) => {
  if (!errors || errors.length === 0) {
    return <></>;
  }
  return (
    <YStack
      bc="$red6"
      borderColor="$red10"
      bw={3}
      borderStyle="solid"
      borderRadius={12}
      p="$3"
    >
      {title && <H3>{title}</H3>}
      {errors &&
        errors.map((error, id) => (
          <Text key={`${title}-error-${id}`}>{error}</Text>
        ))}
      {children}
    </YStack>
  );
};

export default ErrorBox;
