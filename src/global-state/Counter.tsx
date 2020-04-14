import { useEffect, useState } from 'react';
import { getCounter } from '../api/counter';
import Counter from '../entities/Counter';

export const useCounter = () => {
	const [ loading, setLoading ] = useState(true);
	const [ counter, setCounter ] = useState<Counter>();
	const [ number, setNumber ] = useState(0);

	useEffect(() => {
		console.log('loading', loading);
		setupCounter();
	}, []);

	const setupCounter = async () => {
		let counter = await getCounter();
		setLoading(false);
		setCounter(counter);
	};

	function increment() {
		setNumber(counter!.increment());
	}
	function decrement() {
		setNumber(counter!.decrement());
	}

	return {
		counter,
		loading,
		increment,
		decrement,
		number
	};
};
