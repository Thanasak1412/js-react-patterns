import useListings from "../../hooks/useListings";
import { Listings } from "../presentation/Listings";

export default function ListingsContainerComponent() {
  const { listings } = useListings();

  if (!listings) {
    return null;
  }

  return <Listings listings={listings} />;
}
