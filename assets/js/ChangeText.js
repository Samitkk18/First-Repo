  function changeName(){
            var userInput1 = document.querySelector("#name").value;
                document.querySelector("#changeName").innerHTML = userInput1;
                document.querySelector("#changeName2").innerHTML = userInput1;
        } 
       
        function changeNumber(){
            var userInput2 = document.querySelector("#tel").value;
            document.querySelector("#changeNum").innerHTML = userInput2;
        }

        function changeMail(){
            var userInput3 = document.querySelector("#email").value;
            document.querySelector("#changeMail").innerHTML = userInput3;
        }