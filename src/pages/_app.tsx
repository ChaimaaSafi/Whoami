import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import GlobalLayout from '../layouts/GlobalLayout'
import SEO from '../../config/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<DefaultSeo {...SEO} />
			<GlobalLayout>
				<Component {...pageProps} />
			</GlobalLayout>
		</ThemeProvider>
	)
}

export default MyApp
