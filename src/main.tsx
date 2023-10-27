import "reflect-metadata";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./infrastructure/ui/components/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import container from "./inversify.ts";

console.log(container);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
