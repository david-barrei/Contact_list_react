import React, { useState, useEffect } from "react";
import getState from "./store.js";

// Creamos el contexto
export const Context = React.createContext(null);

export function ContactProvider({ children }) {
  const [state, setState] = useState(
    getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (update) => setState((prev) => ({
        store: { ...prev.store, ...update },
        actions: { ...prev.actions },
      })),
    })
  );

  useEffect(() => {
    const initialize = async () => {
      await state.actions.createAgenda();
      await state.actions.fetchContacts();
    };

    initialize();
  }, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}