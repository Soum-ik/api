import { QueryClientProvider, QueryClient } from "react-query";
import Api from "./query/query";
// import { useEffect, useState } from "react";

export default function App() {
  const clicnt = new QueryClient();

  return (
    <>
      <QueryClientProvider client={clicnt}>
        <Api />
        <Api />
      </QueryClientProvider>
    </>
  );
}
