import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";

export default function withLoader(Element, url) {
  return (props) => {
    /* Add logic to:
    1. Fetch data from the url that was passed as an argument.
    2. Show the <LoadingSpinner /> while the  data is being fetched.
    3. Pass the fetched data to the wrapped component.
    */

    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => setData(result));
    }, []);

    if (!data) {
      return <LoadingSpinner />;
    }

    return <Element {...props} data={data} />;
  };
}
