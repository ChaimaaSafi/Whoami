import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import profile from '../../public/assets/aboutMe.png'
import { SKILLS } from '../utils/constants/Skills'
import { baseURL } from '../utils/constants/BaseURL'

function about() {
	return (
		<>
			<NextSeo title='About' canonical={`${baseURL}/about`} />
			<section className='transitiongroup flex h-screen w-full flex-col items-center overflow-auto  px-5 py-20 lg:mx-auto lg:max-w-[1200px] lg:justify-center lg:py-0'>
				<div className='flex w-full flex-col justify-between lg:flex-row lg:space-x-8'>
					<div className='flex w-full flex-col text-justify lg:w-3/5	'>
						<h1
							className='text mb-3 font-mono text-3xl font-semibold leading-10 tracking-widest text-gray-3 md:text-4xl'
							data-title='About Me'
						>
							About Me
						</h1>
						<p className='text-lg leading-10 text-gray-2'>
							Hey! I&apos;m
							<span className='italic text-gray-2 underline underline-offset-2'>
								Chaimaa Safi
							</span>
							I&apos;m 24 years old and I&apos;m from Kenitra Morroco.My passion for
							programming and development started at the university, where I got my
							master&apos;s degree in software enginnering, I started in the domain of
							development about a year and I believe that experience comes after
							practices.I am passionate about coding and solving problems through code,
							and I am excited to work alongside other amazing programmers and learn so
							much more!
						</p>
					</div>
					<div className='relative order-first mb-10 h-96 w-full lg:order-last lg:mb-0 lg:h-96 lg:w-1/4'>
						<Image
							src={profile}
							layout='fill'
							alt='profile-alt'
							blurDataURL={`/_next/image?url=${profile}&w=16&q=1`}
							placeholder='blur'
							className='rounded-xl'
						/>
					</div>
				</div>
				<div className='mt-10 w-full lg:mt-0'>
					<span className='mr-3  text-base font-medium'>CHECK OUT MY</span>
					<h1
						className='text mb-3 font-mono text-3xl font-semibold leading-10 tracking-widest text-gray-3 md:text-2xl'
						data-title='Skills'
					>
						Skills
					</h1>
					<div className='mt-5 grid grid-flow-col grid-rows-3 items-center gap-4 rounded-xl  bg-white-1 p-5 shadow-lg md:mx-10 md:grid-rows-2'>
						{SKILLS.map(skill => {
							return (
								<h3 className='text-base font-medium text-gray-2' key={`id-${skill}`}>
									{skill}
								</h3>
							)
						})}
					</div>
				</div>
			</section>
			{/* <section className='transitiongroup flex h-screen w-full flex-col items-center px-5 py-48 md:pt-96  md:pb-[69rem] lg:mx-auto lg:max-w-[1200px] lg:justify-center lg:py-0 '>
				<div className='flex w-full flex-col justify-between lg:flex-row lg:space-x-5'>
					<div className='flex w-full flex-col text-justify lg:w-3/5	'>
						<h1
							className='text mb-3 font-mono text-3xl font-semibold leading-10 tracking-widest text-gray-3 md:text-4xl'
							data-title='About Me'
						>
							About Me
						</h1>
						<p className='text-lg leading-10 text-gray-2'>
							Hey! I&apos;m
							<span className='italic text-gray-2 underline underline-offset-2'>
								Chaimaa Safi
							</span>
							I&apos;m 24 years old and I&apos;m from Kenitra Morroco.My passion for
							programming and development started at the university, where I got my
							master&apos;s degree in software enginnering, I started in the domain of
							development about a year and I believe that experience comes after
							practices.I am passionate about coding and solving problems through code,
							and I am excited to work alongside other amazing programmers and learn so
							much more!
						</p>
					</div>
					<div className='relative order-first mb-10 h-96 w-full lg:order-last lg:mb-0 lg:h-96 lg:w-1/4'>
						<Image
							src={profile}
							layout='fill'
							alt='profile-alt'
							blurDataURL={`/_next/image?url=${profile}&w=16&q=1`}
							placeholder='blur'
							className='rounded-xl'
						/>
					</div>
				</div>
				<div className='mt-10 w-full lg:mt-0'>
					<span className='mr-3  text-base font-medium'>CHECK OUT MY</span>
					<h1
						className='text mb-3 font-mono text-3xl font-semibold leading-10 tracking-widest text-gray-3 md:text-2xl'
						data-title='Skills'
					>
						Skills
					</h1>
					<div className='mt-5 grid grid-flow-col grid-rows-3 items-center gap-4 rounded-xl  bg-white-1 p-5 shadow-lg md:mx-10 md:grid-rows-2'>
						{SKILLS.map(skill => {
							return (
								<h3 className='text-base font-medium text-gray-2' key={`id-${skill}`}>
									{skill}
								</h3>
							)
						})}
					</div>
				</div>
			</section> */}
		</>
	)
}

export default about
