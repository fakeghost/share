var foo = 1;
function bar() {
	var foo;
	console.log(foo);
    if (!foo) {
        foo = 10
    }
    alert(foo);
}
bar();

function de(){
	if (foo) {
		let foo = 10;
	}
	alert(foo);
}