import {
  MESSAGE_CONTACT_INFO,
  MESSAGE_CONTACT_NAME,
} from "@/src/phoneApplications/Messages/constants";
import { ContactCardType } from "..";
import { Text } from "react-native";

const gameInfo = MESSAGE_CONTACT_INFO[MESSAGE_CONTACT_NAME.ZARA];
const zara: ContactCardType = {
  name: "Zara",
  phoneNumber: "212-657-7237",
  colors: gameInfo.colors,
  description: (
    <>
      <Text>Blah</Text>
    </>
  ),
  routes: [],
};

export default zara;
