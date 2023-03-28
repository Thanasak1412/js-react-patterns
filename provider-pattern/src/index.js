import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ListingsProvider from "./contexts/ListingsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ListingsProvider>
    <App />
  </ListingsProvider>
);
