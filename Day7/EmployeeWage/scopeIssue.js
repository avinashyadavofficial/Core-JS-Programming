function testScope() {
    if (true) {
        var salary = 5000;
    }
    console.log(salary);
}
testScope();

//or for let
function testScope() {
    let salary;
    if (true) {
        salary = 5000;
    }
    console.log(salary);
}

testScope();
