import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";

export function Listings({ listings }) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
