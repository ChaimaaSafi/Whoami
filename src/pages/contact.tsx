import React from 'react'
import MailIcon from '../icons/MailIcon'

function contact() {
	return (
		<section className='transitiongroup flex h-full w-full flex-col items-center justify-center  px-5  py-20  md:mx-auto md:max-w-[1200px]'>
			<div className='flex w-full flex-col space-y-5 md:w-3/5'>
				<div className='flex items-center justify-center'>
					<MailIcon />
				</div>
				<h1 className=' mb-3 text-center font-mono text-4xl font-semibold leading-[50px]  text-gray-3'>
					Let&apos;s work together on your next project.
				</h1>
				<p className=' ml-3 text-center text-xl leading-10 text-gray-2'>
					For commissions and project inquiries, please email:
				</p>
				<h1 className='text-center text-4xl text-[#8b4513] underline ring-offset-4'>
					test@gmail.com
				</h1>
			</div>
		</section>
	)
}

export default contact
