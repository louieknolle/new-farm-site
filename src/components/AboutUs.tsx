import cropRowsImg from '../media/img/crop_rows.jpeg'
import tillerRowsImg from '../media/img/rows.jpeg'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AboutUs() {
	return (
		<>
			<section className='w-full py-36' id='about' role='complementary'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center gap-4'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								About Cotter Farm
							</h2>
							<p className='mx-auto max-w-3xl text-gray-600 md:text-xl/relaxed'>
								Cotter Farm is a Community Supported Agriculture (CSA) project
								serving Hamilton and Clermont Counties. CSA members visit the
								farm in Batavia, OH on the banks of the East Fork of the Little
								Miami River throughout the growing season to pick up their share
								of seasonally available produce. Entering our 5th year of direct
								to consumer produce sales, we are excited to offer
								pasture-raised pork for the first time.
							</p>
						</div>
						<div className='max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'>
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
					<div className='flex flex-col items-center gap-4'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Our Values
							</h2>
							<p className='max-w-3xl text-gray-600 md:text-xl/relaxed'>
								We are committed to sustainable and regenerative farming
								practices that prioritize the health of the soil, the well-being
								of our plants, and the quality of the food we produce. Our farm
								is a place of diversity and abundance, where we work in harmony
								with nature to create a thriving ecosystem.
							</p>
						</div>
						<div className='max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'>
							<img
								alt='small walk-behind tractor in a field of crops'
								className='aspect-video rounded-xl object-cover'
								src={cropRowsImg}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
