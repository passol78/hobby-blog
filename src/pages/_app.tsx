import { AppProps } from 'next/app'

import 'minireset.css'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default MyApp