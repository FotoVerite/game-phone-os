import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, YStack, Form, Spinner, Input } from "tamagui";

import { ControlledInput } from "@/src/web/Form/ControlledInput";
import { ControlledTextArea } from "@/src/web/Form/ControlledTextArea";
import { ZustandRoute } from "@/src/zustand/messages/routes/types";

const RouteForm: FC<{ initialValues?: ZustandRoute }> = ({ initialValues }) => {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ZustandRoute>({
    defaultValues: initialValues,
  });

  const onSubmit = (data: ZustandRoute) => {
    // Handle form submission logic (e.g., save data, dispatch actions)
    console.log("Submitted data:", data);
  };

  return (
    <Form
      alignSelf="center"
      minWidth={300}
      maxWidth={1440}
      gap="$2"
      onSubmit={() => handleSubmit(onSubmit)}
      borderWidth={3}
      borderRadius="$2"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <ControlledInput control={control} errors={errors} name="name" required />
      <ControlledTextArea
        control={control}
        errors={errors}
        name="description"
        required
      />
      <ControlledTextArea
        control={control}
        errors={errors}
        name="purpose"
        required
      />
      <Form.Trigger asChild disabled={status !== "off"}>
        <Button icon={status === "submitting" ? () => <Spinner /> : undefined}>
          Submit
        </Button>
      </Form.Trigger>
    </Form>
  );
};

export default RouteForm;
