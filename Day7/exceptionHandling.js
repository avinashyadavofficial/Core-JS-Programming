console.log("Start");

try {
    let result = 10 / 0;  
    console.log(result);
    
    console.log(undeclaredVar);  //error comes here
} catch (error) {
    console.log("An error occurred:", error.message);
}

console.log("End"); 

//use of finally
try {
    let result ;
    console.log(result1);
} catch (error) {
    console.log("Error occurred:", error.message);
} finally {
    console.log("This always runs!");
}

//throw custom error

function divide(a,b){
    if(b==0){
        throw new Error("Divide by 0 error occured");
    }
    return a/b;
}
try{
    let res=divide(10,0);
}
catch(error){
    console.log("Error Occured : "+error.message);
}
finally{
    console.log("This always run");
}

//handling different data types
try {
    let obj = null;
    console.log(obj.name);  
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type Error caught:", error.message);
    } else if (error instanceof ReferenceError) {
        console.log("Reference Error caught:", error.message);
    } else {
        console.log("Unknown error:", error.message);
    }
}

//nested try catch
try{
    try{
        let a=[1,2,3];
        console.log(a[6].toUpperCase());
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        console.log("Inner try catch finished");
    }
    console.log(res);
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("Outer try catch finished");
}

