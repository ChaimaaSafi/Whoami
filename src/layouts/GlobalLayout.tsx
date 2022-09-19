/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Header from './Header'
import DownArrow from '../icons/DownArrow'
import UpArrow from '../icons/UpArrow'
import { LINKS } from '../utils/constants/Links'
import Sun from '../icons/Sun'
import Moon from '../icons/Moon'

function GlobalLayout({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme
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
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null
	return (
		<section className='relative flex h-screen flex-col  overflow-hidden md:flex-row'>
			<Header currentPath={currentPath} />
			<div className='flex h-full w-full flex-col items-center overflow-auto dark:bg-[#222831] lg:h-screen lg:justify-center'>
				<div className='sticky top-0 z-40 flex w-full cursor-pointer justify-end  bg-white-1 p-3 dark:bg-transparent lg:mx-auto lg:max-w-[1200px]'>
					{currentTheme === 'dark' ? (
						<div
							onClick={() => setTheme('light')}
							className='flex h-10 w-10 items-center  justify-center rounded-full align-middle hover:bg-gray-5'
						>
							<Sun />
						</div>
					) : (
						<div
							onClick={() => setTheme('dark')}
							className='flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-4'
						>
							<Moon />
						</div>
					)}
				</div>
				{children}
				<div className='flex w-full justify-end pr-8 lg:flex-col lg:items-end'>
					<button
						className='-rotate-90 disabled:cursor-not-allowed disabled:opacity-20 lg:rotate-0 lg:cursor-pointer '
						onClick={previousPage}
						disabled={index === 0}
					>
						<UpArrow />
					</button>
					<button
						className='-rotate-90 disabled:cursor-not-allowed disabled:opacity-20  lg:order-last  lg:rotate-0 lg:cursor-pointer '
						onClick={nextPage}
						disabled={index === LINKS.length - 1}
					>
						<DownArrow />
					</button>
				</div>
			</div>
		</section>
	)
}

export default GlobalLayout
