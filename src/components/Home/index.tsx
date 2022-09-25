import React from 'react'
import Image from 'next/future/image'
import profile from '../../../public/assets/me.jpg'

function HomePage() {
	return (
		<section
			id='home'
			className='flex  w-full items-center  justify-center border-2 border-green-700 px-5 md:mx-auto  md:max-w-[1200px] '
		>
			<div className='flex flex-col items-center justify-between text-justify md:flex-row'>
				<div className='flex w-full flex-col space-y-6 md:w-3/5'>
					<h1 className='text-2xl font-bold leading-[50px] text-gray-2 md:text-4xl'>
						Hello,I&apos;m Chaimaa Safi.
					</h1>
					<h3 className='text-2xl font-semibold leading-[45px] text-gray-2 md:text-3xl'>
						Front-End Web Developer passionate about creating interactive applications
						and experiences on the web.{' '}
					</h3>
					<p className='text-lg leading-8 text-gray-2'>
						I&apos;m a web developer at
						<span className='mx-1 text-orange-1 hover:underline'>Obytes</span>.I enjoy
						building everything from small business sites to rich interactive web
						apps.When dealing with a project I pay attention to the smallest details
						addressing problems with patience.
					</p>
				</div>
				<div className='relative z-0 order-first mb-10 h-72 w-72 rounded-full border-8 border-dotted border-gray-1 md:order-last md:mt-0 md:h-96 md:w-96 '>
					<Image src={profile} alt='profile' className='rounded-full' />
				</div>
			</div>
		</section>
	)
}

export default HomePage
