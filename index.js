//Selectors
//Event Listener

document.querySelector("#btn").addEventListener("click", addReverse); //click yapınca addReverse function çalışacak

//Function

function addReverse(){
    var reverseInpt = document.querySelector("#inpt").value;
    var textElement = document.querySelector("#text");

    var reversing ="";
   for (var i=(reverseInpt.length-1) ; i>=0 ; i--){
       reversing += reverseInpt[i];
   }
        console.log(reversing)

textElement.innerText =reversing;
document.querySelector("#inpt").focus()
document.querySelector("#inpt").value="";

}

