
var editName = document.querySelector("#editName");
var number = document.querySelector("#number");
var email = document.querySelector("#email");
var checkedValid=false;

function checkReq(){
	event.preventDefault();
	checkSubmit();
if(checkedValid==true)
{
	 var userInput1 = editName.value;
            document.querySelector("#changeName").innerHTML = userInput1;
            document.querySelector("#changeName2").innerHTML = userInput1;       
       
            var userInput2 = number.value;   
            document.querySelector("#changeNum").innerHTML = userInput2;
       
            var userInput3 = email.value;
            document.querySelector("#changeMail").innerHTML = userInput3;
}
           
}

function checkSubmit(){
		if(editName.checkValidity()!=true || email.checkValidity()!=true || number.checkValidity()!=true)
		{
			checkedValid=false; 
		}
		else 
			checkedValid=true;

}