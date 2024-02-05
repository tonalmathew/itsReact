import banner from "../assets/banner.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import closeBtn from "../assets/close.png";
import styles from "./Project4.module.css";

function Project4() {
	return (
		<div className={styles.epicStart}>
			<button className='absolute w-8 m-10 top-0 right-0 hover:rotate-90 transition-transform'>
				<img src={closeBtn} alt='close' />
			</button>
			<main className='mx-5 pt-24 sm:mx-20 lg:mx-52'>
				<div className='my-10 text-center'>
					<h1 className={`${styles.fontRoboto} text-center font-extralight text-4xl my-14`}>
						Epic Games : An American video game and software developer and
						publisher based in Cary, North Carolina.
					</h1>
					<div>
						<img src={banner} alt='banner' />
					</div>
					<p className={`${styles.fontPoppins} font-normal mt-10 opacity-80`}>
						Create, play, and battle with friends for free in Fortnite. Be the
						last player standing in Battle Royale and Zero Build, experience a
						concert or live event, or discover over a million creator made
						games, including racing, parkour, zombie survival, and more. Each
						Fortnite island has an individual age rating so you can find the one
						that&apos;s right for you and your friends. Find it all in Fortnite
						... Drop In.
					</p>
					<button className={`${styles.fontPoppins} text-black bg-white min-w-40 w-auto sm:w-80 h-12 mt-10`}>
						Visit Website
					</button>
				</div>
				<div className='sm:m-20 md:flex md:gap-10 mt-32'>
					<div className='md:w-1/3 mb-32 md:mb-10'>
						<img src={img1} className='w-full h-auto' alt='image 1' />
						<p className={`text-center ${styles.fontRoboto} font-light mt-5`}>
							Explore large, destructible environments where no two games are
							ever the same.
						</p>
					</div>
					<div className='md:w-1/3 mb-32 md:mb-10'>
						<img src={img2} className='w-full h-auto' alt='image 2' />
						<p className={`text-center ${styles.fontRoboto} font-light mt-5`}>
							Team up with friends by sprinting, climbing, and smashing your way
							to earn your Victory Royale.
						</p>
					</div>
					<div className='md:w-1/3 mb-32 md:mb-10'>
						<img src={img3} className='w-full h-auto' alt='image 3' />
						<p className={`text-center ${styles.fontRoboto} font-light mt-5`}>
							Discover even more ways to play across thousands of creator-made
							game genres.
						</p>
					</div>
				</div>
				<div className='mt-32 text-center'>
					<h2 className={`${styles.fontRoboto} font-extralight text-3xl pb-5`}>
						Our Contribution
					</h2>
					<p className={`${styles.fontPoppins} font-normal opacity-80`}>
						Our core offering extends beyond mere profit generation; we
						emphasize the growth and active involvement of our user community.
						Collaborating with us represents an investment, rather than a mere
						expenditure. Our dedication to providing distinctive digital
						interactions guarantees unparalleled benefits for our clientele.
					</p>
					<div className='mt-16 mx-auto flex flex-col align-middle content-center sm:flex-row gap-20 justify-center text-center'>
						<div className='w-40 mx-auto'>
							<h1 className={`${styles.fontRoboto} font-extralight text-6xl`}>5M</h1>
							<p className={`${styles.fontRoboto} font-light pt-3`}>
								Daily User Engagements
							</p>
						</div>
						<div className='w-40 mx-auto'>
							<h1 className={`${styles.fontRoboto} font-extralight text-6xl`}>$500K</h1>
							<p className={`${styles.fontRoboto} font-light pt-3`}>
								Revenue Surge for an Platform
							</p>
						</div>
						<div className='w-40 mx-auto'>
							<h1 className={`${styles.fontRoboto} font-extralight text-6xl`}>10X</h1>
							<p className={`${styles.fontRoboto} font-light pt-3`}>
								ROAS on all our marketing campaigns
							</p>
						</div>
					</div>
				</div>
				<div className='mt-48 text-center'>
					<h2 className={`${styles.fontRoboto} font-light text-3xl`}>
						Interested in delving deeper into the project?
					</h2>
					<p className={`${styles.fontRoboto} mt-10 md:w-2/3 m-auto`}>
						If you&apos;d like to explore further details about our initiatives
						or any of our affiliated brands, don&apos;t hesitate to connect. You
						can reach out to us via email at <b>hello@abc.com</b> or give us a
						call at
						<b>+91 480 20802730</b>.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className={`${styles.fontPoppins} text-white bg-black border border-white w-auto sm:w-80 h-12 mt-10`}>
							Ring us on Skype
						</button>
						<button className={`${styles.fontPoppins} text-black bg-white w-auto sm:w-80 h-12 mt-10`}>
							Contact Us
						</button>
					</div>
				</div>
			</main>
			<footer className='text-center mt-48 mb-5'>
				<p className={`${styles.fontRoboto} opacity-90 font-light`}>
					© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
				</p>
			</footer>
		</div>
	);
}

export default Project4;
