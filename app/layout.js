
import './globals.css'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

export const metadata = {
  title: 'LolipopNews',
  description: 'News With Fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
