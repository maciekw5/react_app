import reactImage from '../assets/react.jpg';
import nextImage from '../assets/next.jpg';
import viteImage from '../assets/vite.jpg'

function Main() {
	return (
		<>
			<section id='react' className='section section-padding section-react'>
				<div className='wrapper'>
					<h2 className='section-title'>Why you should use React?</h2>
					<div className='section-box'>
						<img className='section-img' src={reactImage} alt='React image' />
						<p className='section-box__text'>
							React is a popular JavaScript library for building user
							interfaces, especially single-page applications SPAs where a lot
							of dynamic content needs to be updated without reloading the page.
							Here are some reasons why{' '}
							<span className='span-color'>React</span> is widely used and what
							makes it a powerful choice for front-end development:
						</p>

						<ul className='section-box__list'>
							<h3 className='section-box__list-title'>
								1. Component-Based Architecture
							</h3>
							<li className='section-box__list-item'>
								React uses components, which are reusable pieces of code that
								manage their own structure, state, and behavior. This modular
								approach helps keep your code organized and easier to manage.
							</li>
							<li className='section-box__list-item'>
								Each component can be <span className='span-color'>reused</span>{' '}
								in multiple places across the application, making development
								faster and reducing redundancy.
							</li>

							<h3 className='section-box__list-title'>2. Declarative Syntax</h3>
							<li className='section-box__list-item'>
								React allows you to describe what the UI should look like rather
								than how to achieve it. By writing components declaratively,
								React takes care of efficiently updating the DOM based on state
								changes.
							</li>
							<li className='section-box__list-item'>
								This makes code easier to read and maintain since you're
								describing what you want to display without manually handling
								DOM manipulations.
							</li>
							<h3 className='section-box__list-title'>
								3. Virtual DOM for High Performance
							</h3>
							<li className='section-box__list-item'>
								React uses a virtual DOM an in-memory representation of the real
								DOM to make updates efficient. Instead of manipulating the
								actual DOM directly, React first updates the virtual DOM,
								calculates the changes, and then applies the minimum number of
								updates to the real DOM.
							</li>
							<li className='section-box__list-item'>
								This leads to fast rendering and improved performance,
								especially in applications with complex user interactions and
								large datasets.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section id='next' className='section section-padding section-next'>
				<div className='wrapper'>
					<h2 className='section-title'>Next - framework</h2>
					<div className='section-box'>
						<img src={nextImage} alt='Next image' className='section-img' />
						<p className='section-box__text'>
							Next.js is a React framework that enables you to build fast and
							efficient web applications with powerful features out of the box.
							It's designed to make development easier and improve performance
							by handling many complex tasks for you. Here's a closer look at
							what Next.js is, how it works, and what makes it valuable for
							front-end development:
						</p>

						<ul className='section-box__list'>
							<h3 className='section-box__list-title'>
								1. Server-Side Rendering SSR
							</h3>
							<li className='section-box__list-item'>
								Unlike client-side rendering, where all rendering is done in the
								user’s browser, SSR renders parts of the webpage on the server
								before delivering it to the client.
							</li>
							<li className='section-box__list-item'>
								This leads to faster load times and better{' '}
								<span className='span-color'>SEO</span>, as the content is
								already available when the page loads, making it easier for
								search engines to index.
							</li>

							<h3 className='section-box__list-title'>
								2. Static Site Generation SSG
							</h3>
							<li className='section-box__list-item'>
								Next.js supports static site generation, which allows you to
								pre-render pages at build time. This approach is particularly
								effective for content that doesn't change frequently, like blogs
								or marketing pages.
							</li>
							<li className='section-box__list-item'>
								Pages generated statically are super fast because they are
								pre-built and served directly from a content delivery network{' '}
								<span className='span-color'>CDN</span>.
							</li>
							<h3 className='section-box__list-title'>3. API Routes</h3>
							<li className='section-box__list-item'>
								Next.js allows you to create API routes as part of your
								application, enabling you to define serverless functions within
								the project itself. This can be helpful for handling form
								submissions, database interactions, and more.
							</li>
							<li className='section-box__list-item'>
								You don't need a separate backend server; everything is handled
								within the Next.js project.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section id='vite' className='section section-padding section-vite'>
				<div className='wrapper'>
					<h2 className='section-title'>What is Vite?</h2>
					<div className='section-box'>
						<img src={viteImage} alt='Vite image' className='section-img' />
						<p className='section-box__text'>
							Vite is a modern development tool designed to streamline the
							front-end build process, making it especially useful for working
							with frameworks like Vue, React, and Svelte. Here's how it works
							and why it's valuable for front-end projects:
						</p>

						<ul className='section-box__list'>
							<h3 className='section-box__list-title'>1. Instant Start-Up</h3>
							<li className='section-box__list-item'>
								Vite leverages native ES modules in the browser, so it serves
								files on demand instead of bundling everything upfront.
							</li>
							<li className='section-box__list-item'>
								This approach enables extremely fast start-up times, even for
								large projects.
							</li>

							<h3 className='section-box__list-title'>
								2. On-Demand Module Bundling
							</h3>
							<li className='section-box__list-item'>
								Instead of processing the entire codebase, Vite only bundles
								modules as they're imported.
							</li>
							<li className='section-box__list-item'>
								This speeds up development by loading only what's necessary when
								it's needed, avoiding heavy initial loads.
							</li>
							<h3 className='section-box__list-title'>
								3. Super-Fast Hot Module Replacement HMR
							</h3>
							<li className='section-box__list-item'>
								Vite's HMR is optimized, reloading only the parts of the code
								that have changed.
							</li>
							<li className='section-box__list-item'>
								This instant feedback loop increases productivity by reflecting
								code changes immediately in the browser.
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Main;
