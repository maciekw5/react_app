'use server';

import viteImage from '../../../assets/vite.jpg';

export const ViteSection = () => {
	return (
		<section id='vite' className='section section-padding section-vite'>
			<div className='wrapper'>
				<h2 className='section-title'>What is Vite?</h2>
				<div className='section-box'>
					<img src={viteImage} alt='Vite image' className='section-img' />
					<p className='section-box__text'>
						Vite is a modern development tool designed to streamline the
						front-end build process, making it especially useful for working
						with frameworks like Vue, React, and Svelte. Here&apos;s how it
						works and why it&apos;s valuable for front-end projects:
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
							modules as they&apos;re imported.
						</li>
						<li className='section-box__list-item'>
							This speeds up development by loading only what&apos;s necessary
							when it&apos;s needed, avoiding heavy initial loads.
						</li>
						<h3 className='section-box__list-title'>
							3. Super-Fast Hot Module Replacement HMR
						</h3>
						<li className='section-box__list-item'>
							Vite&apos;s HMR is optimized, reloading only the parts of the code
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
	);
};
