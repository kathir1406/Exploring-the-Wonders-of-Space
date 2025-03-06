// for(let i=0;i<5;i++){
//     console.log(i);
// }

// const list1=["apple","orange","mango"]
// for(const fruits of list1){
//     console.log(fruits)
// }

// function ab(){
//     console.log("hello")
// }
// ab()

//const f2=()=>console.log("Hiiii")
// f2()
// const fn=(a,b)=>console.log(a+b)
// let c=fn(3,4);

function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const fn=outer();
fn()
