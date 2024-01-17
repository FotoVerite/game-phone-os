import { useLocalSearchParams } from "expo-router";

const useRouteParams = () => {
  const { contact_id, id } = useLocalSearchParams<{
    contact_id?: string;
    id?: string;
  }>();

  if (!contact_id) {
    throw new Error(
      "Route Requires contact_id, please check route construction"
    );
  }

  if (!id) {
    throw new Error("Route Requires id, please check route construction");
  }

  return { contact_id, id } as const;
};

export default useRouteParams;
