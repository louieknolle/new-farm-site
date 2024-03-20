import acornImg from '../media/img/acorn.webp'
import kaleImg from '../media/img/kale.jpeg'
import tomatoesImg from '../media/img/tomatoes.jpeg'
import zuchinniImg from '../media/img/zucchini.jpg'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function CSAInfo() {
	return (
		<>
			<section className='w-full py-36' id='csa' role='main'>
				<div className='container grid items-center gap-6 px-4 md:px-6'>
					<div className='mx-auto max-w-3xl space-y-4'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								What is a CSA?
							</h2>
							<p className='max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600'>
								Community Supported Agriculture (CSA) is a partnership between
								the farm and the community. Members purchase a seasonal share of
								the harvest from the farm in advance, providing the farm with
								financial support when expenses are highest. In return, members
								receive a weekly box of fresh, locally grown produce throughout
								the growing season.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full bg-gray-200 py-12 md:py-24 rounded-xl'>
				<div className='container grid items-center gap-6 px-4 md:px-6'>
					<div className='mx-auto max-w-3xl space-y-4'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								How it works
							</h2>
							<p className='max-w-[900px] text-gray-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Each week, members pick up their share of the harvest, enjoying
								a variety of in-season fruits, vegetables, and herbs. The exact
								contents of the share for the week depend on what is ripe and
								ready to be harvested. Members can also enjoy add-ons such as
								pick your own flowers and pork (call for details).
							</p>
							<ul className='list-disc space-y-2 pl-4 text-gray-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								<li>Season starts Friday, May 31st and lasts 25 weeks</li>
								<li>
									Shares are available for pick up Friday through Tuesday at any
									time
								</li>
								<li>
									The cost is $400 for the year, half shares also available
								</li>
								<li>
									Shares are available for pickup on the farm, signs will direct
									you to the walk-in cooler where the share boxes are
								</li>
								<li>
									Spring share example: lettuce, spinach, kale, radishes, beets
								</li>
								<li>
									Summer share example: 3 tomatoes, 2 peppers, 2 zucchini, 2
									cucumbers, green beans
								</li>
								<li>
									Fall share example: sweet potatoes, acorn squash, turnips,
									chard, peppers
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full py-12 md:py-24'>
				<div className='container grid items-center gap-6 px-4 md:px-6'>
					<div className='mx-auto max-w-3xl space-y-4'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Benefits of joining
							</h2>
							<ul className='list-disc space-y-2 pl-4 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600'>
								<li>
									Experience the freshest, most flavorful produce, harvested at
									the peak of ripeness.
								</li>
								<li>
									Support local agriculture and the preservation of farmland in
									your community.
								</li>
								<li>
									Connect with the seasons and expand your culinary horizons by
									trying new fruits and vegetables.
								</li>
								<li>
									Enjoy the convenience of one-stop shopping for your produce,
									knowing exactly where your food comes from.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full bg-gray-200 py-12 md:py-24 rounded-xl'>
				<div className='container grid items-center gap-6 px-4 md:px-6'>
					<div className='mx-auto max-w-3xl space-y-4'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Our Crops
							</h2>
							<p className='max-w-[600px] text-gray-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Here are some of the delicious items you can expect in your
								weekly share:
							</p>
						</div>
						<div className='grid gap-6 md:grid-cols-2'>
							<div className='flex items-start space-y-1'>
								<img
									alt='ripe, red tomatoes still on the vine'
									className='aspect-square h-32 w-32 overflow-hidden rounded-lg object-cover object-center'
									src={tomatoesImg}
								/>
								<div className='ml-1 grid gap-1'>
									<h3 className='text-lg font-semibold'>Tomatoes</h3>
									<p className='text-sm text-gray-950'>
										Ripe, juicy, and bursting with flavor.
									</p>
								</div>
							</div>
							<div className='flex items-start space-y-1'>
								<img
									alt='several dark green acorn squash in a pile'
									className='aspect-square h-32 w-32 overflow-hidden rounded-lg  object-cover object-center'
									src={acornImg}
								/>
								<div className='ml-1 grid gap-1'>
									<h3 className='text-lg font-semibold'>Acorn squash</h3>
									<p className='text-sm text-gray-950'>
										Perfect for roasting or making soup.
									</p>
								</div>
							</div>
							<div className='flex items-start space-y-1'>
								<img
									alt='zuchinni laying side by side on a wooden table'
									className='aspect-square h-32 w-32 overflow-hidden rounded-lg object-cover object-center'
									src={zuchinniImg}
								/>
								<div className='ml-1 grid gap-1'>
									<h3 className='text-lg font-semibold'>Zuchinni</h3>
									<p className='text-sm text-gray-950'>
										Versatile and delicious, great for grilling or roasting.
									</p>
								</div>
							</div>
							<div className='flex items-start space-y-1'>
								<img
									alt=''
									className='aspect-square h-32 w-32 overflow-hidden rounded-lg object-cover object-center'
									src={kaleImg}
								/>
								<div className='ml-1 grid gap-1'>
									<h3 className='text-lg font-semibold'>Kale</h3>
									<p className='text-sm text-gray-950'>
										Nutritious and hearty, perfect for making salads or
										smoothies.
									</p>
								</div>
							</div>
						</div>
						<p>
							Additional crops: Arugula, tatsoi, mizuna, beets, broccoli, snap
							pea shoots, sweet corn, Brussels sprouts if I get them early
							enough, green beans, sweet potatoes, kohlrabi, Cherry tomatoes,
							carrots, daikons, radishes, lettuce, winter squash, spinach,
							pumpkins, cabbage, peppers, chard, eggplant, summer squash,
							cucumbers, onions, garlic, turnips, water melon, normal melons
						</p>
					</div>
				</div>
			</section>
		</>
	)
}
