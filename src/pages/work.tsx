import React from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { baseURL } from '../utils/constants/BaseURL'
import FortLogo from '../../public/assets/projects/1FortLogo.png'
import QuoLogo from '../../public/assets/projects/QuoLogo.jpeg'
import Fort from '../../public/assets/projects/1Fort.png'
import Quo from '../../public/assets/projects/Quo.png'

function work() {
	return (
		<>
			<NextSeo title='Work' canonical={`${baseURL}/work`} />
			<section className='transitiongroup  flex w-full flex-col  overscroll-auto  px-5  py-10 md:mx-auto md:max-w-[1200px]'>
				<div className='mb-10 flex flex-col'>
					<h1
						className='text mb-3 font-mono text-lg font-semibold leading-10 tracking-widest text-gray-3'
						data-title='Work'
					>
						Work
					</h1>
					<p className='text-base font-medium capitalize leading-10 text-gray-1'>
						Let the work do the talking.
					</p>
				</div>
				<div className='mt-10 flex flex-col space-y-20'>
					<div className='flex flex-col items-center justify-between lg:flex-row lg:space-x-6 '>
						<div className='flex w-full flex-col space-y-8 lg:w-1/2'>
							<div className='flex items-center space-x-5'>
								<div className='flex w-16 '>
									<Image src={FortLogo} alt='1Fort-logo' />
								</div>
								<div>
									<h2 className='text-xl font-medium'>1Fort</h2>
									<p className='text-lg'>Cyber Insurance for Businesses</p>
								</div>
							</div>
							<p className='text-justify text-base text-gray-2'>
								1Fort combines insurance and security to reduce premiums and prevent
								cyberattacks on businesses - all in one refreshingly simple solution.
							</p>
						</div>
						<div className='relative order-first mb-8 h-40 w-full rounded-xl border-4 border-gray-2 shadow-xl md:h-64 lg:order-last lg:mb-0 lg:w-2/5'>
							<Image
								src={Fort}
								alt='1Fort-logo'
								className='rounded-xl'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center justify-between lg:flex-row lg:space-x-6 '>
						<div className='relative order-first mb-8 h-40 w-full rounded-xl border-4 border-gray-2 shadow-xl md:h-64 lg:order-last lg:w-2/5'>
							<Image
								src={Quo}
								alt='Quo-logo'
								layout='fill'
								objectFit='cover'
								className='rounded-lg'
							/>
						</div>
						<div className='flex w-full flex-col space-y-8 lg:w-1/2'>
							<div className='flex items-center space-x-5'>
								<div className='flex w-16  '>
									<Image src={QuoLogo} alt='Quo-logo' className='rounded-lg' />
								</div>
								<div>
									<h2 className='text-xl font-medium'>Quo</h2>
									<p className='text-lg '>Financial Services</p>
								</div>
							</div>
							<p className='text-justify text-base text-gray-2'>
								Quo helps you become a homeowner faster and smarter with the first app
								built to help first time home buyers get mortgage-ready and a dedicated
								team of mortgage professionals to help you secure your dream home.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default work
