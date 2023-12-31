import Layout from '../components/layout'
import { ThemeProvider } from "next-themes"
import "@/app/globals.css"
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}