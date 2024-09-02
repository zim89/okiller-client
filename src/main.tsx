import React from 'react'
import { router } from '@/app/routes/routes.tsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@/shared/config/i18next/i18next.ts'
import '@/app/styles/index.css'
import { Providers } from '@/app/providers/providers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>,
)
