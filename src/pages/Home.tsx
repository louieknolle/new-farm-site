/* eslint-disable import/no-extraneous-dependencies */
import { Button, TextField, TextareaAutosize } from '@mui/material'
import { NavLink } from 'react-router-dom'
import farmLogo from '../media/img/farmLogo.png'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Component() {
	return (
		<div className='flex min-h-[100dvh] flex-col justify-center scroll-smooth'>
			<header className='sticky top-0 flex h-36 items-center px-8 lg:px-12 bg-slate-100' id='top'>
				<a className='' href='/#top'>
					<img alt='' className='h-36 w-auto' src={farmLogo} />
					<span className='sr-only'>Cotter Farm</span>
				</a>
				<nav className='ml-auto flex gap-4 sm:gap-6 text-md font-medium underline-offset-4'>
					<a
            className='underline-offset-4 hover:underline'
						href='/#contact'
					>
						Sign Up
					</a>
					<a
            className='underline-offset-4 hover:underline'
						href='/#csa'
					>
						CSA Info
					</a>
					<a
            className='underline-offset-4 hover:underline'
						href='/#about'
					>
						About Us
					</a>
					<a
            className='underline-offset-4 hover:underline'
						href='/#contact'
					>
						Contact
					</a>
				</nav>
			</header>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32'>
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
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full w-auto'
								height='300'
								src='/src/media/img/farm_1.webp'
								width='600'
							/>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24' id='csa'>
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
				<section className='w-full bg-gray-200 py-12 md:py-24 lg:py-32'>
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
									such as fresh flowers, eggs, or honey from the farm.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
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
				<section className='w-full bg-gray-200 py-12 md:py-24 lg:py-32'>
					<div className='container grid items-center gap-6 px-4 md:px-6'>
						<div className='mx-auto max-w-3xl space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									What Is in Season
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
										className='aspect-square overflow-hidden rounded-lg object-cover object-center w-32 h-32'
										src='/src/media/img/tomatoes.jpeg'
									/>
									<div className='grid gap-1 ml-1'>
										<h3 className='text-lg font-semibold'>Tomatoes</h3>
										<p className='text-sm text-gray-950'>
											Ripe, juicy, and bursting with flavor.
										</p>
									</div>
								</div>
								<div className='flex items-start space-y-1'>
									<img
										alt='fresh picked strawberries in a basket'
										className='aspect-square overflow-hidden rounded-lg object-cover object-center  w-32 h-32'
										src='/src/media/img/strawberries.jpeg'
									/>
									<div className='grid gap-1 ml-1'>
										<h3 className='text-lg font-semibold'>Strawberries</h3>
										<p className='text-sm text-gray-950'>
											Sweet and perfect for snacking or adding to salads.
										</p>
									</div>
								</div>
								<div className='flex items-start space-y-1'>
									<img
										alt='zuchinni laying side by side on a wooden table'
										className='aspect-square overflow-hidden rounded-lg object-cover object-center w-32 h-32'
										src='/src/media/img/zucchini.jpg'
									/>
									<div className='grid gap-1 ml-1'>
										<h3 className='text-lg font-semibold'>Zucchini</h3>
										<p className='text-sm text-gray-950'>
											Versatile and delicious, great for grilling or roasting.
										</p>
									</div>
								</div>
								<div className='flex items-start space-y-1'>
									<img
										alt=''
										className='aspect-square overflow-hidden rounded-lg object-cover object-center h-32 w-32'
										src='/src/media/img/kale.jpeg'
									/>
									<div className='grid gap-1 ml-1'>
										<h3 className='text-lg font-semibold'>Kale</h3>
										<p className='text-sm text-gray-950'>
											Nutritious and hearty, perfect for making salads or
											smoothies.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        <section className='w-full py-12 md:py-24' id='about'>
					<div className='container px-4 md:px-6'>
						<div className='grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									About Cotter Farm
								</h2>
								<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed'>
                Cotter Farm is a Community Supported Agriculture (CSA) project serving Hamilton and Clermont Counties. CSA members visit the farm in Batavia, OH on the banks of the East Fork of the Little Miami River throughout the growing season to pick up their share of seasonally available produce. Entering our 5th year of direct to consumer produce sales, we are excited to offer pasture-raised pork for the first time.
								</p>
							</div>
							<div className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'>
								<img
									alt=''
									className='aspect-video rounded-xl object-cover'
									src='/src/media/img/overhead-farm-photo.webp'
								/>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full'>
					<div className='container grid items-center gap-6 px-4 md:px-6'>
						<div className='mx-auto max-w-3xl space-y-4'>
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
				<section className='w-full py-12 md:py-24 lg:py-32' id='contact'>
					<div className='container grid items-center gap-6 px-4 md:px-6'>
						<div className='mx-auto max-w-3xl space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									Contact Us or Sign Up!
								</h2>
								<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
									Interested in joining as a CSA member? Have questions about our CSA program? Want to learn more about
									our farm? We would love to hear from you. Contact us using the
									information below.
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
			<footer className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
				<p className='text-xs text-gray-500 dark:text-gray-400'>
					© 2024 Cotter Farm. All rights reserved.
				</p>
				<nav className='flex gap-4 sm:ml-auto sm:gap-6'>
					<NavLink
						className='text-xs underline-offset-4 hover:underline'
						to='/'
					>
						Terms of Service
					</NavLink>
					<NavLink
						className='text-xs underline-offset-4 hover:underline'
						to='/'
					>
						Privacy
					</NavLink>
				</nav>
			</footer>
		</div>
	)
}
