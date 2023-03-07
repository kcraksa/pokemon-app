import { persistor, store } from '@/redux/store'
import '@/styles/globals.css'
import withRedux from 'next-redux-wrapper'
import { PersistGate } from 'redux-persist/integration/react'

function App({ Component, pageProps }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

const makeStore = () => store;
export default withRedux(makeStore)(App);
