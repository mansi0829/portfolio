import Navigation from './navbar'
import Footer from '../pages/footer/index'
import Animation from './animation'
import Head from 'next/head'
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="logo2.png" type="image/png" sizes="114x114" />
        <meta name="keywords" content="mansi gundre" />
        <meta name="description" content="mansi gundre portfolio" />
      </Head>
      <Navigation />
      <Animation />
      <main className="pt-16">{children}</main>

      <Footer />

    </div>
  )
}

export default Layout
