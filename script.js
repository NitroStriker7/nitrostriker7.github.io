
var myVariable = 20
var number2 = 20
var myVariable = "Snow"

var showDog = false

// This is my function 
function saySomething(){

    var result = myVariable + number2
 console.log("This is Gregory"+ result)

}

function toggleDoge(){

    var img = document.getElementById("dogPic")

    if(showDog == false){
        //Hidden
        img.style.visibility = "hidden"
        showDog = true

 // Change state of Dog 

    }else if(showDog == true){
        //Reveal
        img.style.visibility =  "visible"
        showDog = false
        

    }
}
