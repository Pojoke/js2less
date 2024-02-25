let x = prompt("Input x");
let y = prompt("Input y");
let mult = x * y;
// alert(x * y);
// if (isNaN(mult));
if (isNaN(mult)) {
    alert("Error!")
}
else if (x > 0 && y >0) {

    alert(mult);
}
else {
    alert("x must be > 0");
}
