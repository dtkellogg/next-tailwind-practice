import '../styles/globals.css'
import Nav from './Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  )
}
