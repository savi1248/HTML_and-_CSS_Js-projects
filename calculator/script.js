function displayvalue(val){
    document.getElementById("display").value=document.getElementById("display").value+val

}
function cleardisplay(){
    document.getElementById("display").value=''
}
function displayresult(){
    var userInput=document.getElementById("display").value
   
    var result=eval(userInput);
    console.log(userInput);
document.getElementById("display").value=result;
}