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

	return (
		<div className={styles.counter}>
			<div className={styles.counter_title}>Aktualny count: {countState}</div>
			<div>
				<button className={styles.btn_style} onClick={increment}>
					+{' '}
				</button>
				<button className={styles.btn_style} onClick={decrement}>
					-{' '}
				</button>
			</div>
		</div>
	);
};

export default Counter;
