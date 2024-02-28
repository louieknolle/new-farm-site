import AboutUs from 'components/AboutUs'
import Banner from 'components/Banner'
import CSAInfo from 'components/CSAInfo'
import ContactForm from 'components/ContactForm'
import Footer from 'components/Footer'
import Header from 'components/Header'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Component() {
	return (
		<div className='flex min-h-[100dvh] flex-col justify-center scroll-smooth'>
			<Header />
			<main className='flex-1'>
				<Banner />
				<CSAInfo />
				<AboutUs />
				<ContactForm />
			</main>
			<Footer />
		</div>
	)
}
