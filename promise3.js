
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

async function getRecipesAW(){
    const IDs = await getIDs;
    //await : promise가 resolve되어야만 실행된다.
    console.log(IDs);

    const recipe  = await getRecipe(IDs[2]);
    console.log(recipe);

    const related = await getRelated('joohee');
    console.log(related);

    return recipe;
}

//const rec= getRecipesAW();
//console.log(rec); 는 동기적으로 작동하는데 getRecipesAW()는 비동기적으로 작동하기 때문에 아직 event가 시작되지 않았음
// Promise{<pending>} 가 출력된다.

getRecipesAW().then(result => console.log(`${result} is the best ever`));
//따라서 then()을 사용해서 getRecipesAW()가 동작하고 난 다음에 콘솔을 찍도록 한다


