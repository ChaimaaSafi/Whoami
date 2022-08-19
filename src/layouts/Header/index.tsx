import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'
import logo from '../../../public/assets/logo.png'
import { LINKS } from '../../utils/constants/Links'
import { SOCIAL_LINKS } from '../../utils/constants/SocialLinks'

function Header({ currentPath }: { currentPath: string }) {
	const [isOpen, setOpen] = useState(false)
	return (
		<section className='z-50 flex flex-row items-center justify-between  bg-white-1 shadow-lg dark:bg-[#222831] md:h-screen md:w-full md:max-w-[275px]  md:flex-col md:space-y-28  md:p-10'>
			<div className='w-28 md:w-40'>
				<Image src={logo} alt='logo' />
			</div>
			<nav
				className={`${
					isOpen
						? 'fixed top-0 flex h-screen w-full flex-col items-center justify-between bg-white-1  py-32 text-center transition-all  delay-500'
						: 'hidden'
				} md:flex md:h-full md:flex-col md:justify-between`}
			>
				<div className='flex h-48 flex-col space-y-12 text-lg font-medium leading-8 text-[#8b4513] dark:text-white-1'>
					{LINKS.map(props => {
						return (
							<Link href={props.path} key={`id-${props.path}`}>
								<a
									className={
										currentPath === props.path
											? 'leading-8 text-gray-1 underline underline-offset-4 dark:text-white-1'
											: ''
									}
								>
									{props.name}
								</a>
							</Link>
						)
					})}
				</div>
				<div className='flex flex-row space-x-5'>
					{SOCIAL_LINKS.map(props => {
						return (
							<a
								href={props.path}
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm font-medium leading-[21px]'
								key={`id-${props.path}}`}
							>
								<props.Icon />
							</a>
						)
					})}
				</div>
			</nav>
			<div className='block px-5  md:hidden '>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
		</section>
	)
}

export default Header
