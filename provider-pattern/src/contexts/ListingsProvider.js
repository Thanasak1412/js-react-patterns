import { createContext, useContext } from "react";
import useListings from "../hooks/useListings";

const ListingsContext = createContext(null);

export function useListingsContext() {
  return useContext(ListingsContext);
}

export default function ListingsProvider({ children }) {
  const listings = useListings();

  if (!listings) return null;

  return (
    <ListingsContext.Provider value={listings}>
      {children}
    </ListingsContext.Provider>
  );
}
