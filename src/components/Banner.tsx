import bannerImg from '../media/img/greenhouse_mic.jpeg'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Banner() {
	return (
		<section className='py-36' id='top' role='banner'>
			<div
				className='container flex h-[40rem] min-w-[100dvw] items-start justify-center pt-8 text-gray-950'
				style={{
					backgroundImage: `url(${bannerImg})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<div className='flex w-2/3 md:w-full max-w-2xl flex-col items-center justify-center rounded-xl border-2 border-gray-950 bg-gray-200 bg-opacity-80 p-8 text-center font-bold'>
					<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
						Cotter Farm CSA
					</h1>
					<p className='mx-auto max-w-3xl  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
						Join our Community Supported Agriculture and enjoy a weekly box of fresh, locally grown produce straight from our farm to your table.
					</p>
				</div>
			</div>
		</section>
	)
}
