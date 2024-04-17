import FacebookIcon from '@mui/icons-material/Facebook'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Footer() {
	return (
		<footer
			className='flex sm:flex-row justify-evenly w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 md:px-6 text-gray-600 text-xs'
		>
			<p className='text-xs'>
				© 2024 Cotter Farm. All rights reserved.
			</p>
			<div className='flex flex-col'>
				<p>1557 Olive Branch-Stonelick Rd,<br/> Batavia, OH 45103</p>
				<p>513-707-8960</p>
			</div>
			<a
				className='text-xs underline-offset-4 hover:underline'
				href='https://www.facebook.com/cotterfarm'
				target='_blank'
				aria-label='Visit our Facebook page' rel="noreferrer"
			>
				<FacebookIcon />
			</a>
		</footer>
	)
}
