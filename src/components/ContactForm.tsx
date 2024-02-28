import { Button, TextField, TextareaAutosize } from '@mui/material'
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
						<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
							Interested in joining as a CSA member? Want to learn more about
							our farm? We would love to hear from you. Contact us using the
							information below. Or call us directly at 513-707-8960.
						</p>
					</div>
					<form
						action='https://api.web3forms.com/submit'
						method='POST'
						className='grid gap-4'
					>
						<input
							type='hidden'
							name='access_key'
							value='c0398686-ae2e-4de4-9139-19a616061139'
						/>
						<TextField
							placeholder='Name'
							type='text'
							aria-label='name'
							required
							name='name'
						/>
						<TextField
							placeholder='Email'
							type='email'
							aria-label='email'
							required
							name='email'
						/>
						<TextareaAutosize
							className='min-h-[200px]'
							placeholder='Message'
							aria-label='message'
							name='message'
							required
						/>
						<input type='checkbox' name='botcheck' className='hidden' />
						<Button type='submit'>Submit</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
