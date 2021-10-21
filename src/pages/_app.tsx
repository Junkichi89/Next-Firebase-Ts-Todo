import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useAuth } from 'src/lib/auth'


type Props = {
  children: JSX.Element
}

const Auth = ({ children }: Props):JSX.Element => {
  const isLoading = useAuth();
  return isLoading ? <p>Loading...</p> : children;
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ChakraProvider>
        {/* <Auth> */}
        <Component {...pageProps} />
        {/* </Auth> */}
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
