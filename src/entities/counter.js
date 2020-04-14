export default class Counter {
    number = 0

    constructor(initialNumber = 0){
        this.number = initialNumber
    }

    increment(){
    
        this.number = this.number+1
        return this.number
    }
    
    decrement(){
        this.number = this.number-1
        return this.number
    }

}