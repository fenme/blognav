import '@/styles/globals.css'
import '@/styles/FanMa.css'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import '@/styles/prism-overrides.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

    
  return <Component {...pageProps} />
}