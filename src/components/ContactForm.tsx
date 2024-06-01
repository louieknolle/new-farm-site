import { Button } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Component() {
	return (
		<section className='w-full py-36' id='contact'>
			<div className='container grid items-center gap-6 px-4 md:px-6'>
				<div className='mx-auto max-w-3xl space-y-4'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
							Contact Us or Sign Up!
						</h2>
						<p className='max-w-lg text-gray-600 md:text-xl/relaxed'>
							Want to learn more about our farm? We would love to hear from you.
							Contact us using the form below. Or call us directly at
							513-707-8960.
						</p>
					</div>
					<form
						action='https://api.web3forms.com/submit'
						method='POST'
						className='flex w-full flex-col items-center justify-center gap-4'
					>
						<input
							type='hidden'
							name='access_key'
							value='c0398686-ae2e-4de4-9139-19a616061139'
						/>
						<label htmlFor='name' className='flex w-full flex-col'>
							Name
							<input
								placeholder='Myst Rainwater'
								type='text'
								aria-label='name-input'
								required
								name='name'
								id='name'
							/>
						</label>
						<label htmlFor='email' className='flex w-full flex-col'>
							Email
							<input
								placeholder='hello@email.com'
								type='text'
								aria-label='email-input'
								required
								name='email'
								id='email'
							/>
						</label>
						<label htmlFor='message' className='flex w-full flex-col'>
							Message
							<textarea
								placeholder="Hello, is it too early to sign up for next year? I'm interested in a full share and delivery service. Thanks"
								aria-label='message-input'
								required
								name='message'
								id='message'
								rows={4}
							/>
						</label>
						<input type='checkbox' name='botcheck' className='hidden' />
						<Button variant='contained' sx={{ width: '50%' }} type='submit'>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
