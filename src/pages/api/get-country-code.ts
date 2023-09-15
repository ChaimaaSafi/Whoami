import axios from 'axios'

export default async function handler(req: any, res: any) {
	try {
		const response = await axios.get(
			`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPIFON_API_KEY}`
		)
		const jsonResponse = response.data
		res.status(200).json({ country: jsonResponse.country })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'An error occurred' })
	}
}
