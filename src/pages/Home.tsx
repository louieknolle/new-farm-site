/* eslint-disable import/no-extraneous-dependencies */
import FacebookIcon from '@mui/icons-material/Facebook'
import { Button, TextField, TextareaAutosize } from '@mui/material'
import { NavLink } from 'react-router-dom'
import acornImg from '../media/img/acorn.webp'
import cropRowsImg from '../media/img/crop_rows.jpeg'
import farmLogo from '../media/img/farmLogo.png'
import bannerImg from '../media/img/greenhouse_mic.jpeg'
import kaleImg from '../media/img/kale.jpeg'
import tillerRowsImg from '../media/img/rows.jpeg'
import tomatoesImg from '../media/img/tomatoes.jpeg'
import zuchinniImg from '../media/img/zucchini.jpg'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Component() {
	return (
		<div className='flex min-h-[100dvh] flex-col justify-center scroll-smooth'>
			<header className='sticky top-0 flex h-24 items-center bg-slate-100 px-8 md:h-36 lg:px-12'>
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
			<main className='flex-1'>
				<section className='w-full py-36' id='top'>
					<div className='container px-4 md:px-6'>
						<div className='grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_1100px]'>
							<div className='space-y-4'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									Cotter Farm: Community Supported Agriculture
								</h1>
								<p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									Enjoy a weekly box of fresh, locally grown produce straight
									from our farm to your table. Our CSA program connects you with
									the best the season has to offer while supporting sustainable
									agriculture.
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
				<section className='w-full py-36' id='csa'>
					<div className='container grid items-center gap-6 px-4 md:px-6'>
						<div className='mx-auto max-w-3xl space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									What is a CSA?
								</h2>
								<p className='max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600'>
									Community Supported Agriculture (CSA) is a partnership between
									the farm and the community. Members purchase a seasonal share
									of the harvest from the farm in advance, providing the farm
									with financial support when expenses are highest. In return,
									members receive a weekly box of fresh, locally grown produce
									throughout the growing season.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full bg-gray-200 py-12 md:py-24'>
					<div className='container grid items-center gap-6 px-4 md:px-6'>
						<div className='mx-auto max-w-3xl space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									How it works
								</h2>
								<p className='max-w-[900px] text-gray-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Each week, members pick up their share of the harvest,
									enjoying a variety of in-season fruits, vegetables, and herbs.
									The exact contents of the share for the week depend on what is
									ripe and ready to be harvested. Members can also enjoy add-ons
									such as pick your own flowers and pork (call for details).
								</p>
								<ul className='list-disc space-y-2 pl-4 text-gray-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									<li>Season starts Friday, May 31st and lasts 25 weeks</li>
									<li>
										Shares are available for pick up Friday through Tuesday at
										any time
									</li>
									<li>
										The cost is $400 for the year, half shares also available
									</li>
									<li>
										Shares are available for pickup on the farm, signs will
										direct you to the walk-in cooler where the share boxes are
									</li>
									<li>
										Spring share example: lettuce, spinach, kale, radishes,
										beets
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
										Experience the freshest, most flavorful produce, harvested
										at the peak of ripeness.
									</li>
									<li>
										Support local agriculture and the preservation of farmland
										in your community.
									</li>
									<li>
										Connect with the seasons and expand your culinary horizons
										by trying new fruits and vegetables.
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
				<section className='w-full bg-gray-200 py-12 md:py-24'>
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
				<section className='w-full py-36' id='about'>
					<div className='container px-4 md:px-6'>
						<div className='grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									About Cotter Farm
								</h2>
								<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed'>
									Cotter Farm is a Community Supported Agriculture (CSA) project
									serving Hamilton and Clermont Counties. CSA members visit the
									farm in Batavia, OH on the banks of the East Fork of the
									Little Miami River throughout the growing season to pick up
									their share of seasonally available produce. Entering our 5th
									year of direct to consumer produce sales, we are excited to
									offer pasture-raised pork for the first time.
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
									practices that prioritize the health of the soil, the
									well-being of our plants, and the quality of the food we
									produce. Our farm is a place of diversity and abundance, where
									we work in harmony with nature to create a thriving ecosystem.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-36' id='contact'>
					<div className='container grid items-center gap-6 px-4 md:px-6'>
						<div className='mx-auto max-w-3xl space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									Contact Us or Sign Up!
								</h2>
								<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
									Interested in joining as a CSA member? Want to learn more
									about our farm? We would love to hear from you. Contact us
									using the information below. Or call us directly at
									513-707-8960.
								</p>
							</div>
							<form className='grid gap-4'>
								<TextField placeholder='Name' type='text' />
								<TextField placeholder='Email' type='email' />
								<TextareaAutosize
									className='min-h-[200px]'
									placeholder='Message'
								/>
								<Button type='submit'>Submit</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
			<footer className='flex w-full shrink-0 flex-row items-center gap-2 border-t px-4 py-6 md:px-6'>
				<p className='text-xs text-gray-500 dark:text-gray-400'>
					© 2024 Cotter Farm. All rights reserved.
				</p>
				<p>513-707-8960</p>
				<nav className='flex gap-4 sm:ml-auto sm:gap-6'>
					<NavLink
						className='text-xs underline-offset-4 hover:underline'
						to='https://www.facebook.com/cotterfarm'
					>
						<FacebookIcon />
					</NavLink>
				</nav>
			</footer>
		</div>
	)
}
