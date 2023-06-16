import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Meta from '../../components/Meta'


import store from '../store'
import Layout from '../../components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Meta></Meta>
     <Provider store={store}>
     <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  )
}
