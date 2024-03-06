import farmLogo from '../../public/farmLogo.png'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Header() {
	return (
		<header className='sticky top-0 z-10 flex h-24 items-center bg-slate-100 px-8 md:h-36 lg:px-12 w-full'>
			<a className='' href='/#top'>
				<img
					alt='handdrawn basket with produce and the words "Cotter Farm" underneath it'
					className='h-24 w-auto md:h-36'
					src={farmLogo}
				/>
				<span className='sr-only'>Cotter Farm</span>
			</a>
			<nav className='text-md ml-auto flex gap-4 font-medium underline-offset-4 sm:gap-6'>
				<a className='underline-offset-4 hover:underline' href='/#contact'>
					Sign Up
				</a>
				<a className='underline-offset-4 hover:underline' href='/#csa'>
					CSA Info
				</a>
				<a className='underline-offset-4 hover:underline' href='/#about'>
					About Us
				</a>
				<a className='underline-offset-4 hover:underline' href='/#contact'>
					Contact
				</a>
			</nav>
		</header>
	)
}

export default Header
