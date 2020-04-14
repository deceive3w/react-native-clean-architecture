/**
 * @jest-environment jsdom
 */
import React from 'react'
import CounterContainer from '../../src/screens/home/components/counter.container'
import CounterComponent from '../../src/screens/home/components/counter'

import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TestRenderer from 'react-test-renderer';
import Counter from '../../src/entities/counter'

Enzyme.configure({ adapter: new Adapter() });


describe('renders corretly',()=>{
    beforeEach(()=>{
        console.error = ()=>{

        }
    })
    it ('should render correctly 0', (done)=>{
        // let counter = new Counter()

        const render = mount(<CounterContainer/>)
        // console.log(render.props());
        setTimeout(() => {
            render.update()
            expect(render.find("CounterComponent").props().number).toBe(0)
            render.find("CounterComponent").find("Button").first().props().onPress()
            render.update()
            expect(render.find("CounterComponent").props().number).toBe(1)
            done()
        }, 200);
        // render.find("Button").first().props().onPress()
        // console.log(render.props().number);
        // expect(render.find("CounterComponent").props().number).toBe(0)
        // setTimeout(() => {
        //     render.find("CounterComponent").props().increment()
        //     console.log(render.find("CounterComponent").props().number)
        //     expect(render.find("CounterComponent").props().number).toBe(1)
        //     done()
        // }, 1000);
    })

})
