async function* fun(){
    yield 1;
    yield 2;
}

(async ()=>{
    for await(const i of fun()){
        console.log(i);
    }
})();

