import {getCounter} from '../../src/api/counter'

describe('API Test Counter',()=>{
    it('should can get counter',async ()=>{
        let counter = await getCounter()
        expect(counter).not.toBe(null)
        expect(counter.number).toBe(0)
    })
})