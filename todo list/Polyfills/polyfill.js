// polyfill of bind

const Obj = {
    name: "shubahm",
    caste: "chauhan"
}

function into(gotr) {
    console.log(`My self ${this.name} ${this.caste} , ${gotr}`);
}


Function.prototype.myBind = function(...args){
        let func = this;
        params = args.slice(1);

        return function(){
            func.apply(args[0], params)
        }

}


const myBindFunction  = into.myBind(Obj,'Naglakshya');


// polyfill of map


const arr = ['shubham','vardaan','twinkle','sameekha','bhalu'];

Array.prototype.myMap = function(callback){
    const arr = []
        for(let i=0 ; i< this.length; i++){
            arr.push(callback(this[i],i,this))
        }
        return arr;
}
       


const myMapFunction = arr.myMap(function(item,index,arr){
    console.log(item,index,arr);
    return item
})


console.log('myMapFunction',myMapFunction);


// polyFill of forEach


Array.prototype.myForEach = function(callback){
    const arr = [];
    for(let i=0; i<this.length; i++){
        arr.push(callback(this[i],i,this))
    }
    return arr;
}

const myForEachFunction = arr.myForEach(function(item){
    return `${item} smart`
})

console.log('myForEachFunction',myForEachFunction);


// polyFill of filter

let fruits = [
    { name: 'Mango', price: 200},
    { name: 'Apple', price: 300},
    { name: 'Banana', price: 100},
    { name: 'Grapes', price: 150}
  ]



Array.prototype.customFilter = function(callback,context){
    var arr = [];
    for(i=0; i< this.length; i++){
        // for array there is no context only arguments will pass
        if(callback.call(context, this[i], i, this)){
            arr.push(this[i])
        }
    }
    return arr
}


Array.prototype.customFilters = function(callback,context){
    var arr = [];
    for(i=0; i< this.length; i++){
       const result = callback(this[i])
       if(result){
           arr.push(this[i])
       }
    }
    return arr
}

const myFilterFunction = fruits.customFilters(function(element){
    if(element.price > 100){
        console.log(element)
        return element
    }
})



const myFilterFunction2 = arr.customFilter(function(element){
    if(element === "shubham"){
        console.log(element)
        return element
    }
})



console.log('myFilterFunction',myFilterFunction, myFilterFunction2);

