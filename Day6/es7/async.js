async function dis(){
    let mypromise=new Promise(function(myResolve){
        setTimeout(function(){myResolve("Avinash Yadav");},3000);
    });
    return await mypromise;
}
dis().then(console.log);


async function display(){
    let mess=await new Promise(resolve=>setTimeout(()=>resolve("Avinash Yadav"),3000));
    console.log(mess);
}
display();
