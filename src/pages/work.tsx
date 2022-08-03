import React from 'react'
import { NextSeo } from 'next-seo'
import { baseURL } from '../utils/constants/BaseURL'

function work() {
	return (
		<>
			<NextSeo title='Work' canonical={`${baseURL}/work`} />
			<section>
				<h1>Work Page</h1>
			</section>
		</>
	)
}

export default work
