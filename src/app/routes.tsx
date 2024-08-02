import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { PUBLIC_PAGES } from "@/constants/page.const";
import { HomePage } from "@/pages/Home/HomePage";
import { ProfilePage } from "@/pages/Profile/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PUBLIC_PAGES.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
  { path: "*", element: <div>404 not found!</div> },
]);
