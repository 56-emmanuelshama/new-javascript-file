

const decreasebtn= document.getElementById("decreasebtn");
const increasebtn=document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const results=document.getElementById("result")

let number= 0;


decreasebtn.addEventListener("click" , function () {
    number--;
  results.textContent=`count: ` + number;
});
increasebtn.addEventListener("click", function ( ){
    number ++;
    results.textContent= `count: ` + number;
})
resetbtn.addEventListener("click", function () {
    number = 0;
    results.textContent = "count : " + number;
});
