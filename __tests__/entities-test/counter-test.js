import Counter from '../../src/entities/Counter'

describe('entities Test Counter',()=>{
    it('should can get increament or decreament number',async ()=>{
        let counter = new Counter ()
       expect( counter.decrement()).toBe(-1)
       expect( counter.increment()).toBe(0)
    })
})