import Counter from "../entities/counter"

export const getCounter = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(new Counter())
    })
}

