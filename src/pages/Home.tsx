import AboutUs from 'components/AboutUs'
import Banner from 'components/Banner'
import ContactForm from 'components/ContactForm'
import CSAInfo from 'components/CsaInfo'
import Footer from 'components/Footer'
import Header from 'components/Header'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Component() {
	return (
		<div className='flex min-h-[100dvh] flex-col justify-center items-center'>
			<Header />
			<main className='flex-1 items-center flex flex-col justify-center'>
				<Banner />
				<CSAInfo />
				<AboutUs />
				<ContactForm />
			</main>
			<Footer />
		</div>
	)
}
