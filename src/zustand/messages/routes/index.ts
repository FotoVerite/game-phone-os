import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "uuid";
import { create, createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import {
  ZustandRoute,
  ZustandRouteCreationProps,
  ZustandRouteStore,
} from "./types";

export const useZustandRouteStore = createStore<ZustandRouteStore>()(
  persist(
    immer((set) => ({
      routes: [] as ZustandRoute[],
      create: (route: ZustandRouteCreationProps) =>
        set(({ routes }) => {
          const id = uuid.v5(route.name, uuid.v5.URL);
          routes.push({ id, ...route });
        }),
      update: (updatedRoute: ZustandRoute) =>
        set(({ routes }) => {
          const index = routes.findIndex(
            (route) => route.id === updatedRoute.id
          );
          if (index !== -1) {
            routes[index] = updatedRoute;
          } else {
            console.warn(`Route with id ${updatedRoute.id} not found`);
          }
        }),
      destroy: (id: string) =>
        set(({ routes }) => {
          const index = routes.findIndex((route) => route.id === id);
          if (index !== -1) routes.splice(index, 1);
        }),
    })),
    {
      name: "zustand-routes",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
