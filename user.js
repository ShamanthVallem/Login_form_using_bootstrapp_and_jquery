$(document).ready(function(){
    var randNum = Math.floor(Math.random() * 1000000) + 10000;
    $("#captchaText").text(" (" + randNum + ")").css("color", "darkblue");
    $("#loginButton").click(function(){
        var email = $("#UserName").val();
        // console.log(email);

        var password = $("#pass").val();
        // console.log(password);

        if(email.length == 0){
            $("#userNameError").show();
            // alert("please enter username");
            $("#userNameError").text("please enter your username").css("color", "red");
        }
        else{
            $("#userNameError").hide();
        }
        if(password.length == 0){
            $("#passwordError").show();
            // alert("please enter password");
            $("#passwordError").text("Please enter your password").css("color", "red");
        
        }
        else{
            $("#passwordError").hide();
        }
        
        if($("#captcha").val() != randNum){
            $("#captchaMismatchError").show();
            $("#captchaMismatchError").text("Please Enter a valid Captcha").css("color", "red");
        }
        else{
            $("#captchaMismatchError").hide();
        }
    });
});