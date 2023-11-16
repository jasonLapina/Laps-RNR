import "./main.css";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./ui/Layout.jsx";

import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import chakraTheme from "./ui/chakraTheme.js";

const Cabins = lazy(() => import("./pages/Cabins.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const Bookings = lazy(() => import("./pages/Bookings.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/cabins",
        element: (
          <Suspense fallback={<div />}>
            <Cabins />
          </Suspense>
        ),
      },
      {
        path: "/settings",
        element: (
          <Suspense fallback={<div />}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "/bookings",
        element: (
          <Suspense fallback={<div />}>
            <Bookings />
          </Suspense>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={chakraTheme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ChakraProvider>
);
