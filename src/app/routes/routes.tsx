import { HomePage } from '@/pages/home/home-page.tsx'
import { RootLayout } from '@/pages/layouts'
import { ProfilePage } from '@/pages/profile/profile-page.tsx'
import { PUBLIC_PAGES } from '@/shared/const/page.const'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
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
  { path: '*', element: <div>404 not found!</div> },
])
