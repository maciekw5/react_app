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
			<div><p className={styles.count_info}>Aktualny count: {countState}</p></div>
			<div className={styles.btn_box}>
				<button className={`${styles.btn_style} ${styles.increment_btn}`} onClick={increment}>
					Zwieksz:{' '}
				</button>
				<button className={`${styles.btn_style} ${styles.decrement_btn}`} onClick={decrement}>
					Zmniejsz:{' '}
				</button>
			</div>
		</div>
	);
};

export default Counter;
