import bannerImg from '../media/img/greenhouse_mic.jpeg'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Banner() {
	return (
		<section className='w-full py-36' id='top' role='banner'>
			<div className='container px-4 md:px-6 flex flex-col items-center gap-y-4'>
				<div className='flex items-baseline gap-4'>
					<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
						Cotter Farm   
					</h1>
					<h3 className='text-3xl'>Community Supported Agriculture</h3>
				</div>
				<img
					alt='horizontal rows of crops in a greenhouse with a person in the background watering plants'
					className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full'
					height='300'
					src={bannerImg}
					width='600'
				/>
				<p className='mx-auto max-w-3xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
					Enjoy a weekly box of fresh, locally grown produce straight from
					our farm to your table. Our CSA program connects you with the best
					the season has to offer while supporting sustainable agriculture.
				</p>
			</div>
		</section>
	)
}
