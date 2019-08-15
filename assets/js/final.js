
// contact validation
// input number shoukd be only 10 digits 
// plus sign allowed 

function PhoneNum(input){
	var phoneno = /^\d{10}$/;
	if(input.value.match(phoneno))
	{
		return true;
	}
	else
	{
		alert("Invalid Number");
		return false;
	}
}


// email validation
// @ should be present
// email cannot start with .
// .com .org ..... allowed
// expressions allowed (characters,digits,underscore and dash)



function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}



// DOM for edit - update - display

// var changeName = document.querySelector(".changeName");
// var changeNum = document.querySelector(".changeNum");
// var changeMail = document.querySelector(".changeMail");

// var nameInput = document.querySelector("#name");
// var numInput = document.querySelector("#tel");
// var mailInput = document.querySelector("#mail");

// changeName
	function changeName(){
            var userInput1 = document.querySelector("#name").value;
                document.querySelector("#changeName").innerHTML = userInput1;
                document.querySelector("#changeName2").innerHTML = userInput1;
        }




// changeNum
	function changeNumber(){
            var userInput2 = document.querySelector("#tel").value;
            document.querySelector("#changeNum").innerHTML = userInput2;
        }




// changeMail
	 function changeMail(){
            var userInput3 = document.querySelector("#email").value;
            document.querySelector("#changeMail").innerHTML = userInput3;
        }



