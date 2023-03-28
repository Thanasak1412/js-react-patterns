import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";
import { useListingsContext } from "../contexts/ListingsProvider";

export default function Listings() {
  const listings = useListingsContext();

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
