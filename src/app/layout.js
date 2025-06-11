import "./app.css"

export const metadata = {
  title: "Todo Masterpiece",
  description: "Organize your tasks with style and efficiency",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
