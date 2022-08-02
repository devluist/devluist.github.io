import { useRef, useEffect } from 'react';
import { Flex, Text, Link, Image, Center, List, Box, ListItem, Show, Button } from '@chakra-ui/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import {
	TwitterIcon,
	TelegramIcon,
	LinkedinIcon,
	GithubIcon,
	EmailIcon,
	GoUpIcon
} from './common/icons';
import ItemList from './common/ItemList';


gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


export default function App() {

	const INTRO = useRef(null);
	const INTRO_LOGO = useRef(null);
	const INTRO_TEXT = useRef(null);
	const INTRO_TEXT_DIV = useRef(null);

	const TEXT_FRONTEND = useRef(null);
	const TEXT_OVER_BRAIN = useRef(null);
	const TEXT_BACKEND = useRef(null);
	const IMG_BRAIN_L = useRef(null);
	const IMG_BRAIN_R = useRef(null);
	const IMG_MY_SVG = useRef(null);
	const IMG_BRAIN_IN_LOVE = useRef(null);

	const PATH_IN_LOVE = useRef(null);

	const CURSOR = useRef(null);


	useEffect(() => {

		const local_INTRO = INTRO.current;
		const local_INTRO_TEXT_DIV = INTRO_TEXT_DIV.current;
		const local_INTRO_LOGO = INTRO_LOGO.current;
		const local_INTRO_TEXT = INTRO_TEXT.current;

		gsap.timeline()
			.fromTo(local_INTRO_LOGO, { y: -200 }, { y: 0, duration: 2 }, 0)
			.fromTo(local_INTRO_TEXT_DIV,
					{ display: "none", duration: 2 },
					{ display: "inline-block" },
					">"
				)
			.fromTo(local_INTRO_TEXT, { x: -300 }, { x: 0, duration: 1 }, ">")
			.to([local_INTRO, local_INTRO_TEXT_DIV, local_INTRO_LOGO], { height: 0 }, ">")


		/* -------- CONTENT -------- */

		const local_TEXT_FRONTEND = TEXT_FRONTEND.current;
		const local_TEXT_OVER_BRAIN = TEXT_OVER_BRAIN.current;
		const local_IMG_BRAIN_L = IMG_BRAIN_L.current;
		const local_IMG_BRAIN_R = IMG_BRAIN_R.current;
		const section3 = document.querySelector(".section3");
		const subsections3 = gsap.utils.toArray(".subsections3");

		const local_IMG_MY_SVG = IMG_MY_SVG.current;
		const local_IMG_BRAIN_IN_LOVE = IMG_BRAIN_IN_LOVE.current;
		const local_PATH_IN_LOVE = PATH_IN_LOVE.current;

		const local_CURSOR = CURSOR.current;


		gsap.to(subsections3, {
			xPercent: -100 * (subsections3.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: section3,
				pin: true,
				pinSpacing: true,
				scrub: 1, //
				//anticipatePin: 1,
				//invalidateOnRefresh: true,
				//refreshPriority: 1,
				end: () => "+=" + section3.clientWidth
			}
		});
		gsap.fromTo(local_TEXT_FRONTEND, {x: "-15%"}, {x: "10%", scrollTrigger: {
			trigger: section3,
 			toggleActions: "play complete reverse reset",
			scrub: true
		}})
		gsap.fromTo(local_IMG_BRAIN_R, {x: "-100%"}, {x: "0", scrollTrigger: {
			trigger: section3,
			start: "top 90%",
			end: "top 10%",
			scrub: true
		}})
		gsap.fromTo(local_TEXT_OVER_BRAIN, {opacity: 0, transform: "scale(0.25)"}, {opacity: 1, transform: "scale(1)", scrollTrigger: {
			trigger: section3,
			start: "top 80%",
			end: "top 0",
			scrub: true
		}})
		gsap.fromTo(local_IMG_BRAIN_L, {x: "100%"}, {x: "0", scrollTrigger: {
			trigger: section3,
			start: "top 80%",
			end: "top 10%",
			scrub: true
		}})

		/* ---------- SECTION 5 ----------- */

		gsap.timeline({
			scrollTrigger: {
				trigger: local_IMG_MY_SVG,
				scrub: 1,
				start: "top center"
			}
		})
		.to(local_IMG_BRAIN_IN_LOVE, {
			easy: "none",
			motionPath: {
				path: local_PATH_IN_LOVE,
				align: local_PATH_IN_LOVE,
				alignOrigin: [0.5, 0.5]
			},
		}, 0)

		if(document.body.clientWidth >= 760){
			var init, positionElement, timer;

			positionElement = (event) => {
				var mouse;
				mouse = {
					x: event.clientX,
					y: event.clientY
				};
				local_CURSOR.style.top = mouse.y + 'px';
				return local_CURSOR.style.left = mouse.x + 'px';
			};
			
			timer = false;
			
			window.onmousemove = init = (event) => {
				var _event;
				_event = event;
		
				return timer = setTimeout(() => {
					return positionElement(_event);
				}, 1);
			};
		}


	}, [])

	function scroll2top() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<Flex
			id="container"
			overflowX="hidden"
			flexDirection="column"
		>
			<Box ref={CURSOR} display={{ base: "none", md: "block"}} width="25px" height="25px" zIndex="1000" position="fixed" top="0" left="0" border="3px solid white" backgroundColor="rgb(50 140 228 / 51%)" borderRadius="50" pointerEvents="none"></Box>

			<Center position="absolute" top="0" left="0" ref={INTRO} bg="#111111" className='intro' h="100vh" w="100%" zIndex="100">
				<Image
					alt='My Personal Logo'
					ref={INTRO_LOGO}
					w={{ sm: '90px', md: '140px' }}
					h={{ sm: '90px', md: '140px' }}
					src="/assets/images/lt_logo.svg"
				/>
				<Box ref={INTRO_TEXT_DIV} overflow="hidden">
					<Text ref={INTRO_TEXT} fontSize={{ sm: '32px', md: '48px' }} fontWeight="extrabold">Luis Tena</Text>
				</Box>
			</Center>


			<Flex id="section1" w="100vw" h="100vh" justifyContent="center" flexDirection={{ base: 'column', lg: 'row' }} alignItems={{ base: 'unset', lg: 'center' }}>
				<Box>
					<Text
						fontSize={{ base: '30px', md: '40px', lg: '58px' }}
						fontWeight="extrabold"
						textAlign="center"
					>
						Hola, I am
						<Text as="span" display={{base: "inline", lg: "block"}} bgGradient="linear(to-r, #d53333 0%, #daae51 100%)" bgClip="text">{' '}Luis Tena</Text>
					</Text>
					<Text
						fontSize={{ base: '20px', md: '28px', lg: '32px' }}
						fontWeight="normal"
						textAlign="center"
					>
						SSr. Software Developer
					</Text>
				</Box>

				<Box>
					<Flex
						w={{ base:"100vw", lg: "60vw", "2xl": "700px" }}
						h="70vh"
						alignItems="center"
						justifyContent="center"
					>
						<Image
							alt='A selfie of me'
							width="80%"
							height="80%"
							borderRadius="3%"
							objectFit="fill"
							src='/assets/images/luis_tena_2022.jpg'
						/>
					</Flex>
					<Flex justifyContent="space-evenly" mb="20px">
						<TwitterIcon />
						<TelegramIcon />
						<LinkedinIcon />
						<GithubIcon />
						<EmailIcon />
						{/*
							href="medium.com/devlt"
							href="notion.com/devlt"
						*/}
					</Flex>
				</Box>
			</Flex>

			<Flex id="section2" w="100vw" h="100vh" bg="#d53333" flexDirection="column">
				<Text
					color="black"
					w="90vw"
					marginLeft="5vw"
					fontSize={{ sm: '40px', md: '3em' }}
					lineHeight="45px"
					fontWeight="extrabold"
					mt="5vh"
				>
					Presentation format
				</Text>
				<Text
					color="#D8C892"
					w="90vw"
					marginLeft="5vw"
					fontSize={{ sm: '18px', md: '20px' }}
					fontWeight="bold"
				>
					Ordered by faster to read first
				</Text>

				<Flex mt="10vh" flexDirection='column' alignItems="center">
					<ItemList>
						<Link target="_blank" href="/assets/Luis_Tena-SSr_Full_Stack_Developer.pdf">
							PDF
						</Link>
					</ItemList>
					<ItemList>Video (coming soon)</ItemList>
					<ItemList borderDown>
						<Link href="#section3">Continue scrolling</Link>
					</ItemList>
				</Flex>
			</Flex>

			<Flex className="section3" id="section3" overscrollBehavior="none" w="600%" h="100%" flexWrap="nowrap" overflow="hidden">

				<Flex className='subsections3' w="100vw" h="100vh" flexDirection="column" justifyContent="space-around" alignItems="stretch">
					<Text ref={TEXT_FRONTEND} fontWeight="extrabold" color="#CC676A" fontSize={{base: "30px", md: "48px"}} ml={{base: "20px", mb:"60px"}}>Frontend</Text>

					<Flex flexDirection="column" alignItems="center" position="relative">
						<Image ref={IMG_BRAIN_R} alt='Right brain hemisphere 3D model' width={{base: "200px", lg: "300px"}} src='/assets/images/right_brain.webp' />
						<Text
							zIndex="100"
							ref={TEXT_OVER_BRAIN}
							fontWeight="extrabold"
							position="absolute"
							maxWidth={{base: "250px", lg: "400px"}}
							top={{base: "45px", lg: "52px"}}
							fontSize={{base: "22px", lg: "40px"}}
							width="70%"
							textAlign="center"
						>
							My brain as a Fullstack Developer
						</Text>
						<Image ref={IMG_BRAIN_L} alt='Left brain hemisphere 3D model' width={{base: "200px", lg: "300px"}} src='/assets/images/left_brain.webp' />
					</Flex>

					<Text ref={TEXT_BACKEND} fontWeight="extrabold" color="#FF7D58" fontSize={{base: "30px", md: "48px"}} textAlign="right" mr="15px">Backend</Text>
				</Flex>

				<Center flexDir="column" className='subsections3' w="100vw" h="100vh">
					<Box w={{base: "90vw", md: "70vw"}}>
						<Text fontWeight="extrabold" color="#CC676A" fontSize={{base: "30px", lg: "48px"}}>Frontend</Text>

						<Text fontSize={{base: "18px", lg: "28px"}} hyphens="auto" textAlign="justify">I have worked building brand identity and t-shirt & jersey designs for local businesses and clients, which has improved my Photoshop, Gimp, and Inkscape skills.
						<br /><br />
						Later, I have used these skills for web development and UI design.</Text>
					</Box>
				</Center>
				<Center className='subsections3' w="100vw" h="100vh" position="relative">
					<Text transform="rotate(-90deg)" position="absolute" borderBottom="3px solid #CC676A" left="0%" fontSize={{base:"28px", lg: "48px"}} fontWeight="bold">Brand Id</Text>
					<Center flexDirection="column" justifyContent="space-evenly" alignItems="flex-end" w="80vw" h="100vh">
						<Image alt='Business card design for a client' w="75%" h="40%" src="/assets/images/selected_work/biz-card.webp" />
						<Image alt='Product sticker design for a client' w="75%" h="40%" src="/assets/images/selected_work/product-sticker.webp" />
					</Center>
				</Center>
				<Center className='subsections3' w="100vw" h="100vh">
					<Image alt='Poster design for a client' w={{base: '100%', lg: "35%"}} height={{base: '80%', lg: "125%"}} src="/assets/images/selected_work/pendon-gisell.webp" transform={{base: 'unset', lg: "rotate(-90deg)"}} />
				</Center>
				<Flex transform="rotate(-90deg)" flexDirection="column" justifyContent="center" alignItems="center" className='subsections3' w="100vw" h="100vh" >
					<Text borderBottom="3px solid #CC676A" mb="10px" fontSize={{base:"28px", lg: "48px"}} fontWeight="bold">Jersey Design</Text>

					<Show breakpoint='(max-width: 767px)'>
						<Image alt='Jersey designs made for clients' src="/assets/images/selected_work/jerseys-mockups.webp" maxWidth="90%" />
					</Show>
					<Show breakpoint='(min-width: 768px)'>
						<Image alt='Jersey designs made for client' src="/assets/images/selected_work/jerseys-mockups-rotated.webp" h="100%" />
					</Show>
				</Flex>
				<Center flexDirection="column" className='subsections3' w="100vw" h="100vh">
					<Text fontSize={{base:"14px", md:"16px", lg:"22px"}} hyphens="auto" w="85%" textAlign="justify" >
						I started coding as a Frontend Developer, for my first entrepreneurship attempt, a Venezuelan freelancer marketplace, from 2014 to 2015. I could not afford to continue running the business due to the economic crisis in Venezuela.
						<br /><br />
						Then from 2018 to 2021, I have co-developed and maintained an Admin web app made in React called <Link target="_blank" href="https://dondemand.io">DonDemand.io</Link>, for <Link target="_blank" href="https://simgulary.io">Simgulary.io</Link>.
						<br /><br />
						And I’ve also learned modern animations, CSS effects, and tools (like chakra UI) for this portfolio.
						<br /><br />
						After that, I started developing a game on the blockchain as entrepreneurship and learning Next.js and web3 technologies.
					</Text>
				</Center>
			</Flex>

			<Center className="section4" bg="#d53333" /* color="#000000" */ w="100vw" h="100vh">
				<Box w={{base: "90vw", md: "80vw"}} >
					<Text fontWeight="extrabold" color="#ffd76e" fontSize={{base: "30px", lg: "48px"}} textAlign="right" >Backend</Text>
					<Text textAlign="justify" hyphens="auto" fontSize={{base:"14px", md:"18px", lg:"24px"}}>
						I chose Python (Django) as the backend language and Postgres for my first entrepreneurship in 2015.
						<br /><br />
						I also have employed Node.js (Express.js) and MongoDB for a full-featured API. A College project developed during 2017-2018.
						<br /><br />
						It's been a couple of years since I haven't used python. Until 2021, when I used the modern FastAPI framework and GraphQL with Postgres, to start building the game API for my second entrepreneurship attempt.
					</Text>
				</Box>
			</Center>

			<Flex w="100vw" className='section5' flexDirection="column" alignItems="center" sx={{ text: { fill: "white", fontSize: "1.2em" }}}>
				<Text fontWeight="extrabold" fontSize={{base:"30px", lg:"46px"}} mt="10vh" >What my brain ❤️?</Text>
				<Image
					alt='3D brain model'
					ref={IMG_BRAIN_IN_LOVE}
					w={{base:"30%", lg:"200px"}}
					src='/assets/images/brain.webp'
				/>
				<Box w={{base: "100%", lg: "70%"}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="mysvg"
						ref={IMG_MY_SVG}
						version="1.1"
						viewBox="0 0 460 940"
					>
						<path id="myline"
							fill="none"
							className='myline'
							ref={PATH_IN_LOVE}
							stroke="#fff"
							strokeLinecap="butt"
							strokeLinejoin="miter"
							strokeOpacity="1"
							strokeWidth="1"
							d="m 232.65647,44.597392 c 2.42502,15.811218 -2.39568,32.588718 -12.844,44.701027 -10.44831,12.112311 -26.33699,19.342351 -42.3329,19.263311 -6.96884,-0.0344 -14.01928,-1.37291 -20.85123,0.002 -7.45407,1.50011 -14.10948,6.28661 -18.24513,12.66704 -4.13565,6.38042 -5.7904,14.24922 -4.98133,21.80957 0.80908,7.56035 4.01369,14.78906 8.75268,20.73511 4.73898,5.94605 10.97246,10.63039 17.82892,13.91709 13.71293,6.57338 29.52937,7.50955 44.64687,5.86177 15.11749,-1.64778 29.84579,-5.73266 44.74205,-8.79129 16.97316,-3.48508 34.30772,-5.64771 51.61832,-4.88805 17.3106,0.75966 34.6387,4.51591 50.07874,12.37969 15.44005,7.86378 28.92184,19.98415 37.10207,35.2589 8.18023,15.27474 10.7576,33.75573 5.68303,50.32325 -2.90722,9.49154 -8.21728,18.18381 -15.01432,25.41855 -6.79703,7.23475 -15.05747,13.03186 -23.98245,17.37764 -17.84998,8.69156 -38.0467,11.52292 -57.89982,11.65892 -29.43578,0.20165 -58.57758,-5.24124 -87.85539,-8.29346 -29.2778,-3.05222 -59.56246,-3.60581 -87.38601,6.0044 -19.44472,6.71618 -37.332108,18.4999 -50.011646,34.6997 -12.679538,16.1998 -19.893082,36.9084 -18.539295,57.43573 0.916018,13.88949 5.678295,27.42581 13.111993,39.19429 7.433698,11.76849 17.489439,21.79201 28.913577,29.74476 22.848281,15.90549 50.659511,23.354 78.347791,26.25016 30.58997,3.19967 61.45551,1.18579 92.20918,1.62837 30.75368,0.44259 62.13973,3.52051 90.16987,16.18129 24.0927,10.8823 45.2094,29.05118 57.65043,52.37721 12.44103,23.32603 15.66906,51.85426 6.71209,76.72705 -5.50393,15.28399 -15.3854,28.86559 -27.77598,39.37117 -12.39057,10.50558 -27.23523,17.97613 -42.87145,22.38089 -31.27246,8.80952 -65.00185,5.32568 -96.01046,-4.37173 -38.17302,-11.93796 -73.87828,-33.14851 -113.64863,-37.3928 -19.88517,-2.12214 -40.690716,0.32339 -58.232158,9.92659 -8.770721,4.8016 -16.624333,11.35866 -22.588491,19.38423 -5.964157,8.02557 -10.002837,17.53337 -11.23447,27.45627 -1.322146,10.65214 0.60906,21.59692 4.873107,31.44751 4.264047,9.85059 10.804725,18.63111 18.553207,26.05925 15.496963,14.85628 35.425465,24.15862 55.437325,31.92976 20.01185,7.77114 40.62858,14.33596 59.33702,24.86495 18.70843,10.52899 35.7393,25.66898 43.69961,45.60634 3.7004,9.268 5.32767,19.35707 4.72879,29.3185"
						></path>
						<text x="15%" y="92%" className='svg-text'>1y use</text>
						<g id="figma" transform="translate(96.12 786.76) scale(.15166)">
							<path
							id="path0_fill"
							fill="#0acf83"
							d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
							></path>
							<path
							id="path1_fill"
							fill="#a259ff"
							d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
							></path>
							<path
							id="path1_fill_1_"
							fill="#f24e1e"
							d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
							></path>
							<path
							id="path2_fill"
							fill="#ff7262"
							d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z"
							></path>
							<path
							id="path3_fill"
							fill="#1abcfe"
							d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
							></path>
						</g>
						<text x="10%" y="68%" className='svg-text'>50% mastered</text>
						<g id="docker" transform="translate(84.93 657.6) scale(.07484)">
							<rect
							id="rect860"
							width="512"
							height="512"
							x="0"
							y="0"
							fill="#fff"
							rx="15%"
							></rect>
							<path
							id="path862"
							stroke="#066da5"
							strokeWidth="38"
							d="M296 226h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42"
							></path>
							<path
							id="path864"
							fill="#066da5"
							d="M472 228s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39"
							></path>
						</g>
						<text x="50%" y="71%" className='svg-text'>2y use</text>
						<g id="postman" transform="translate(246.68 683.24) scale(.16313)">
							<path
							id="path1093"
							fill="#ff6c37"
							d="M254.95 144.25c8.96-70.13-40.57-134.24-110.57-143.2-70-8.96-134.37 40.57-143.33 110.57-8.96 70 40.57 134.25 110.57 143.33 70.13 8.96 134.25-40.57 143.33-110.7z"
							></path>
							<g id="g1135" transform="translate(50.18 45.2)">
							<path
								id="path1095"
								fill="#fff"
								d="M124.02 36.99l-54 54-15.24-15.23c53.11-53.1 58.36-48.5 69.24-38.77z"
							></path>
							<path
								id="path1097"
								fill="#ff6c37"
								d="M70.01 92.27c-.38 0-.64-.13-.9-.38L53.77 76.66a1.24 1.24 0 010-1.8c54-54 59.64-48.88 71.03-38.64.25.25.38.5.38.9 0 .38-.13.63-.38.89L70.78 91.89c-.13.25-.51.38-.77.38zm-13.44-16.5L70.01 89.2l52.09-52.09c-9.47-8.44-15.87-11-65.53 38.65z"
							></path>
							<path
								id="path1099"
								fill="#fff"
								d="M85.5 106.48L70.78 91.76l54-54c14.47 14.58-7.16 38.26-39.28 68.72z"
							></path>
							<path
								id="path1101"
								fill="#ff6c37"
								d="M85.5 107.76c-.39 0-.64-.13-.9-.39L69.88 92.66c-.25-.26-.25-.52-.25-.9s.13-.64.38-.9l54-54a1.24 1.24 0 011.8 0 15.58 15.58 0 015 11.9c-.26 14.2-16.39 32.25-44.29 58.61-.38.26-.77.39-1.02.39zm-12.93-16c8.2 8.32 11.65 11.65 12.93 12.93 21.5-20.48 42.36-41.47 42.49-55.93a13.63 13.63 0 00-3.33-9.22z"
							></path>
							<path
								id="path1103"
								fill="#fff"
								d="M55.04 76.15l10.88 10.87c.25.26.25.52 0 .77-.13.13-.13.13-.26.13l-22.52 4.86A2.24 2.24 0 0140.7 91a1.9 1.9 0 01.5-1.66l13.06-13.06c.26-.25.64-.38.77-.12z"
							></path>
							<path
								id="path1105"
								fill="#ff6c37"
								d="M42.75 94.06a3.33 3.33 0 01-3.32-3.45c0-.9.38-1.8 1.02-2.43L53.5 75.12c.77-.64 1.8-.64 2.56 0L66.94 86c.77.64.77 1.8 0 2.56-.26.26-.51.38-.9.51l-22.52 4.87c-.25 0-.51.12-.77.12zm11.9-16.5L42.11 90.1c-.25.25-.38.64-.12 1.02.12.38.5.51.9.38l21.1-4.6z"
							></path>
							<path
								id="path1107"
								fill="#fff"
								d="M152.56 7.04a20.67 20.67 0 00-29.3.64 20.67 20.67 0 00.63 29.3 20.68 20.68 0 0025.08 2.82l-14.59-14.59z"
							></path>
							<path
								id="path1109"
								fill="#ff6c37"
								d="M138.22 44.02a22.01 22.01 0 1115.23-37.88c.26.26.39.51.39.9 0 .38-.13.64-.39.9L136.18 25.2l13.56 13.57c.51.5.51 1.28 0 1.79l-.25.25a21.7 21.7 0 01-11.27 3.2zm0-41.33a19.25 19.25 0 00-19.32 19.45c0 10.75 8.7 19.45 19.45 19.32 2.95 0 5.89-.64 8.58-2.04L133.49 26.1a1.16 1.16 0 01-.39-.9c0-.38.13-.64.39-.9l17.15-17.14a18.97 18.97 0 00-12.42-4.48z"
							></path>
							<path
								id="path1111"
								fill="#fff"
								d="M152.94 7.42l-.25-.25-18.3 18.04 14.46 14.46c1.4-.9 2.81-1.92 3.96-3.07a20.5 20.5 0 00.13-29.18z"
							></path>
							<path
								id="path1113"
								fill="#ff6c37"
								d="M148.97 41.08c-.38 0-.64-.13-.9-.38L133.5 26.1a1.16 1.16 0 01-.39-.89c0-.38.13-.64.39-.9l18.17-18.17a1.24 1.24 0 011.8 0l.38.26a22.13 22.13 0 01.13 31.1 21.03 21.03 0 01-4.23 3.32c-.38.13-.64.26-.77.26zm-12.8-15.87l12.93 12.93a19.49 19.49 0 003.46-29.18z"
							></path>
							<path
								id="path1115"
								fill="#fff"
								d="M126.2 39.29a7.88 7.88 0 00-11.14 0L66.81 87.54l8.07 8.06 51.06-44.8a7.9 7.9 0 00.77-11.13 1.77 1.77 0 01-.52-.38z"
							></path>
							<path
								id="path1117"
								fill="#ff6c37"
								d="M74.75 96.88c-.39 0-.64-.13-.9-.39l-8.06-8.06a1.24 1.24 0 010-1.79l48.25-48.25a9.11 9.11 0 0112.92 0 9.11 9.11 0 01-.38 13.31L75.52 96.5c-.13.25-.39.38-.77.38zm-6.15-9.34l6.28 6.27 50.16-44.03c2.82-2.3 3.07-6.52.77-9.34-2.3-2.81-6.53-3.07-9.34-.77-.13.13-.26.26-.51.39z"
							></path>
							<path
								id="path1119"
								fill="#fff"
								d="M29.83 142.44c-.51.25-.77.77-.64 1.28l2.17 9.21a2.44 2.44 0 01-1.66 3.2c-1.02.39-2.18 0-2.82-.77l-14.07-13.95 45.94-45.94 15.87.26 10.75 10.75c-2.56 2.17-18.05 17.15-55.54 35.96z"
							></path>
							<path
								id="path1121"
								fill="#ff6c37"
								d="M28.8 157.41a3.49 3.49 0 01-2.68-1.15l-13.95-13.95a1.16 1.16 0 01-.39-.9c0-.38.13-.64.39-.9L58.1 94.58c.26-.25.64-.38.9-.38l15.87.26c.38 0 .64.12.9.38l10.74 10.75c.26.26.39.64.39 1.02 0 .39-.13.64-.52.9l-.9.77c-13.56 11.9-31.99 23.8-54.9 35.2l2.18 9.08a4.04 4.04 0 01-1.92 4.35c-.77.38-1.4.51-2.05.51zm-14.07-16l13.18 13.06c.38.64 1.15.9 1.79.51.64-.38.9-1.15.51-1.8l-2.17-9.2a2.33 2.33 0 011.28-2.7c22.65-11.38 40.95-23.16 54.39-34.8L74.24 97l-14.72-.26z"
							></path>
							<path
								id="path1123"
								fill="#fff"
								d="M1.93 152.42l11-11 16.39 16.38L3.2 156a2.04 2.04 0 01-1.8-2.3c0-.51.13-1.02.52-1.28z"
							></path>
							<path
								id="path1125"
								fill="#ff6c37"
								d="M29.32 158.95l-26.24-1.8c-1.92-.12-3.2-1.79-3.07-3.7.13-.77.38-1.54 1.02-2.05l11-11a1.24 1.24 0 011.8 0l16.38 16.37c.39.39.51.9.26 1.4-.26.52-.64.78-1.15.78zM12.93 143.2l-10.1 10.1c-.39.26-.39.9 0 1.16.12.13.25.25.5.25L26 156.26z"
							></path>
							<path
								id="path1127"
								fill="#ff6c37"
								d="M54.27 101.36c-.77 0-1.28-.64-1.28-1.28 0-.39.13-.64.39-.9l12.4-12.41a1.24 1.24 0 011.8 0l8.06 8.06c.39.38.52.77.39 1.28-.13.38-.51.77-1.03.9l-20.47 4.35h-.26zm12.41-11.9l-8.44 8.44 13.82-2.94z"
							></path>
							<path
								id="path1129"
								fill="#fff"
								d="M74.62 95.73L60.54 98.8a1.9 1.9 0 01-1.79-3.2l7.8-7.8z"
							></path>
							<path
								id="path1131"
								fill="#ff6c37"
								d="M60.29 100.08c-1.8 0-3.2-1.41-3.2-3.2 0-.9.38-1.67.9-2.3l7.8-7.81a1.24 1.24 0 011.8 0l8.05 8.06c.39.38.52.77.39 1.28-.13.38-.51.77-1.03.9l-14.07 3.07h-.64zm6.4-10.62l-6.92 6.9c-.25.26-.25.52-.12.77.12.26.38.39.76.39l11.78-2.56z"
							></path>
							<path
								id="path1133"
								fill="#ff6c37"
								d="M153.07 19.7c-.26-.76-1.15-1.14-1.92-.89-.77.26-1.15 1.15-.9 1.92 0 .13.13.26.13.39a4.78 4.78 0 01-.51 4.86c-.51.64-.38 1.54.13 2.05.64.5 1.53.38 2.05-.26a7.5 7.5 0 001.02-8.06z"
							></path>
							</g>
						</g>
						<text x="75%" y="80%" className='svg-text'>85% mast.</text>
						<g id="git" transform="translate(388.84 644.27) scale(.45964)">
							<path
							id="path1006"
							fill="#f05133"
							d="M92.71 44.4L52.59 4.3a5.92 5.92 0 00-8.37 0l-8.33 8.32L46.46 23.2a7.02 7.02 0 018.9 8.96l10.18 10.19a7.03 7.03 0 017.28 11.62 7.04 7.04 0 01-11.5-7.65l-9.5-9.5v25a7.04 7.04 0 11-5.79-.2V36.36a7.04 7.04 0 01-3.82-9.23L31.8 16.71 4.29 44.22a5.92 5.92 0 000 8.37L44.4 92.71a5.92 5.92 0 008.37 0L92.7 52.78a5.92 5.92 0 000-8.37z"
							></path>
						</g>
						<text x="60%" y="60%" className='svg-text'>75% mast. (bash)</text>
						<g id="linux" transform="translate(316.56 493.3) scale(.17231)">
							<path
							id="path2"
							d="M12.64 8.08c-.36.2-.79.42-1.24.42-.45 0-.81-.2-1.07-.4l-.3-.28c-.15-.11-.13-.26-.07-.26.1.01.1.14.16.2l.3.26c.25.2.57.38.98.38.4 0 .88-.24 1.17-.4.16-.1.37-.26.54-.38.13-.1.12-.21.23-.2.1.01.03.13-.12.26a3.4 3.4 0 01-.58.4z"
							></path>
							<rect
							id="rect869"
							width="255.22"
							height="256.02"
							x="0.61"
							y="0.34"
							fill="#fff"
							strokeWidth="3.28"
							ry="40.47"
							></rect>
							<path
							id="path4-4"
							strokeWidth="12.01"
							d="M222.25 200.36c-1.7-1.92-2.51-5.48-3.38-9.26-.86-3.78-1.83-7.85-4.93-10.5h-.02a12.65 12.65 0 00-3.81-2.3c4.31-12.8 2.63-25.53-1.74-37.03-5.33-14.13-14.67-26.44-21.79-34.85-7.97-10.06-15.76-19.6-15.62-33.71.25-21.53 2.37-61.44-35.5-61.5a55.94 55.94 0 00-4.82.21c-42.33 3.4-31.1 48.12-31.73 63.09-.77 10.95-3 19.58-10.53 30.29-8.84 10.51-21.3 27.55-27.2 45.27-2.79 8.37-4.1 16.89-2.9 24.97a22.8 22.8 0 00-1.09 1.07c-2.6 2.77-4.51 6.13-6.66 8.39-2 2-4.84 2.75-7.97 3.88-3.14 1.12-6.57 2.77-8.66 6.78l-.01.02a12 12 0 00-1.3 5.81c0 1.85.28 3.74.56 5.54.57 3.76 1.16 7.3.38 9.72-2.47 6.77-2.79 11.45-1.04 14.85 1.75 3.41 5.33 4.91 9.4 5.75 8.11 1.7 19.1 1.27 27.77 5.87l.75-1.4-.73 1.41c9.28 4.85 18.69 6.57 26.2 4.87 5.44-1.25 9.85-4.5 12.13-9.48 5.87-.02 12.3-2.5 22.63-3.07 7-.56 15.75 2.49 25.8 1.92a13.43 13.43 0 001.18 3.17c3.9 7.8 11.15 11.36 18.86 10.76 7.72-.6 15.96-5.16 22.61-13.08l-1.22-1.02 1.22 1.01c6.33-7.68 16.84-10.86 23.82-15.06 3.48-2.1 6.3-4.75 6.53-8.56.21-3.82-2.03-8.1-7.2-13.83zM128.73 59.8a17.7 17.7 0 011.51-7.67 13.55 13.55 0 014.3-5.64 9.54 9.54 0 015.93-2.11h.1c2.16 0 4 .63 5.88 2 1.9 1.4 3.29 3.14 4.4 5.56a17.92 17.92 0 011.68 7.64c.03 2.82-.45 5.22-1.52 7.67a14.77 14.77 0 01-2.16 3.59l-.89-.4c-1.07-.46-2-.83-2.84-1.15-.85-.33-1.5-.53-2.18-.77.5-.59 1.47-1.3 1.82-2.17a11.32 11.32 0 00.86-4.17l.02-.2a11.44 11.44 0 00-.6-4.04 7.61 7.61 0 00-1.86-3.15 3.76 3.76 0 00-2.67-1.22h-.14a3.89 3.89 0 00-2.6 1.04 7.42 7.42 0 00-2.1 3 11.33 11.33 0 00-.85 4.17l-.02.18a11.9 11.9 0 00.17 2.4 29.57 29.57 0 00-6.09-2.05 20.18 20.18 0 01-.16-2.28v-.23zm-25.74.63c-.14-2.43.1-4.52.77-6.68a11.41 11.41 0 012.86-5.02 6.2 6.2 0 014.19-2.01h.36c1.41 0 2.7.48 4.02 1.52a11.62 11.62 0 013.4 4.67c.92 2.06 1.4 4.12 1.53 6.55v.02a18.13 18.13 0 01-.02 2.92 16.66 16.66 0 00-4.75 2.15 10.14 10.14 0 00.03-2.57v-.15a11.4 11.4 0 00-.82-3.29 6.28 6.28 0 00-1.65-2.43c-.63-.53-1.2-.78-1.84-.77l-.2.01c-.74.06-1.33.4-1.89 1.1a6.43 6.43 0 00-1.21 2.68 10.95 10.95 0 00-.23 3.52l.01.14a11 11 0 00.8 3.3 6.34 6.34 0 002 2.7c-.7.53-1.18.93-1.75 1.35l-1.32.97a11.94 11.94 0 01-2.75-4.1 18.34 18.34 0 01-1.54-6.56zm1.86 14.74l4.83-3.58c1.03-.75 1.45-1.03 1.77-1.34h.02c1.68-1.59 4.34-4.5 8.39-5.88 1.38-.48 2.94-.79 4.68-.8 3.3 0 7.3 1.07 12.12 4.18 2.97 1.92 5.27 2.09 10.6 4.36 2.56 1.04 4.06 2.42 4.8 3.85.73 1.44.75 3 .14 4.65-1.24 3.28-5.15 6.74-10.65 8.46h-.01c-2.7.87-5.02 2.8-7.77 4.37a17.4 17.4 0 01-10.1 2.6 13.27 13.27 0 01-4.5-.99 14.43 14.43 0 01-3.24-2c-1.93-1.58-3.64-3.55-6.12-5h-.03c-4-2.28-6.18-4.9-6.87-7.18-.69-2.27-.04-4.21 1.94-5.7zm1.57 156.28v.01c-.56 7.48-4.77 11.54-11.26 13.03-6.47 1.47-15.24 0-24-4.58-9.7-5.12-21.23-4.62-28.63-6.17-3.7-.77-6.1-1.93-7.22-4.1-1.1-2.15-1.13-5.92 1.22-12.33l.01-.03.01-.02c1.17-3.59.3-7.52-.25-11.21-.56-3.69-.84-7.04.41-9.38l.01-.02c1.62-3.11 3.99-4.23 6.92-5.27 2.94-1.06 6.4-1.89 9.17-4.64h.01l.01-.02c2.55-2.68 4.46-6.04 6.69-8.43 1.89-2 3.77-3.35 6.61-3.36h.11c.5 0 1.02.04 1.59.13 3.77.57 7.06 3.22 10.24 7.5l9.15 16.68c2.43 5.08 7.58 10.68 11.94 16.39 4.35 5.7 7.73 11.43 7.29 15.8zm-.75-12.12a80.69 80.69 0 00-4-5.64 161.67 161.67 0 00-2.75-3.51 11 11 0 004.61-.87 5.83 5.83 0 003.2-3.29c1.07-2.9 0-7-3.46-11.68-3.49-4.68-9.34-9.96-17.94-15.23-6.33-3.94-9.86-8.75-11.51-13.99-1.66-5.23-1.43-10.89-.16-16.48 2.45-10.73 8.75-21.15 12.76-27.7 1.08-.8.39 1.47-4.07 9.73-3.98 7.55-11.44 24.98-1.23 38.58a80.7 80.7 0 016.46-28.79c5.66-12.8 17.47-35.04 18.41-52.76.5.35 2.16 1.48 2.9 1.9 2.18 1.27 3.79 3.14 5.9 4.84a14.56 14.56 0 008.75 3.4l1.12.03c4.12 0 7.32-1.34 10-2.87 2.9-1.65 5.23-3.5 7.42-4.21h.01c4.65-1.47 8.33-4.02 10.43-7.02 3.63 14.23 12.02 34.77 17.41 44.81 2.87 5.32 8.58 16.63 11.04 30.25 1.56-.05 3.28.18 5.13.65 6.45-16.72-5.46-34.72-10.91-39.74-2.21-2.13-2.3-3.1-1.23-3.05 5.91 5.24 13.68 15.74 16.5 27.62a35.6 35.6 0 01.19 16.72c.67.28 1.36.58 2.05.91 10.35 5.04 14.18 9.43 12.33 15.4-.6-.02-1.2 0-1.77 0h-.17c1.5-4.74-1.82-8.24-10.68-12.24-9.17-4.03-16.48-3.64-17.71 4.55a15.63 15.63 0 00-.2 1.3c-.7.25-1.38.55-2.07.92-4.3 2.36-6.67 6.64-7.97 11.88-1.3 5.25-1.69 11.58-2.05 18.7-.22 3.59-1.69 8.44-3.19 13.56-15 10.77-35.85 15.4-53.55 3.32zm115.58.68c-6.29 3.8-17.48 7.12-24.6 15.76-6.22 7.38-13.77 11.43-20.42 11.96-6.66.53-12.4-2.23-15.78-9.03v-.01l-.02-.04c-2.1-4-1.22-10.3.54-16.95 1.77-6.65 4.31-13.48 4.66-19.03.36-7.11.76-13.33 1.96-18.12 1.2-4.8 3.07-8.03 6.4-9.86l.47-.24c.37 6.16 3.42 12.44 8.8 13.8 5.9 1.54 14.4-3.51 17.99-7.64l2.1-.09c3.15-.07 5.78.11 8.49 2.47h.01c2.08 1.76 3.06 5.09 3.91 8.8.86 3.73 1.54 7.77 4.11 10.67h.01c4.92 5.47 6.5 9.17 6.38 11.52-.14 2.38-1.84 4.13-5 6.03z"
							></path>
							<path
							id="path6"
							d="M11.74 6.76c.01.05.1.04.14.06.04.02.07.07.11.07.04 0 .1-.01.11-.06.01-.05-.07-.09-.12-.1-.07-.03-.15-.05-.22-.01-.01 0-.03.03-.02.04zm-.46 0c-.02.05-.1.04-.14.07-.04.01-.07.06-.12.06-.04 0-.1-.01-.11-.06 0-.05.07-.09.13-.1.06-.03.15-.05.21-.01.02 0 .03.03.03.04z"
							></path>
						</g>
						<text x="25%" y="58%" className='svg-text'>30% mastered</text>
						<g id="mongodb">
							<rect
							id="rect878"
							width="43.49"
							height="43.53"
							x="150.44"
							y="479.61"
							fill="#fff"
							strokeWidth="0.01"
							ry="2.35"
							></rect>
							<path
							id="path1164"
							fill="#4e3629"
							fillOpacity="1"
							strokeWidth="0.06"
							d="M190.08 489.3c-.63.01-1.28.2-1.82.5a2.9 2.9 0 00-1.22 1.3 3.54 3.54 0 00-.2 2.04c.13.68.43 1.46.92 1.87.71.61 1.6.76 2.44.69a3.31 3.31 0 002.07-.99c.53-.56.83-1.39.86-2.16.04-.77-.15-1.61-.63-2.2a3.16 3.16 0 00-2.42-1.04zm-15.95.01l-.6.25-1.86.43c-.05.43.78.5 1.1.76v4.07c-.3.2-.52.27-.89.29l-.03.57s1.1-.08 1.64-.09c.53 0 1.54.1 1.54.1l.02-.6c-.36.03-.65-.08-.97-.25l.02-3.93s.8-.64 1.47-.57c1.14.13 1.25 1.07 1.25 1.07l.02 3.46c-.29.12-.6.22-.93.22l-.03.6s1.04-.07 1.56-.07c.5-.01 1.66.09 1.66.09l.02-.59a2.87 2.87 0 01-1-.34v-3.66l-.28-.74s-.42-.78-1.12-1c-.55-.17-.95.06-1.39.21-.44.16-1.22.78-1.22.78zm-19.66.02l-.6.24-1.78.43c-.06.34.83.48 1.15.73l-.06 4.06c-.3.2-.6.31-.96.33l-.02.54s1.1-.08 1.64-.08c.54 0 1.54.06 1.54.06l.01-.53c-.37.02-.65-.09-.97-.26l.02-3.92s.81-.7 1.49-.63c1.13.13 1.3 1.1 1.3 1.1l-.05 3.48c-.29.13-.6.22-.93.23l-.03.55s1.04-.06 1.56-.07c.5-.01 1.57.03 1.57.03l.02-.48c-.33-.07-.62-.11-.95-.31l-.03-3.95s.48-.5 1.36-.54c1.16-.05 1.35 1.03 1.35 1.03v3.36c0 .17-.55.35-.83.36l-.02.54 1.54-.07 1.55.05.03-.49c-.34-.06-.64-.03-1-.37l-.05-3.68s-.13-1-.93-1.46c-.62-.36-1.21-.2-1.79-.06a5.6 5.6 0 00-1.42.85s-.42-.78-1.12-1c-.55-.18-.95.05-1.4.21-.44.16-1.21.77-1.21.77zm13.23.06c-.64 0-1.28.19-1.83.5a2.9 2.9 0 00-1.2 1.28 3.54 3.54 0 00-.2 2.05c.12.68.41 1.46.9 1.87.72.6 1.6.76 2.44.69a3.31 3.31 0 002.08-.99c.53-.57.82-1.39.86-2.16.04-.77-.15-1.61-.64-2.2a3.16 3.16 0 00-2.41-1.04zm14.95 0a3.06 3.06 0 00-2.08.81c-.27.27-.5.62-.58.99-.09.39 0 .8.1 1.2a2 2 0 00.33.8c.25.3.98.68.98.68-.37.43-.83.47-1 .72-.3.7.79 1.03.8 1.22-.26.24-.97.56-1.27 1.01-.15.23-.23.51-.21.79.03.38.19.74.44 1.03.28.32.68.53 1.09.65.52.16 1.08.15 1.62.08.46-.06.9-.2 1.3-.41.45-.23.9-.52 1.22-.91.28-.36.47-.78.56-1.23.06-.34.07-.73-.08-1.04a1.71 1.71 0 00-.77-.75c-.37-.19-.82-.18-1.23-.22-.46-.05-.93.05-1.38-.05-.26-.06-.58-.1-.73-.32-.06-.1-.04-.25.02-.35.1-.15.32-.22.5-.24a4 4 0 001.3-.27 2.34 2.34 0 001.3-1.49c.09-.25.12-.53.11-.8 0-.27-.15-.8-.15-.8s.6.31.98-.03c.4-.35.37-1.16.19-.99-.43.43-1.08.36-1.47.3-.35-.04-.9-.31-1.37-.36a5.08 5.08 0 00-.52-.02zm7 .54c.4 0 .84.18 1.15.45.46.39.75.99.88 1.58.16.7.17 1.5-.14 2.16-.18.4-.54.76-.95.9-.34.1-.74.02-1.06-.14-.43-.21-.77-.6-1-1.02a3.47 3.47 0 01-.42-1.63c-.01-.56.03-1.19.36-1.64.25-.34.67-.6 1.09-.65h.08zm-7.28.06c.2 0 .42.04.6.12.26.13.46.32.61.6.15.29.2.72.2 1.05 0 .34-.04.67-.18.93-.15.25-.34.43-.6.53a1.35 1.35 0 01-1.5-.55 2.1 2.1 0 01-.28-.88c-.04-.32-.02-.65.05-.97.05-.25.12-.32.25-.47.14-.15.26-.28.51-.33.1-.02.22-.03.34-.03zm-15.03.02c.38.02.78.2 1.08.45.46.39.74.99.88 1.57.16.7.17 1.52-.14 2.17-.18.4-.54.76-.95.9-.34.1-.74.02-1.06-.14-.43-.21-.77-.6-1-1.02a3.47 3.47 0 01-.43-1.63c0-.56.04-1.19.37-1.64a1.61 1.61 0 011.25-.66zm15.27 5.91c.31 0 .62.04.93.1.4.07.86.12 1.13.42.2.21.26.54.23.82a1.4 1.4 0 01-.45.85c-.29.26-.69.38-1.06.45-.45.09-.92.1-1.35-.03-.33-.1-.65-.3-.87-.57a1.35 1.35 0 01-.31-.85c0-.26.14-.51.31-.7.2-.2.46-.34.73-.4.23-.06.47-.1.71-.09z"></path>
							<path
							id="path19626"
							fill="#94795d"
							fillOpacity="1"
							strokeWidth="0.06"
							d="M170.54 499.82c-2.08-.02-5.11.1-5.11.1l-2.47-.08-.53.93s1.07.11 1.58.28c.17.06.36.12.5.25.15.14.3.33.32.54.17 3.7.05 7.6-.05 11.38 0 .15-.15.26-.26.35-.16.12-.35.22-.55.27-.26.07-.82.06-.82.06l-.32 1.04s5.13.1 7.1.03c1.05-.04 2.56-.35 3.54-.78a6.94 6.94 0 002.3-1.5 8.01 8.01 0 001.9-3.05 7.98 7.98 0 00-.78-6.64 6.82 6.82 0 00-2.27-2.14 7.82 7.82 0 00-4.08-1.04zm15.16.01c-1.22 0-2.44.1-3.77.09-.6-.01-1.32-.12-2.02-.06-.36.03-.52.98-.52.98s1.25.07 1.68.26c.36.15.5.56.5.8.1 3.5-.03 10.79-.03 10.79s0 .57-.2.79c-.2.22-.53.28-.83.34-.26.05-.8.05-.8.05l-.36 1s3.36.1 5.04.1c.9 0 1.82.06 2.72-.09a7.7 7.7 0 001.95-.57 6.77 6.77 0 001.64-1.02 4.16 4.16 0 001.47-2.76c.02-.52 0-1.05-.18-1.53a3.85 3.85 0 00-.92-1.37c-.36-.36-.81-.6-1.26-.84-.34-.17-1.05-.4-1.05-.4s.55-.22.8-.39c.36-.25.67-.57.92-.94.27-.39.46-.84.52-1.3a3.49 3.49 0 00-.85-2.7 4 4 0 00-1.48-.9c-.55-.2-1.15-.24-1.73-.29-.41-.03-.82-.04-1.24-.04zm-16.92 1.09c.28 0 .5.02.66.03.96.05 1.69.23 2.56.62.82.36 1.6.9 2.15 1.6.59.77.96 1.76 1.15 2.7.23 1.12.15 2.42 0 3.43a5.5 5.5 0 01-1.26 2.77 4.34 4.34 0 01-1.83 1.39 6.5 6.5 0 01-2.48.34c-1.73-.06-2.41-.65-2.45-1.49-.12-2.58-.12-8.89.05-10.9.03-.28.3-.38.42-.4.34-.06.68-.09 1.03-.1zm16.24.06c.26 0 .5 0 .7.02.44.03.66.08 1 .2.33.1.7.27.98.5a2.97 2.97 0 01.94 1.75c.04.35-.03.84-.13 1.2s-.2.69-.43.93c-.21.25-.5.38-.8.5-.3.12-.46.14-1 .19-.54.05-1.96.05-2.24-.04-.3-.1-.13-5.14.11-5.18.33-.04.62-.06.87-.07zm-.36 6.35c.36 0 .8.04 1.11.07.63.07 1.33.12 1.9.38.56.26 1.08.58 1.42 1.05a3 3 0 01.53 1.6c.04.6-.04 1.33-.33 1.9-.2.4-.56.71-.93.97-.3.2-.63.36-.98.41-.88.15-1.87.23-2.66-.18-.33-.16-.69-.48-.7-.84-.1-1.63-.11-4.92-.05-5.19.03-.13.32-.17.69-.17z"
							></path>
							<path
							id="path8611"
							fill="#a6a385"
							strokeWidth="0.07"
							d="M157.66 515.6l-.48-.17s.06-2.48-.84-2.66c-.6-.69.1-29.26 2.24-.1 0 0-.74.37-.87 1-.14.62-.05 1.93-.05 1.93z"
							></path>
							<path
							id="path8605"
							fill="#499d4a"
							strokeWidth="0.07"
							d="M157.92 513.2s4.27-2.8 3.28-8.65c-.97-4.24-3.24-5.64-3.49-6.17a6.05 6.05 0 01-.53-1.05l.17 11.81c0 .01-.36 3.62.57 4.06"
							></path>
							<path
							id="path8599"
							fill="#58aa50"
							strokeWidth="0.07"
							d="M156.93 513.35s-4.01-2.73-3.77-7.55c.22-4.82 3.05-7.18 3.6-7.61.36-.38.37-.52.4-.9.24.53.2 8 .23 8.88.1 3.39-.2 6.54-.46 7.18z"
							></path>
						</g>
						<text x="20%" y="45%" className='svg-text'>90% (client/server side)</text>
						<g id="myjavascript" transform="translate(34.46 391.09) scale(.06407)">
							<path id="rect1027" fill="#f7df1e" d="M0 0h630v630H0z"></path>
							<path
							id="path1029"
							d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.08z"
							></path>
						</g>
						<text x="18%" y="29%" className='svg-text'>70% mast.</text>
						<g id="python"
							fillOpacity="1"
							fillRule="nonzero"
							stroke="none"
							strokeDasharray="none"
							strokeDashoffset="0"
							strokeLinecap="butt"
							strokeLinejoin="miter"
							strokeMiterlimit="4"
							strokeOpacity="1"
							strokeWidth="1"
							markerEnd="none"
							markerMid="none"
							markerStart="none"
							color="#000"
							transform="translate(121.54 267.78) scale(.35197)"
							visibility="visible" >
							<defs>
								<linearGradient id="linearGradient11301">
								<stop offset="0" stopColor="#ffe052" stopOpacity="1"></stop>
								<stop offset="1" stopColor="#ffc331" stopOpacity="1"></stop>
								</linearGradient>
								<linearGradient
								id="linearGradient11307"
								x1="89.14"
								x2="147.78"
								y1="111.92"
								y2="168.1"
								gradientUnits="userSpaceOnUse"
								xlinkHref="#linearGradient11301"
								></linearGradient>
								<linearGradient id="linearGradient9515">
								<stop offset="0" stopColor="#387eb8" stopOpacity="1"></stop>
								<stop offset="1" stopColor="#366994" stopOpacity="1"></stop>
								</linearGradient>
								<linearGradient
								id="linearGradient9521"
								x1="55.55"
								x2="110.15"
								y1="77.07"
								y2="131.85"
								gradientUnits="userSpaceOnUse"
								xlinkHref="#linearGradient9515"
								></linearGradient>
							</defs>
							<path
							id="path8615"
							fill="url(#linearGradient9521)"
							d="M99.75 67.47c-28.03 0-26.28 12.16-26.28 12.16l.03 12.59h26.75V96H62.87s-17.93-2.03-17.93 26.25 15.65 27.28 15.65 27.28h9.35v-13.12s-.5-15.66 15.4-15.66h26.53s14.91.24 14.91-14.4V82.12s2.26-14.66-27.03-14.66zM85 75.94a4.8 4.8 0 110 9.61 4.8 4.8 0 010-9.61z"
							display="inline"
							opacity="1"
							overflow="visible"
							style={{ marker: "none" }}
							></path>
							<path
							id="path8620"
							fill="url(#linearGradient11307)"
							d="M100.55 177.31c28.03 0 26.28-12.15 26.28-12.15l-.03-12.6h-26.75v-3.78h37.37s17.94 2.04 17.94-26.25c0-28.28-15.66-27.28-15.66-27.28h-9.34v13.13s.5 15.65-15.4 15.65H88.41s-14.9-.24-14.9 14.41v24.22s-2.27 14.65 27.03 14.65zm14.75-8.46a4.8 4.8 0 11-.01-9.62 4.8 4.8 0 010 9.62z"
							display="inline"
							opacity="1"
							overflow="visible"
							style={{ marker: "none" }}
							></path>
						</g>
						<text x="60%" y="30%" className='svg-text'>70% mast.</text>
						<g id="myinkscape" transform="translate(312.03 298.08) scale(.41403)">
							<rect
							id="rect867"
							width="97.24"
							height="97.24"
							x="-0.19"
							y="-0.19"
							fill="#fff"
							strokeWidth="3"
							ry="14.92"
							></rect>
							<path
							id="path4"
							strokeWidth="3.48"
							d="M48.37 7.56a9.58 9.58 0 00-6.93 2.8l-30.7 31.5C-.87 53.5 18.28 52.52 25.2 56.93c3.21 2.1-10.27 4.78-7.52 7.54 2.68 2.76 16.17 5.3 18.86 8 2.68 2.75-5.44 5.66-2.76 8.42 2.6 2.76 8.87.15 9.98 6.42.82 4.63 11.48 2.32 16.25-1.64 2.97-2.54-5.14-2.54-2.46-5.3 6.71-6.8 12.67-3.05 15.13-9.33 1.34-3.36-10.13-5.75-7.08-7.92 7.31-5.14 34.13-7.76 21.76-20.15L55.53 10.36a10.43 10.43 0 00-7.16-2.8zm.27 2.99c1.84.01 3.68.7 5.02 2.03l12.14 12.4c1.13 1.12 1.13 3.44.45 4.1l-6.03-4.91-1.2 7.23-4.98-2.69-8.13 5.15-2.68-10.82-4.32 9.4-10.8-.07c-2.1 0-1.8-2.16.36-4.33C32.72 23.34 41 15.36 43.61 12.6a6.88 6.88 0 015.02-2.03zm33.93 56.72c-2.58.09-5.2 1.38-5.88 3.77 0 1.56 12.15 2.46 11.48-.38-.49-2.39-3.02-3.49-5.6-3.4v.01zm-53.38 6.78c-3.5.2-7.27 2.76-4.29 5.27 2.75 2.39 6.93-.52 8.27-3.88-.83-1.1-2.39-1.48-3.98-1.39zm46.01.27c-3.43 3.13.6 6.42 3.95 4.25.9-.6-.08-3.5-3.95-4.25z"
							></path>
						</g>
						<text x="60%" y="15%" className='svg-text'>80% mastered</text>
						<g id="photoshop"
							fillOpacity="1"
							strokeDasharray="none"
							strokeMiterlimit="4"
							strokeOpacity="1"
							display="inline"
							style={{ mixBlendMode: "normal" }}
							transform="translate(296.23 152.25) scale(2.12076)" >
							<path
							id="path1031"
							fill="#001e36"
							stroke="#fff"
							strokeWidth="0.1"
							d="M9.85 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.4 11.65c-.39.56-.95.98-1.6 1.22-.68.25-1.43.34-2.25.34L8 13.5l-.43-.01v3.2a.13.13 0 01-.11.15H5.52c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm7.1 3.89c-.28.4-.67.7-1.12.9a4.6 4.6 0 01-1.81.3c-.46 0-.91-.03-1.36-.12-.35-.06-.7-.17-1.02-.32-.07-.04-.12-.1-.11-.19v-1.74c0-.03.01-.07.04-.09.03-.02.06 0 .09.01a4.64 4.64 0 002.42.64c.38 0 .65-.05.83-.14a.46.46 0 00.27-.42c0-.14-.08-.27-.24-.4a4.35 4.35 0 00-.98-.47 6.17 6.17 0 01-1.42-.72 2.62 2.62 0 01-.76-.85 2.34 2.34 0 011.16-3.15 3.88 3.88 0 011.77-.35c.41 0 .83.03 1.24.09.3.04.59.12.86.23.04.01.08.05.1.09a.5.5 0 01.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0a5.27 5.27 0 00-2.08-.47c-.2-.01-.41.02-.6.07a.52.52 0 00-.31.2.53.53 0 00-.08.27c0 .09.04.18.1.26.09.11.2.2.34.27.23.12.47.23.7.33.55.18 1.07.43 1.55.73.33.2.6.49.79.83.16.32.24.67.23 1.03.01.47-.13.94-.39 1.33z"
							></path>
							<path
							id="path1028"
							fill="#31a8ff"
							stroke="#31a8ff"
							strokeWidth="0.2"
							d="M8.6 6.25l-.91.01c-.31.01-.6 0-.87.02l-.76.02-.56.01c-.07 0-.1.04-.1.11v10.29c0 .09.04.13.12.13h1.94a.12.12 0 00.11-.14v-3.21l.43.01.5.01c.82 0 1.57-.09 2.25-.34a3.42 3.42 0 001.6-1.22c.41-.56.61-1.27.6-2.13 0-.45-.07-.88-.22-1.3A3.18 3.18 0 0012 7.38a3.57 3.57 0 00-1.34-.82 5.88 5.88 0 00-2.06-.31zm.07 1.97c.41 0 .81.05 1.18.2.29.11.53.31.7.57.16.27.24.58.23.9 0 .43-.1.77-.3 1.02-.23.25-.51.44-.83.53-.37.12-.76.18-1.15.18h-.53l-.39-.02V8.24c.07-.01.21-.02.41-.01h.68zm8.54.51c-.7 0-1.3.1-1.77.35a2.35 2.35 0 00-1.16 3.15c.2.34.45.63.76.85.44.3.91.54 1.42.72.5.2.82.34.98.47.16.13.24.26.24.4 0 .18-.11.35-.27.42a1.9 1.9 0 01-.83.14c-.4 0-.8-.05-1.18-.15-.44-.1-.85-.26-1.24-.49-.03-.02-.06-.03-.09-.01-.03.02-.04.06-.04.1v1.73c-.01.08.04.15.11.19.32.15.67.26 1.02.32.45.09.9.13 1.36.13.72 0 1.32-.11 1.81-.32a2.32 2.32 0 001.51-2.22c.01-.36-.07-.71-.23-1.03a2.3 2.3 0 00-.79-.83c-.48-.3-1-.55-1.54-.73-.24-.1-.48-.21-.71-.33a1.11 1.11 0 01-.34-.27.44.44 0 01-.1-.26c0-.09.03-.2.08-.27.07-.1.18-.17.31-.2.2-.05.4-.08.6-.07a5.28 5.28 0 012.08.47c.04.02.1.02.18 0a.12.12 0 00.05-.1V9.26a.5.5 0 00-.02-.12c-.02-.04-.06-.08-.1-.09a3.53 3.53 0 00-.86-.23 8.6 8.6 0 00-1.24-.09z"
							display="inline"
							style={{ mixBlendMode: "normal" }}
							></path>
						</g>
						<text x="8%" y="22%" className='svg-text'>English C1 level</text>
						<g id="myenglish" transform="matrix(.42527 0 0 .33797 115.14 136.46)">
							<path id="rect1269" fill="#dc4437" d="M0 0h130v13.3H0z"></path>
							<path id="rect1271" fill="#dc4437" d="M0 26.7h130V40H0z"></path>
							<path id="rect1273" fill="#dc4437" d="M0 80h130v13.3H0z"></path>
							<path id="rect1275" fill="#dc4437" d="M0 106.7h130V120H0z"></path>
							<path id="rect1277" fill="#dc4437" d="M0 53.3h130v13.3H0z"></path>
							<path id="rect1279" fill="#fff" d="M0 13.3h130v13.3H0z"></path>
							<path id="rect1281" fill="#fff" d="M0 40h130v13.3H0z"></path>
							<path id="rect1283" fill="#fff" d="M0 93.3h130v13.3H0z"></path>
							<path id="rect1285" fill="#fff" d="M0 66.7h130V80H0z"></path>
							<path id="rect1287" fill="#2a66b7" d="M0 0h70v66.7H0z"></path>
							<path
							id="polygon1289"
							fill="#fff"
							d="M11.2 8.9L13.5 4l2.3 4.9 5.2.8-3.8 3.9.9 5.4-4.6-2.6L8.9 19l.9-5.4L6 9.7z"
							></path>
							<path
							id="polygon1291"
							fill="#fff"
							d="M31.7 8.9L34 4l2.3 4.9 5.2.8-3.7 3.9.8 5.4-4.6-2.6-4.6 2.6.8-5.4-3.7-3.9z"
							></path>
							<path
							id="polygon1293"
							fill="#fff"
							d="M52.2 8.9L54.5 4l2.3 4.9 5.2.8-3.8 3.9.9 5.4-4.6-2.6-4.6 2.6.9-5.4L47 9.7z"
							></path>
							<path
							id="polygon1295"
							fill="#fff"
							d="M21.7 28.9L24 24l2.3 4.9 5.2.8-3.7 3.9.8 5.4-4.6-2.6-4.6 2.6.8-5.4-3.7-3.9z"
							></path>
							<path
							id="polygon1297"
							fill="#fff"
							d="M42.2 28.9l2.3-4.9 2.3 4.9 5.2.8-3.8 3.9.9 5.4-4.6-2.6-4.6 2.6.9-5.4-3.8-3.9z"
							></path>
							<path
							id="polygon1299"
							fill="#fff"
							d="M11.2 50.1l2.3-4.9 2.3 4.9 5.2.8-3.8 3.8.9 5.5-4.6-2.6-4.6 2.6.9-5.5L6 50.9z"
							></path>
							<path
							id="polygon1301"
							fill="#fff"
							d="M31.7 50.1l2.3-4.9 2.3 4.9 5.2.8-3.7 3.8.8 5.5-4.6-2.6-4.6 2.6.8-5.5-3.7-3.8z"
							></path>
							<path
							id="polygon1303"
							fill="#fff"
							d="M52.2 50.1l2.3-4.9 2.3 4.9 5.2.8-3.8 3.8.9 5.5-4.6-2.6-4.6 2.6.9-5.5-3.8-3.8z"
							></path>
						</g>
					</svg>
				</Box>
			</Flex>

			<Flex w="100vw" className='section6' flexDirection="column" alignItems="center">
				<Text fontWeight="extrabold" textAlign="center" w={{base: "70%", md: "100%"}} fontSize={{base:"30px", lg:"46px"}} mt={{base:"50px", lg:"60px"}} mb="3vh" >What makes my brain 🤮?</Text>

				<List w="90%" m="15% 0 100px" color="#ffd76e" fontSize="22px" borderRadius="15px" borderLeft="2px solid rgba(88,88,88,.9)" borderTop="2px solid rgba(88,88,88,.9)" padding="3%" borderColor="hsla(0,0%,100%,.2) rgba(88,88,88,.9) rgba(88,88,88,.9) hsla(0,0%,100%,.2)" borderStyle="solid" borderWidth="1px 2px 2px 1px" boxShadow="5px 5px 30px rgba(0,0,0,.2)" backdropFilter="blur(20px)" background="linear-gradient(329deg,hsla(0,0%,46%,.22),hsla(0,0%,74%,.13))">
					<ListItem mb="20px"> 😷 PHP or anything made with it <Text textStyle="notes">Laravel, Wordpress, etc. I prefer async Python or Nodejs for backend</Text></ListItem>
					<ListItem mb="20px"> 🥱 Angular, Vue <Text textStyle="notes">I favor React.js for web projects</Text></ListItem>
					<ListItem mb="20px"> 🤕 Java, Kotlin, Swift, React Native, Ionic <Text textStyle="notes">Mobile development is not my thing</Text></ListItem>
					<ListItem mb="20px"> 💀 jQuery <Text textStyle="notes">Too old and is not security-wise to use anymore</Text></ListItem>
					<ListItem mb="20px"> 🤧 C/C++, C# <Text textStyle="notes">Soon I will include Rust on my Loved List, which is the new best for low-level development. Also, C# is tight close to Microsoft burdensome tooling</Text></ListItem>
				</List>

				<Text fontWeight="regular" w="90%" mb="100px" fontSize="18px" textAlign="justify" border="2px solid white" p="2%"><b>Why?</b> I prefer not to work with some tools, so that I can focus on getting better with the ones that I think have more potential, and achieve more expertise with them.</Text>

				<Text textAlign="center" mb="8px">If you feel interested, we can have a chat. Go up to get my contact info</Text>
				<Button onClick={scroll2top} mb="30px" bg='#d8c892' size="lg" variant='solid' aria-label='Scroll page to the top' alt="Scroll to Beginning" >
					<GoUpIcon />
				</Button>
			</Flex>
		</Flex>
	);
}
