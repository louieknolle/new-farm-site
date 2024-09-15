/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@mui/material'

function SignUpNow() {
  return (
    <div className='bg-green-200 border-t-4 border-green-500 text-green-900 p-4 text-center shadow-2xl'>
				<h3 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
					Sign up now for the 2024 season!
				</h3>
				<div className='mt-4 space-y-2'>
					<p className='text-lg'>Full shares: <span className='font-semibold'>$400</span></p>
					<p className='text-lg'>Half shares: <span className='font-semibold'>$200</span></p>
					<p className='text-lg'>Delivery service(optional): <span className='font-semibold'>$200</span></p>
				</div>
				<Button className='mt-6' variant='contained' sx={{'backgroundColor': 'darkgreen', color:'white', '&:hover': {backgroundColor: 'darkgreen', color: 'white'}, boxShadow: 'revert'}}><a href='/#contact'>Get in touch</a></Button>
			</div>
  )
}

export default SignUpNow

