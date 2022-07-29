import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/assets/logo.png'
import { LINKS } from '../../utils/constants/Links'
import { SOCIAL_LINKS } from '../../utils/constants/SocialLinks'
import LinkedinIcon from '../../icons/SocialLinks/LinkedinIcon'
import GithubIcon from '../../icons/SocialLinks/GithubIcon'
import TwitterIcon from '../../icons/SocialLinks/TwitterIcon'
import { Spin as Hamburger } from 'hamburger-react'

function Header({ currentPath }: { currentPath: string }) {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<section className='flex md:space-y-28 flex-row justify-between  items-center md:w-64 md:max-w-2xl md:flex-col md:h-screen  md:rounded-r-lg bg-white-1 md:p-10 shadow-lg'>
				<div className='w-28 md:w-full'>
					<Image src={logo} alt='logo' />
				</div>
				<nav
					className={`${
						isOpen
							? 'fixed bg-white-1 top-0 h-screen w-full py-32 text-center flex flex-col  justify-between items-center transition-all  delay-500'
							: 'hidden'
					} md:flex md:flex-col md:justify-between md:h-full`}
				>
					<div className='flex flex-col space-y-16 text-2xl font-medium leading-8 h-48'>
						{LINKS.map((props, index) => {
							return (
								<Link href={props.path} key={index.id}>
									<a
										className={
											currentPath === props.path ? 'text-grey-1 underline leading-8' : ''
										}
									>
										{props.name}
									</a>
								</Link>
							)
						})}
					</div>
					<div className='flex flex-row space-x-5'>
						{SOCIAL_LINKS.map((props, index) => {
							return (
								<a
									key={index.id}
									href={props.path}
									target='_blank'
									rel='noopener noreferrer'
									className='text-sm font-medium leading-[21px]'
								>
									<props.Icon />
								</a>
							)
						})}
					</div>
				</nav>
				<div className='md:hidden block  px-5 '>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</section>
		</>
	)
}

export default Header
