import React from 'react';
import CounterComponent from './Counter';
import { useEffect, useState } from 'react';
import { useCounter } from '../../../global-state/Counter';
import { Text } from 'react-native';

const CounterContainer = () => {
	const { loading, increment, decrement, number } = useCounter();
	if (loading) {
		return <Text>Loading..</Text>;
	}
	return <CounterComponent increment={increment} decrement={decrement} number={number} />;
};
export default CounterContainer;
