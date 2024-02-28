import bannerImg from '../media/img/greenhouse_mic.jpeg'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Banner() {
	return (
		<section className='w-full py-36' id='top' role='banner'>
			<div className='container px-4 md:px-6'>
				<div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_1100px]'>
					<div className='space-y-4'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Cotter Farm: Community Supported Agriculture
						</h1>
						<p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							Enjoy a weekly box of fresh, locally grown produce straight from
							our farm to your table. Our CSA program connects you with the best
							the season has to offer while supporting sustainable agriculture.
						</p>
					</div>
					<img
						alt='man and woman farmers harvesting crops'
						className='mx-auto aspect-video w-auto overflow-hidden rounded-xl object-cover object-center sm:w-full'
						height='300'
						src={bannerImg}
						width='600'
					/>
				</div>
			</div>
		</section>
	)
}
