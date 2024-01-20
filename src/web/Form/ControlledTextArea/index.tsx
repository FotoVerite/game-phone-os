import React, { FC } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { Text, TextArea } from "tamagui";

interface InputProps<T extends FieldValues> {
  control: Control<T, any>;
  errors: FieldErrors<T>;
  name: Path<T>;
  placeholder?: string;
  required?: boolean;
}
export function ControlledTextArea<T extends FieldValues>(
  props: InputProps<T>
) {
  const { control, errors, name, placeholder, required } = props;
  return (
    <>
      <Controller
        control={control}
        rules={{
          required,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextArea
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {errors[name] && <Text>{name} is required.</Text>}
    </>
  );
}
