let x = +prompt("Enter your number");

check(x);

function check(x) {
    if (x == "") {
        alert("Please enter your number");
    } else if (x % 2 == 0) {
        alert("x la so chan");
    } else {
        alert("x la so le");
    }
}
