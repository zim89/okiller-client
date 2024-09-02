import { PUBLIC_PAGES } from '@/app/routes/page.const.ts'
import { HomePage } from '@/pages/home/home-page.tsx'
import { ProfilePage } from '@/pages/profile/profile-page.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../../pages/root-layout.tsx'

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
