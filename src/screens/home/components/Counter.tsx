import React from 'react';
import { View, Button, Text, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import Counter from '../../../entities/Counter';

export interface Props {
	number: number;
	increment: () => void;
	decrement: () => void;
}

const CounterComponent: React.FC<Props> = ({ number, decrement, increment }) => {
	return (
		<View>
			<Text>{number}</Text>
			<Button title={'Increment'} onPress={increment} />
			<Button title={'Decrement'} onPress={decrement} />
		</View>
	);
};
export default CounterComponent;
