// Deboucing
let counter = 0;
function calledFunction(){
   console.log("I'm running....", counter++);
}

const debounce = function(fn,d){
    let timer;
   
    return function(){
        let context = this;
        args = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        },d);  
    }
}

const debounceRunner = debounce(calledFunction, 300);


// Throttling

const throttle = function(fn, d){
    let flag = true;
t
    return function(){
        let context = this;
        args = arguments;
        console.log('before',arguments)
        if(flag){
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true
            },d)
        }
    }
}

const throttleRunner = throttle(calledFunction, 300);