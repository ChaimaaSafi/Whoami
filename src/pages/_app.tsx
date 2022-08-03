import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import GlobalLayout from '../layouts/GlobalLayout'
import SEO from '../../config/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<GlobalLayout>
				<Component {...pageProps} />
			</GlobalLayout>
		</>
	)
}

export default MyApp
