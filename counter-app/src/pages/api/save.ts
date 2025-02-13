export async function POST({ request }: { request: Request }) {
	const formData = await request.formData()
	const counter =
		formData.get('counter') !== null
			? parseInt(formData.get('counter') as string, 10)
			: 0

	globalThis.counter = counter

	return new Response(`<div>${counter}</div>`, {
		status: 200,
		headers: {
			'Content-Type': 'text/html',
		},
	})
}
