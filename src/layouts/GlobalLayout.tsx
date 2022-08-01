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
		if (index !== 2) {
			router.push(LINKS[index + 1].path)
		}
	}
	const previousPage = () => {
		if (index !== 0) {
			router.push(LINKS[index - 1].path)
		}
	}

	return (
		<section className='relative flex flex-col  md:flex-row'>
			<Header currentPath={currentPath} />
			<div className='flex h-full w-full flex-col items-center  justify-center md:h-screen'>
				{children}
				{index !== 0 && (
					<div
						className='absolute bottom-[80px] right-[40px] h-10 w-10 cursor-pointer '
						onClick={previousPage}
						aria-hidden='true'
					>
						<UpArrow />
					</div>
				)}
				{index !== 2 && (
					<div
						className='absolute bottom-[30px] right-[40px] h-10 w-10 cursor-pointer  '
						onClick={nextPage}
						aria-hidden='true'
					>
						<DownArrow />
					</div>
				)}
			</div>
		</section>
	)
}

export default GlobalLayout
