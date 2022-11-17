// console.log($);
$(document).ready(function(){
    var randNum = Math.floor(Math.random() * 1000000) + 10000;
    $("#captchaText").text(" (" + randNum + ")").css("color", "darkblue");
    $("#Submit").click(function(){

        var email = $("#email").val();
        console.log(email);
        checkErrors();
        function checkErrors(){

            if(email.length == 0){
                // alert("Please enter your registered email id");
                $("#noEmailError").show();
                $("#noEmailError").text("Please enter your registered email id").css("color", "red");
                // return true;
            }
            else{
                $("#noEmailError").hide();
            }
            if($("#captcha").val() != randNum){
                $("#captchaMismatchError").show();
                $("#captchaMismatchError").text("Please Enter a valid Captcha").css("color", "red");
                // return true;
            }
            else{
                $("#captchaMismatchError").hide();
            }

            if(email.length == 0 || $("#captcha").val() != randNum){
                return true;
            }
        }

        if(!checkErrors()){
            $("#captchaMismatchError").hide();
            alert("A mail has been sent to your registered email id, please follow the Steps from there.");
        }


        if(!checkErrors()){

            var i = 5;
            function redirectMessage(){
                // for(var i = 10; i >= 1; i--){
                    $("#redirectingMessage").text("You will be automatically navigated to main login page in " + i + " seconds");
                    i--;
                // }
            }
            
            setInterval(redirectMessage, 1000);
                
            
            function goToLoginPage(){
                window.location.href = "index.html";
            }
            setTimeout(goToLoginPage, 6000);
            
        }


    });


});