import React, { createContext, useContext, useRef } from "react";
import { createStore, StoreApi, useStore } from "zustand";

import { createBoundedUseStore } from "./createBoundedUseStore";

import { ZustandRouteStore } from "@/src/zustand/messages/routes/types";

const ZustandRoutesContext = createContext<StoreApi<ZustandRouteStore> | null>(
  null
);

const InfoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const store = createStore<ZustandRouteStore>()((set) => initialValue);
  return (
    <ZustandRoutesContext.Provider value={store}>
      {children}
    </ZustandRoutesContext.Provider>
  );
};

// Create a custom hook to easily access the context value in your components
const useZustandRoutesContext = <T,>() => {
  const store = useContext<StoreApi<ZustandRouteStore> | null>(
    ZustandRoutesContext
  );
  if (!store) {
    throw new Error(
      `useZustandRoutes must be used within a ZustandRoutes Provider`
    );
  }
  return createBoundedUseStore(store);
};

export { InfoContextProvider, useZustandRoutesContext };
