import cropRowsImg from '../media/img/crop_rows.jpeg'
import tillerRowsImg from '../media/img/rows.jpeg'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AboutUs() {
	return (
		<>
			<section className='w-full py-36' id='about' role='complementary'>
				<div className='container px-4 md:px-6'>
					<div className='grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								About Cotter Farm
							</h2>
							<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed'>
								Cotter Farm is a Community Supported Agriculture (CSA) project
								serving Hamilton and Clermont Counties. CSA members visit the
								farm in Batavia, OH on the banks of the East Fork of the Little
								Miami River throughout the growing season to pick up their share
								of seasonally available produce. Entering our 5th year of direct
								to consumer produce sales, we are excited to offer
								pasture-raised pork for the first time.
							</p>
						</div>
						<div className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'>
							<img
								alt='small walk-behind tractor in a field of crops'
								className='aspect-video rounded-xl object-cover'
								src={tillerRowsImg}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full'>
				<div className='container px-4 md:px-6'>
					<div className='grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
						<div className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'>
							<img
								alt='small walk-behind tractor in a field of crops'
								className='aspect-video rounded-xl object-cover'
								src={cropRowsImg}
							/>
						</div>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Our Values
							</h2>
							<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
								We are committed to sustainable and regenerative farming
								practices that prioritize the health of the soil, the well-being
								of our plants, and the quality of the food we produce. Our farm
								is a place of diversity and abundance, where we work in harmony
								with nature to create a thriving ecosystem.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
