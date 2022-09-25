import React from 'react'
import Image from 'next/future/image'
import { NextSeo } from 'next-seo'
import profile from '../../public/assets/chaimaa.jpg'
import { SKILLS } from '../utils/constants/Skills'
import { baseURL } from '../utils/constants/BaseURL'

function about() {
	return (
		<>
			<NextSeo title='About' canonical={`${baseURL}/about`} />
			<section className='transitiongroup flex h-screen w-full flex-col items-center overflow-auto  px-5 py-20 lg:mx-auto lg:max-w-[1200px] lg:justify-center lg:py-0'>
				<div className='flex w-full flex-col items-center justify-between lg:flex-row lg:space-x-8'>
					<div className='flex w-full flex-col text-justify lg:w-3/5	'>
						<h1
							className='text mb-3 font-mono text-lg font-semibold leading-10 tracking-widest text-gray-3 md:text-xl'
							data-title='About Me'
						>
							About Me
						</h1>
						<p className='text-base leading-10 text-gray-2 dark:text-white-1'>
							Hey! I&apos;m Chaimaa Safi I&apos;m 24 years old and I&apos;m from
							Kenitra Morroco. My passion for programming and development started at
							the university, where I got my master&apos;s degree in software
							enginnering, I started as a developer about a year and I believe the
							experience comes from practice. I am passionate about coding and solving
							problems through code, and I am excited to work alongside amazing
							programmers and learn so much more!
						</p>
					</div>
					<div className='relative order-first mb-10 h-96 w-full lg:order-last lg:mb-0 lg:h-80 lg:w-1/4'>
						<Image
							src={profile}
							alt='profile-alt'
							placeholder='blur'
							className='rounded-xl object-cover'
						/>
					</div>
				</div>
				<div className='mt-10 w-full lg:mt-20'>
					<h1
						className='text mb-3 font-mono text-lg font-semibold leading-10 tracking-widest text-gray-3 md:text-xl '
						data-title='Skills'
					>
						Skills
					</h1>
					<div className='mt-5 grid grid-flow-col grid-rows-4 gap-4 md:grid-rows-2'>
						{SKILLS.map(skill => {
							return (
								<div
									className='flex items-center space-x-3 text-base font-medium text-gray-2 dark:text-white-1'
									key={`id-${skill}`}
								>
									<div className='h-2 w-2 rounded-full bg-gray-2 dark:bg-[#fff]' />
									<h3> {skill}</h3>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default about
