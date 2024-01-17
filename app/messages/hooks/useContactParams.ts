import { useLocalSearchParams } from "expo-router";

const useContactParams = () => {
  const { contact_id } = useLocalSearchParams<{
    contact_id?: string;
  }>();

  if (!contact_id) {
    throw new Error(
      "Route Requires contact_id, please check route construction"
    );
  }

  return contact_id;
};

export default useContactParams;
