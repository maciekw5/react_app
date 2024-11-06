import reactIcon from '../assets/react.svg';

function Header() {
	return (
		<>
			<header className='header'>
				<div className='header-text'>
					<img className='header-text__icon' src={reactIcon} alt='react logo' />
					<h1 className='header-text__title'>React App</h1>
					<p className='header-text__info'>This is my first react app.</p>
				</div>
				<div className='header-btns'>
					<button className='btn header-btn primary-btn'>React.js</button>
					<button className='btn header-btn secondary-btn'>Next.js</button>
				</div>
			</header>
		</>
	);
}

export default Header;
