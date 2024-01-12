import React, { createContext, useContext, useRef } from "react";
import { createStore, StoreApi, useStore } from "zustand";

const createBoundedUseStore = ((store) => (selector) => useStore(store)) as <
  S extends StoreApi<unknown>,
>(
  store: S
) => {
  (): ExtractState<S>;
  <T>(selector: (state: ExtractState<S>) => T): T;
};

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;

const InfoContext = createContext<StoreApi<any> | null>(null);

// Create a provider component that will wrap your app and set the value for the context
const InfoContextProvider = <T, V>({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: T;
}) => {
  const storeRef = useRef<StoreApi<T>>();
  if (!storeRef.current) {
    storeRef.current = createStore<T>()((set) => initialValue);
  }
  return (
    <InfoContext.Provider value={storeRef.current}>
      {children}
    </InfoContext.Provider>
  );
};

// Create a custom hook to easily access the context value in your components
const useInfoContext = <T,>() => {
  const store = useContext<StoreApi<T> | null>(InfoContext);
  if (!store) {
    throw new Error("useInfoContext must be used within a InfoContext");
  }
  return createBoundedUseStore(store);
};

export { InfoContextProvider, useInfoContext };
