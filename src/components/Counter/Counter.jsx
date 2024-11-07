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
<<<<<<< HEAD
			<div><p className={styles.count_info}>Aktualny count: {countState}</p></div>
			<div className={styles.btn_box}>
				<button className={`${styles.btn_style} ${styles.increment_btn}`} onClick={increment}>
					Zwieksz:{' '}
				</button>
				<button className={`${styles.btn_style} ${styles.decrement_btn}`} onClick={decrement}>
					Zmniejsz:{' '}
=======
			<div className={styles.counter_title}>Aktualny count: {countState}</div>
			<div>
				<button className={styles.btn_style} onClick={increment}>
					+{' '}
				</button>
				<button className={styles.btn_style} onClick={decrement}>
					-{' '}
>>>>>>> 6c89489585e5d6fd79788272bb703a5aa3c49c88
				</button>
			</div>
		</div>
	);
};

export default Counter;
