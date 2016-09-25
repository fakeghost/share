function foo() {
    bar();
    var x = 1;
}


function foo() {
    var x;
    bar();
    x = 1;
}