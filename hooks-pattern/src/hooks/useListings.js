import useSWR from "swr";
import { LoadingSpinner } from "../components/LoadingSpinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useListings() {
  const { data, isLoading } = useSWR(
    "https://house-lydiahallie.vercel.app/api/listings",
    fetcher
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return data;
}
