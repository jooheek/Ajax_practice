const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
        reject('reject');
    }, 3000);
});

promise1
    .then((value) => {
    console.log(value);
    console.log(promise1);
    // expected output: "foo"
    //fulfiled :"foo"
})
    .catch((value)=>{
        console.log(value);
    })

console.log(promise1);
// expected output: [object Promise]<pending>

const promise2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('test')
    },4000);
});

promise2
.then(value => {
    console.log(value);
    console.log(promise1);
    console.log(promise2);
})

