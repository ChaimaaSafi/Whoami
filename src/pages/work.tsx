import React from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/future/image'
import { baseURL } from '../utils/constants/BaseURL'
import FortLogo from '../../public/assets/projects/1FortLogo.png'
import Fort from '../../public/assets/projects/1Fort.png'
import QuoLogo from '../../public/assets/projects/QuoLogo.png'
import Quo from '../../public/assets/projects/Quo.png'

function work() {
	return (
		<>
			<NextSeo title='Work' canonical={`${baseURL}/work`} />
			<section className='flex w-full flex-col  overscroll-auto  px-3 py-20 md:mx-auto md:max-w-[1200px] lg:mt-28'>
				<div className='mb-5 flex flex-col'>
					<h1
						className='text mb-3 font-mono text-lg font-semibold leading-10 tracking-widest text-gray-3'
						data-title='Work'
					>
						Work
					</h1>
					<p className='text-lg font-normal text-gray-1 dark:text-white-1'>
						These are some of the projects I worked on.
					</p>
				</div>
				<div className='mt-10 flex flex-col space-y-20 md:mt-0'>
					<div className='flex flex-col items-center justify-between lg:flex-row lg:space-x-6 '>
						<div className='mt-8 flex w-full flex-col space-y-8 lg:w-1/2'>
							<div className='flex items-center space-x-5'>
								<div className='flex w-16'>
									<Image
										src={FortLogo}
										alt='1Fort-logo'
										placeholder='blur'
										className='object-fill'
									/>
								</div>
								<div>
									<h2 className='text-lg font-medium dark:text-white-1 md:text-xl'>
										1Fort
									</h2>
									<p className='text-base dark:text-white-1 md:text-lg'>
										Cyber Insurance for Businesses
									</p>
								</div>
							</div>
							<p className='text-justify text-base text-gray-2 dark:text-white-1'>
								1Fort combines insurance and security to reduce premiums and prevent
								cyberattacks on businesses - all in one refreshingly simple solution.
							</p>
							<div className='flex space-x-8 text-gray-3 dark:text-white-1'>
								<h3 className='text-justify text-base '>React</h3>
								<h3 className='text-justify text-base '>TypeScript</h3>
								<h3 className='text-justify text-base '>Axios</h3>
								<h3 className='text-justify text-base '>CSS</h3>
							</div>
						</div>
						<div className='group relative order-first my-7 h-40 w-full md:order-last md:h-64 lg:w-2/5'>
							<Image
								src={Fort}
								alt='1Fort-logo'
								className='h-full w-full rounded-lg object-fill'
								placeholder='blur'
							/>
							<div className='absolute top-0 left-0  flex h-0 w-full flex-col items-center justify-center rounded-lg bg-black/40 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100'>
								<a href='https://quo.com/' target='_blank' rel='noreferrer'>
									<h1 className='text-2xl text-white-1'>View Project</h1>
								</a>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-between lg:flex-row lg:space-x-6 '>
						<div className='group relative h-40 w-full md:h-64 lg:w-2/5'>
							<Image
								src={Quo}
								alt='Quo-logo'
								className='h-full w-full rounded-lg object-cover'
								placeholder='blur'
							/>
							<div className='absolute top-0 left-0 flex h-0 w-full flex-col items-center justify-center rounded-lg bg-black/40 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100'>
								<a href='https://quo.com/' target='_blank' rel='noreferrer'>
									<h1 className='text-2xl text-white-1'>View Project</h1>
								</a>
							</div>
						</div>
						<div className='mt-10 flex w-full flex-col space-y-8 py-7 md:mt-0 lg:w-1/2'>
							<div className='flex items-center space-x-5'>
								<div className='flex w-16  '>
									<Image
										src={QuoLogo}
										alt='Quo-logo'
										className='rounded-lg bg-[#222831]'
										placeholder='blur'
									/>
								</div>
								<div>
									<h2 className='text-lg font-medium dark:text-white-1 md:text-xl'>
										Quo
									</h2>
									<p className='text-base dark:text-white-1 md:text-lg'>
										Financial Services
									</p>
								</div>
							</div>
							<p className='text-justify text-base text-gray-2 dark:text-white-1'>
								Quo helps you become a homeowner faster and smarter with the first app
								built to help first time home buyers get mortgage-ready and a dedicated
								team of mortgage professionals to help you secure your dream home.
							</p>
							<div className='flex space-x-8 text-gray-3 dark:text-white-1'>
								<h3 className='text-justify text-base '>NextJs</h3>
								<h3 className='text-justify text-base '>MaterialUI</h3>
								<h3 className='text-justify text-base '>Firebase</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default work
