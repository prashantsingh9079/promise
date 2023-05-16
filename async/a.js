console.log('Person1 shows ticket');
console.log('Person2 shows ticket');

const preMovie = async ()=>{
    const promiseByWife = new Promise((resolve,reject) =>{
        setTimeout(()=>{resolve('ticket')},2000)
    })

    const getPopcorn = new Promise((resolve,reject)=>{resolve('popcorn')})
    const addButter = new Promise((resolve,reject)=>{resolve('butter')})
    const getColdDrink = new Promise((resolve,reject)=>{resolve('coldrink ')})

    let ticket = await promiseByWife;
    

    let popcorn = await getPopcorn;
    console.log(`${popcorn}`)

    let butter = await addButter
    console.log(`${butter}`)
    let coldrink = await getColdDrink
    //console.log(`${coldrink}`)
    // const getPopcorn = promiseByWife.then(()=>{
    //     new Promise((resolve,reject)=>{
    //         resolve('popcorn')
    //     })
    // })

    // const butterPpopcorn = getPopcorn.then((t)=>{
    //     return new Promise((resolve,reject)=>{
    //         resolve('butter')
    //     })
    // })

return coldrink;
}

// const butter = async ()=>{
//     const butPopcorn = new Promise((resolve,reject) =>{
//         setTimeout(()=>{resolve('Butter Ppopcorn'),2000})
//     })
//     let x = await butPopcorn;
// }

preMovie().then((m)=>{console.log(m)})


console.log('Person4 shows ticket');
console.log('Person5 shows ticket');