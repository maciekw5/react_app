import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
	const [countState, setCountState] = useState(0);

	const increment = () => {
		setCountState(countState + 1);
	};

	const decrement = () => {
		setCountState(countState - 1);
	};

	console.log('Kompiluje się😊');

	return (
		<div className={styles.counter}>
			<div>Aktualny count: {countState}</div>
			<div>
				<button className={styles['btn-style']} onClick={increment}>
					Zwieksz:{' '}
				</button>
				<button className={styles['btn-style']} onClick={decrement}>
					Zmniejsz:{' '}
				</button>
			</div>
		</div>
	);
};

export default Counter;
