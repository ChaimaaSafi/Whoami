import React from 'react'
import Image from 'next/image'
import profile from '../../../public/assets/me.jpg'
import { SKILLS } from '../../utils/constants/Skills'

function About() {
	return (
		<section
			id='about'
			className='mx-auto flex   w-full max-w-[1200px] flex-col justify-center space-y-12 border-2  border-red-700 px-5'
		>
			<div className='flex flex-col items-center justify-between md:flex-row'>
				<div className='flex flex-col text-justify md:w-3/5	'>
					<h1
						className='text mb-3 font-mono text-4xl font-semibold leading-10 tracking-widest text-gray-3'
						data-title='About Me'
					>
						About Me
					</h1>
					<p className='text-lg leading-10 text-gray-2'>
						Hey! I&apos;m{' '}
						<span className='italic text-gray-2 underline underline-offset-2'>
							Chaimaa Safi
						</span>{' '}
						,I&apos;m 24 years old and I&apos;m from Kenitra Morroco.My passion for
						programming and development started at the university, where I got my
						master&apos;s degree in software enginnering, I started in the domain of
						development about a year and I believe that experience comes after
						practices.I am passionate about coding and solving problems through code,
						and I am excited to work alongside other amazing programmers and learn so
						much more!
					</p>
				</div>
				<div className='relative z-0 order-first mb-10 h-72 w-72 rounded-full border-8 border-dotted border-gray-1 md:order-last md:mb-0 md:h-96 md:w-96'>
					<Image
						src={profile}
						alt='profile'
						layout='fill'
						objectFit='cover'
						className='rounded-full'
					/>
				</div>
			</div>
			<div>
				<span className='mr-3  text-base font-medium'>CHECK OUT MY</span>
				<h1
					className='text mb-3 font-mono text-2xl font-semibold leading-10 tracking-widest text-gray-3'
					data-title='Skills'
				>
					Skills
				</h1>
				<div className='mt-5 grid grid-flow-col grid-rows-3 items-center gap-4 rounded-xl  bg-white-1 p-5 shadow-lg md:mx-10 md:grid-rows-2'>
					{SKILLS.map((skill, index) => {
						return <h3 className='text-base font-medium text-gray-2 '>{skill}</h3>
					})}
				</div>
			</div>
		</section>
	)
}

export default About
