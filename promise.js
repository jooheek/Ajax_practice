
const getIDs = new Promise((resolve, reject) => {
    //함수가 성공적으로 불러와지면 resolve function을 불러오고
    //함수를 불러오는 데 실패하면 reject function을 불러온다
    setTimeout(() =>{
        resolve([123,34,345,212]);
    },1500);
});

const getRecipe = recID =>{
  return new Promise(((resolve, reject) => {
      setTimeout(id =>{
          const recipe ={
              title:'basil pesto pasta',publisher:'joohee'
          };
          resolve(`${id} : ${recipe.title}`);
      },1500,recID);

  }))
};

const getRelated = publisher =>{
    return new Promise((resolve, reject) => {
        setTimeout(pub =>{
            const recipe ={
                title:'pasta de pechos',publisher:'joohee'
            };
            resolve(`${pub}:${recipe.title}`);
        },1500,publisher);
    })
};

getIDs
    .then(IDs => {
        console.log(IDs);
        //getRecipe(IDs[2]).then();
        //이 방법은 추천하지 않는다.callbackhell을 벗어나려고 promise를 쓰는건데 then 안에 then을 넣으면 의미가 없어지기 때문
        return  getRecipe(IDs[2]);
    })
    .then(recipe =>{
        console.log(recipe);
        return getRelated('joohee');
    })
    .then(recipe =>{
        console.log(recipe);
    })
    .catch(error =>{
        console.log('error!!');
    })
//promise안에 실행 함수를 넣는다
// 이 실행 함수 내부에는 주로 비동기 함수를 넣고 이 경우에는 setTimeout 임
//setTimeout이 성공적으로 작동하면 resolve가 뜬다.
//setTimeout은 대체로 fullfill -> resolve는 .then()에서 관리한다.

//resolve를 reject로 바꾸면 .catch문을 타고 error!!가 나온다.

//한번 settle되면 다시 settle되지 않는다. (immutability of a settle promise)
//javascript는 promise 상태를 노출하지 않는다 promise는 블랙박스와 같다.
//promise를 만든 함수만이 promise의 상태를 알수 있고 resolve,reject에  접근할 수 있다.