import React from "react";
import Videos from "./pages/Videos";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
};

export default App;
