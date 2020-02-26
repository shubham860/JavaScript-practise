function Greet(){
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            const value = Math.random();
            value > 0.5 ? resolve() : reject();
        },3000);
        reject();
    })
};

Greet()
.then(()=> {
    console.log("fuck me");
})
.catch(()=>{
    console.log("fuck you");
});
