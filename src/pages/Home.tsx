import { Button } from '@mui/material'
import AboutUs from 'components/AboutUs'
import Banner from 'components/Banner'
import ContactForm from 'components/ContactForm'
import CSAInfo from 'components/CsaInfo'
import Footer from 'components/Footer'
import Header from 'components/Header'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Component() {
	return (
		<div className='flex min-h-[100dvh] flex-col items-center justify-center'>
			<Header />
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
			<Banner />
			<main className='flex flex-1 flex-col items-center justify-center'>
				<CSAInfo />
				<AboutUs />
				<ContactForm />
			</main>
			<Footer />
		</div>
	)
}
