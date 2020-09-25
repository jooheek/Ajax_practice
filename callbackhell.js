    const second  = () =>{
        setTimeout(() =>{
            console.log('ASYNC Hey there');
        },2000)
    }

    const first = () => {
        console.log('start');
        second();
        console.log('the end');
    }

first();
function getRecipe(){
    setTimeout(() => {
        const recipeID = [123,34,345,212];
        console.log(recipeID);

        setTimeout((id)=>{
            const recipe ={
                title:'basil pesto',publisher:'joohee'
            };
            console.log(`${id} : ${recipe.title}`)
            setTimeout(publisher =>{
                const recipe2 ={
                    title:'pechos pasta',publisher:'joohee'
                };
                console.log(recipe);
            },1500,recipe.publisher)

        },1000,recipeID[2]);
    },1500)
}
//이런 유형의 삼각형 코드를 callback hell이라고 한다.
//이와 같은 사항은 ES6 promises에서 해결할 수 있음
getRecipe();

