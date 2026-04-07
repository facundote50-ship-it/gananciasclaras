import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
      default: 'Ganancias Claras — Control de finanzas personales',
          template: '%s | Ganancias Claras',
    },
    description: 'Gestioná tus ingresos, gastos y metas financieras de forma simple y clara.',
    keywords: ['finanzas personales', 'control de gastos', 'ahorro', 'presupuesto', 'Argentina'],
    openGraph: {
          type: 'website',
          locale: 'es_AR',
          url: 'https://gananciasclaras.vercel.app',
          siteName: 'Ganancias Claras',
          title: 'Ganancias Claras — Control de finanzas personales',
          description: 'Gestioná tus ingresos, gastos y metas financieras de forma simple y clara.',
    },
    robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
          <html lang="es-AR">
                <body className={inter.className}>{children}</body>body>
          </html>html>
        )
}</html>
