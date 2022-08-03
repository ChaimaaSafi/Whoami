import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import profile from '../../public/assets/me.png'
import { baseURL } from '../utils/constants/BaseURL'

function home() {
	return (
		<>
			<NextSeo title='Home' canonical={`${baseURL}/home`} />

			<section className='transitiongroup flex h-screen w-full flex-col items-center overflow-auto px-5 py-20 lg:mx-auto lg:max-w-[1200px] lg:justify-center lg:py-0'>
				<div className='flex w-full flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-5'>
					<div className='order-last flex w-full flex-col space-y-6  lg:order-first lg:w-3/5 '>
						<h1 className='text-2xl font-bold leading-[50px] text-gray-2 md:text-4xl'>
							Hello,I&apos;m Chaimaa Safi.
						</h1>
						<h3 className='text-2xl font-semibold leading-[45px] text-gray-2 md:text-3xl'>
							Front-End Web Developer passionate about creating interactive
							applications and experiences on the web.{' '}
						</h3>
						<p className='text-justify text-lg leading-8 text-gray-2'>
							I&apos;m a web developer at
							<span className='mx-1 text-orange-1 hover:underline'>Obytes</span>.I
							enjoy building everything from small business sites to rich interactive
							web apps.When dealing with a project I pay attention to the smallest
							details addressing problems with patience.
						</p>
					</div>

					<div className='relative  mb-10 h-72 w-full justify-center rounded-full border-2 border-gray-1 md:h-[28rem] lg:order-last lg:mt-0 lg:h-96 lg:w-96'>
						<Image
							src={profile}
							alt='profile'
							layout='fill'
							objectFit='cover'
							className='rounded-full'
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default home
