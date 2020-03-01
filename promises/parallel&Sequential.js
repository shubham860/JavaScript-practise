async function GreetToRelatives(greetWhom,greetMessgae,delay){
    return new Promise((resolve, reject) => {
            setTimeout(function(){
                console.log(`${greetMessgae} ${greetWhom}`);
                resolve('hjgjghjgjhgj');
                return 1;
            },delay)
    })
}

// async function newFunction() {
//     const v1 = await GreetToRelatives('chacha', 'ram ram', 1000);
//     const v2 = await GreetToRelatives('mama', 'ram ram', 1000);
//      const v3 = await GreetToRelatives('uncle', 'ram ram', 1000);
//      console.log(v1);
//      console.log(v2);
//      console.log(v3);
// }

// async function newFunction() {
//     const v1 = await GreetToRelatives('chacha', 'ram ram', 1000);
//     const v2 = await GreetToRelatives('mama', 'ram ram', 1000);
//     const v3 = await GreetToRelatives('uncle', 'ram ram', 1000)
//     const results =  await Promise.all([v1,v2,v3]);
//     console.log(results)
// }

// async function newFunction() {
//     const v1 =  GreetToRelatives('chacha', 'ram ram', 1000);
//     const v2 =  GreetToRelatives('mama', 'ram ram', 1000);
//     const v3 =  GreetToRelatives('uncle', 'ram ram', 1000);
//     const z1 = await v1;
//     const z2  = await v2;
//     const z3 = await v3;
//
//     console.log(z1);
//     console.log(z2);
//     console.log(z3);
// }

async function newFunction() {
    const v1 =  GreetToRelatives('chacha', 'ram ram', 1000);
    const v2 =  GreetToRelatives('mama', 'ram ram', 1000);
    const v3 =  GreetToRelatives('uncle', 'ram ram', 1000);
    const result = await Promise.all([v1,v2,v3]);
    console.log(result);

}



newFunction();
