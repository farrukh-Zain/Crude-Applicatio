let arr = new Array();

let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");

function str() {
    arr[0] = document.getElementById("input1").value;
    arr[1] = document.getElementById("input2").value;
    arr[2] = document.getElementById("input3").value;
     res1.innerHTML = arr[0];
     res2.innerHTML = arr[1];
     res3.innerHTML = arr[2];
}
function upd() {
    let ind = prompt("Enter the index number to update");
    let val = prompt("Enter the value to update");
    arr[ind] = val;
    if(ind == 0){
        res1.style.color = "green";
    }
    else if(ind == 1){
        res2.style.color = "green";
    }
    else if(ind == 2){
        res3.style.color ="green";
    }
    else{
        alert("Wrong input");
    }
        res1.innerHTML = arr[0];
        res2.innerHTML = arr[1];
        res3.innerHTML = arr[2]; 
    }
  function del() {
    let a = prompt("Enter the index number to delete");
    if(a == 0){
        res1.style.color = "red";
    }
    else if(a == 1){
        res2.style.color = "red";
    }
    else if(a == 2){
        res3.style.color = "red";
    }
    else{
        alert("Wrong input");
    }
  }

