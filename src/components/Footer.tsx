import FacebookIcon from '@mui/icons-material/Facebook'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Footer() {
	return (
		<footer
			className='flex w-full shrink-0 flex-row items-center gap-2 border-t px-4 py-6 md:px-6'
			role='contentinfo'
		>
			<p className='text-xs text-gray-500 dark:text-gray-400'>
				© 2024 Cotter Farm. All rights reserved.
			</p>
			<p>513-707-8960</p>
			<nav className='flex gap-4 sm:ml-auto sm:gap-6'>
				<NavLink
					className='text-xs underline-offset-4 hover:underline'
					to='https://www.facebook.com/cotterfarm'
					ariaLabel='Visit our Facebook page'
				>
					<FacebookIcon />
				</NavLink>
			</nav>
		</footer>
	)
}
