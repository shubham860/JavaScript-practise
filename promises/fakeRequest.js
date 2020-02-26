function fakeRequest(url){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const pages = {
                '/about' : [{a:1,b:2},{a:678,b:765}],
                '/contact' : 8791555171,
                '/partner' : 'shubhamChauhan'
            };

            const data = pages[url];
            console.log(data);
            if(data === 'shubhamChauhan'){
                resolve({status: 'success'});
            }else{
                reject({status : 'fail'})
            }
        },2000)
    } )
}


const arr = ['/about','djhgsa','dcbhed','/contact','/partner'];
const url = Math.floor(Math.random() * arr.length);
console.log(url,arr[url]);
fakeRequest(arr[url])
    .then(res => console.log(res))
    .catch(res => console.log(res));


