import '../styles/globals.css';
import Layout from '../src/component/Layout';
import type { AppProps } from 'next/app'
import '../styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className="wixon__wrap">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
