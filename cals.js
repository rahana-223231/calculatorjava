// function display(num){
    // result.value=result.value+num
    // result.value+=num
// }
// function allclear(){
    // result.value=""
// }
// function evaluateexp(){
    // exp=result.value
    // res=eval(exp)
    // result.value=eval(result.value)
// }
// function removeElement(){
//            curr_exp=result.value
//            result.value=curr_exp.slice(0,-1)
// }




// backspace : slicing 
// s="hello"
// slice(starting,endingindex)
// can use + ve as well as -ve index

let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;

}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    
    {
        alert("Invalid")
    }
}

function allclear(){
    outputScreen.value ="";
}

function removeElement(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}
