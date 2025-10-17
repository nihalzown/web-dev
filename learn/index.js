const PI = 3.14159;
let circumference;
let radius;


document.getElementById("mysubmit").onclick = function() {
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = "Circumference is " + circumference + " units. ";
}