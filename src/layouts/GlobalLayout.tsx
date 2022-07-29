import React from 'react'
import Header from './Header'
import { useRouter } from 'next/router'

function GlobalLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter()
	const currentPath = router.pathname
	return (
		<section className='flex flex-col md:flex-row md:h-screen'>
			<Header currentPath={currentPath} />
			<div className='w-full '>{children}</div>
		</section>
	)
}

export default GlobalLayout
