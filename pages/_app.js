import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <UserProvider>
      <Head>
        <title>Enhanced Mess App</title>
      </Head>

      <div className="top-bar bg-emerald-600">
        <div className="nav">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="api/count">
            <a className="text-white">Count</a>
          </Link>
          <Link href="api/rating">
            <a className="text-white">Rating</a>
          </Link>
          <Link href="api/auth/logout">
            <a className="text-white">Logout</a>
          </Link>
        </div>

        <img
          id="title"
          src="ema.png"
          alt="enhanced mess app logo"
        ></img>
      </div>
      <div className="grid wrapper bg-zinc-900">
        <Component {...pageProps} />
      </div>
      </UserProvider>
    </>
  )
}

export default MyApp
