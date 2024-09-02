import React from 'react'
import { router } from '@/app/routes'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@/shared/config/i18next/i18next.ts'
import './styles/index.css'
import { Providers } from '@/app/providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>,
)
