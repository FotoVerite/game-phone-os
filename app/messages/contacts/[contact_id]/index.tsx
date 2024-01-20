import { Stack, useLocalSearchParams } from "expo-router";
import React, { FC } from "react";

import ContactInformation from "@/src/web/messages/ContactInformation";
import { ConversationFilesStoreType } from "@/src/web/messages/ConversationFilesProvider/types";
import { useInfoContext } from "@/src/web/messages/contexts/InfoContext";

const Page: FC = () => {
  const { contact_id } = useLocalSearchParams<{
    contact_id?: string;
  }>();
  const store = useInfoContext<ConversationFilesStoreType>();
  const contacts = store().contacts;
  if (!contact_id) {
    return <></>;
  }
  const info = contacts[contact_id];

  return (
    <>
      <Stack.Screen
        options={{
          title: contact_id,
          headerStyle: { backgroundColor: info.interfaceColor },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <ContactInformation info={info} />
    </>
  );
};

export default Page;
