const willGetYou = new Promise((resolve,reject) => {
   const value  = Math.random();
   value > 0.5 ? resolve() : reject();
});

willGetYou.then(() => {
    console.log("done");
});

willGetYou.catch(() => {
    console.log("reject")
});
