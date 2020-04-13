import React from 'react';
import CounterComponent from './counter'
import { useEffect, useState } from 'react'
import { useCounter } from '../../../global-state/counter';

export default CounterContainer = () =>{
    const {loading, counter, increment, decrement, number} = useCounter()

    return (
        <CounterComponent increment={increment} decrement={decrement} number={number}></CounterComponent>
    )
}