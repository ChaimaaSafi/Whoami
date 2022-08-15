import React from 'react'
import { NextSeo } from 'next-seo'
import MailIcon from '../icons/MailIcon'
import { baseURL } from '../utils/constants/BaseURL'

function contact() {
	return (
		<>
			<NextSeo title='Contact' canonical={`${baseURL}/contact`} />

			<section className='transitiongroup  flex h-screen w-full flex-col items-center justify-center  overscroll-auto  px-5  py-20 md:mx-auto md:max-w-[1200px]'>
				<div className='flex w-full flex-col space-y-5  lg:w-3/5'>
					<div className='flex items-center justify-center '>
						<MailIcon />
					</div>
					<h1 className=' mb-3 text-center font-mono text-3xl font-semibold  leading-[50px] text-gray-3  lg:text-4xl'>
						Let&apos;s work together on your next project.
					</h1>
					<h1 className='text-center text-4xl text-[#8b4513] underline ring-offset-4'>
						<a href='mailto:hi@chaimaasafi.ma'>hi@chaimaasafi.ma</a>
					</h1>
				</div>
			</section>
		</>
	)
}

export default contact
