import Counter from '../entities/Counter';

export function getCounter(): Promise<Counter> {
	return new Promise((resolve, reject) => {
		resolve(new Counter());
	});
}
