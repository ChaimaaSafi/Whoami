import React from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import DownArrow from '../icons/DownArrow'
import UpArrow from '../icons/UpArrow'
import { LINKS } from '../utils/constants/Links'

function GlobalLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter()
	const currentPath = router.pathname
	const index = LINKS.findIndex(link => {
		return link.path === currentPath
	})
	const nextPage = () => {
		if (index !== LINKS.length - 1) {
			router.push(LINKS[index + 1].path)
		}
	}
	const previousPage = () => {
		if (index !== 0) {
			router.push(LINKS[index - 1].path)
		}
	}

	return (
		<section className='relative flex h-screen flex-col  overflow-hidden md:flex-row'>
			<Header currentPath={currentPath} />
			<div className='flex h-full w-full flex-col items-center overflow-auto lg:h-screen lg:justify-center'>
				{children}
				<button
					className='hidden disabled:cursor-not-allowed disabled:opacity-20 lg:absolute lg:bottom-[80px] lg:right-[40px] lg:block lg:h-10 lg:w-10 lg:cursor-pointer '
					onClick={previousPage}
					disabled={index === 0}
				>
					<UpArrow />
				</button>
				<button
					className='hidden disabled:cursor-not-allowed disabled:opacity-20 lg:absolute lg:bottom-[30px] lg:right-[40px] lg:block lg:h-10 lg:w-10 lg:cursor-pointer '
					onClick={nextPage}
					disabled={index === LINKS.length - 1}
				>
					<DownArrow />
				</button>
			</div>
		</section>
	)
}

export default GlobalLayout
