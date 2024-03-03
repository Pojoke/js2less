let a = +prompt("Введіть змінну a для пошуку корення рівняння a*x+b=0");
let b = +prompt("Введіть змінну b для пошуку корення рівняння a*x+b=0");
if (a === 0) {
    alert("Рівняння неможливо вирішити!");
} else if (isNaN(a) || isNaN(b)) {
    alert("Error!");
}


else {
    let x = -b / a;
    alert("x =" + " " + x);

}
