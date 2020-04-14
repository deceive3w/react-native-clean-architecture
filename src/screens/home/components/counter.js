import React from 'react';
import { View, Button, Text } from "react-native"

const CounterComponent = ({ number, increment, decrement }) =>{
    return (
        <View>
            <Text>{number}</Text>
            <Button title={'Increment'} onPress={increment}></Button>
            <Button title={'Decrement'} onPress={decrement}></Button>
        </View>
    )
}
export default CounterComponent
