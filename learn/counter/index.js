const decresebtn = document.getElementById("decrese");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const countlabel = document.getElementById("countlabel");

let count = 0;


increasebtn.onclick = function(){
    count++
    countlabel.textContent = count;
}

decresebtn.onclick = function(){
    count--
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
