import { Button } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Component() {
	return (
		<section className='w-full py-36' id='contact' role='form'>
			<div className='container grid items-center gap-6 px-4 md:px-6'>
				<div className='mx-auto max-w-3xl space-y-4'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
							Contact Us or Sign Up!
						</h2>
						<p className='text-gray-600 md:text-xl/relaxed max-w-lg'>
							Interested in joining as a CSA member? Want to learn more about
							our farm? We would love to hear from you. Contact us using the
							information below. Or call us directly at 513-707-8960.
						</p>
					</div>
					<form
						action='https://api.web3forms.com/submit'
						method='POST'
						className='flex flex-col gap-4 w-full justify-center items-center'
					>
						<input
							type='hidden'
							name='access_key'
							value='c0398686-ae2e-4de4-9139-19a616061139'
						/>
						<label htmlFor='name' className='flex flex-col w-full'>
							Name
							<input 
								placeholder='Myst Rainwater'
								type='text'
								aria-label='name-input'
								required
								name='name' 
							/>
						</label>
						<label htmlFor='email' className='flex flex-col w-full'>
							Email
							<input 
								placeholder='hello@email.com'
								type='text'
								aria-label='email-input'
								required
								name='email' 
							/>
						</label>
						<label htmlFor='message' className='flex flex-col w-full'>
							Message
							<textarea 
								placeholder='Hello, I am interested in joining your CSA!'								
								aria-label='message-input'
								required
								name='message'
								rows={4} 
							/>
						</label>
						<input type='checkbox' name='botcheck' className='hidden' />
						<Button variant='contained' sx={{width: '50%'}} type='submit'>Submit</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
