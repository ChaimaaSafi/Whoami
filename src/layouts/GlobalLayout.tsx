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
				<div className='fixed top-0 right-[4%] cursor-pointer py-5 lg:mx-auto lg:max-w-[1200px]'>
					{currentTheme === 'dark' ? (
						<button onClick={() => setTheme('light')}>
							<Sun />
						</button>
					) : (
						<button onClick={() => setTheme('dark')}>
							<Moon />
						</button>
					)}
				</div>
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
