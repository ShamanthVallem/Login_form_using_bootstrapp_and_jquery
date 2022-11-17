$(document).ready(function(){
    // $("#updateFinalButton").hide();
    var firstName='';
    var lastName = '';
    var emailId = '';
    var buildingName = '';
    var cityName = '';
    var stateNAme = '';
    var pinCode = '';
    var dateOfBirth = '';
    var maritalStatus = '';
    var EducationalQualifications = '';
    var panNumber = '';
    var voterId = '';
    var serialNumber = 0;

    var row = '';
    var deleteButton = '';
    var i = 0;
    var k = [1, 2, 3, 4, 6, ,5, 7, 8, 9, 10];
    $("#registerButton").click(function(){
        
        // Initializing the variables   
        firstName = $("#fName").val();
        console.log(firstName);

        lastName = $("#lName").val();
        console.log(lastName);

        emailId = $("#email").val();
        console.log(emailId);

        buildingName = $("#buildingName").val();
        console.log(buildingName);

        cityName = $("#cityName").val();
        console.log(cityName);

        stateNAme = $("#stateName").val();
        console.log(stateNAme);

        pinCode = $("#pinCode").val();
        console.log(pinCode);

        // var gender = $("#gender").val();
        // console.log(gender);

        dateOfBirth = $("#dob").val();
        console.log(dateOfBirth);

        maritalStatus = $("#maritalStatus").val();
        console.log(maritalStatus);

        EducationalQualifications = $("#educationalQualifications").val();
        console.log(EducationalQualifications);

        panNumber = $("#panId").val();
        console.log(panNumber);

        voterId = $("#voterId").val();
        console.log(voterId);
        $("span").css("color", "red");

        checkError();
        function checkError(){

            if(firstName.length == 0){
                $("#fNameError").show();
                $("#fNameError").html("<i><b>Please Enter Your First Name.</b></i>");
                // return true;
            }
            else{
                $("#fNameError").hide();
            }
    
            if(lastName.length == 0){
                $("#lNameError").show();
                $("#lNameError").html("<b>Please Enter Your last Name.</b>");
                // return true;
    
            }
            else{
                $("#lNameError").hide();
            }
    
            if(emailId.length == 0){
                $("#emailError").show();
                $("#emailError").html("<b>Please Enter Your Email Id.</b>");    
                // return true;
            }
            else{
                $("#emailError").hide();
            }
    
            if(buildingName.length == 0 || cityName.length == 0 || stateNAme.length == 0 || pinCode.length == 0){
                $("#addressError").show();
                $("#addressError").html("<b>Please Enter Your Address.</b>");    
                // return true;
            }
            else{
                $("#addressError").hide();
            }
    
            if(dateOfBirth.length == 0){
                $("#dobError").show();
                $("#dobError").html("<b>Please Enter Your Date Of Birth.</b>");
                // return true;
    
            }
            else{
                $("#dobError").hide();
            }
    
            if(maritalStatus.length == 6 && maritalStatus != "single"){
                $("#maritalStatusError").show();
                $("#maritalStatusError").html("<b>Please Enter Your Marital Status.</b>");  
                // return true;  
            }
            else{
                $("#maritalStatusError").hide();
            }
    
            if(EducationalQualifications.length == 6){
                $("#educationalQualificationsError").show();
                $("#educationalQualificationsError").html("<b>Please Enter Your Educational Qualifications.</b>");   
                // return true; 
            }
            else{
                $("#educationalQualificationsError").hide();
            }
    
            if(panNumber.length == 0){
                $("#panIdError").show();
                $("#panIdError").html("<b>Please Enter Your Pan Number.</b>");    
                // return true;
            }
            else{
                $("#panIdError").hide();
            }
            
            if(voterId.length == 0){
                $("#voterIdError").show();
                $("#voterIdError").html("<b>Please Enter Your voter Id.</b>");   
                // return true;
            }
            else{
                $("#voterIdError").hide();
            }

            if(firstName.length == 0 || lastName.length == 0 || voterId.length == 0 || panNumber.length == 0 || EducationalQualifications.length == 6 || (maritalStatus.length == 6 && maritalStatus != "single") || dateOfBirth.length == 0 || (buildingName.length == 0 || cityName.length == 0 || stateNAme.length == 0 || pinCode.length == 0) || emailId.length == 0){
                return true;
            }
        }

        // if(!checkError()){
        //     alert("USer created successfully");
        //     var i = 10;
        //     function redirectMessage(){
        //         // for(var i = 10; i >= 1; i--){
        //             $("#redirectedUserMEssage").text("You will be automatically navigated to main login page in " + i + " seconds");
        //             i--;
        //         // }
        //     }
            
        //     setInterval(redirectMessage, 1000);
        
        
        //     function goToLoginPage(){
            //         window.location.href = "index.html";
            //     }
            //     setTimeout(goToLoginPage, 11000);
            
            // }
            
            
            if(!checkError()){
                i++;
                serialNumber++;
                console.log(i);
                row = $("<tr>");
                $(row).attr("id", "row" + i);
                data1 = $("<td></td>");
                data2 = $("<td>");
                data3 = $("<td>");
                data4 = $("<td>");
                data5 = $("<td>");
                data6 = $("<td>");
                data7 = $("<td>");
                data8 = $("<td>");
                data9 = $("<td>");
                data10 = $("<td>");
                data11 = $("<td>");
                data12 = $("<td>");
                data13 = $("<td>");
                data14 = $("<td>");
                // data15 = $("<td>");
                
                deleteButton = $("<button>");
                // $(deleteButton).attr("id", "deleteButton" + i);
                $(deleteButton).attr("class", "deleteButton");
                $(deleteButton).text("Delete");

                updateButton = $("<button>");
                // $(updateButton).attr("id", "updateButton" + i);
                $(updateButton).attr("class", "updateButton");
                $(updateButton).text("Update");

                $(data1).append(firstName);
                $(data1).attr("class", "data1");
                $(row).append(data1);

                $(data2).append(lastName);
                $(data2).attr("class", "data2");
                $(row).append(data2);

                $(data3).append(emailId);
                $(data3).attr("class", "data3");
                $(row).append(data3);

                $(data4).append(buildingName);
                $(data4).attr("class", "data4");
                $(row).append(data4);

                $(data5).append(cityName);
                $(data5).attr("class", "data5");
                $(row).append(data5);

                $(data6).append(stateNAme);
                $(data6).attr("class", "data6");
                $(row).append(data6);

                $(data7).append(pinCode);
                $(data7).attr("class", "data7");
                $(row).append(data7);

                $(data8).append(dateOfBirth);
                $(data8).attr("class", "data8");
                $(row).append(data8);

                $(data9).append(maritalStatus);
                $(data9).attr("class", "data9");
                $(row).append(data9);

                $(data10).append(EducationalQualifications);
                $(data10).attr("class", "data10");
                $(row).append(data10);

                $(data11).append(panNumber);
                $(data11).attr("class", "data11");
                $(row).append(data11);

                $(data12).append(voterId);
                $(data12).attr("class", "data12");
                $(row).append(data12);

                $(data13).append(updateButton);
                $(data13).attr("class", "data13");
                $(row).append(data13);

                $(data14).append(deleteButton);
                $(data14).attr("class", "data14");
                $(row).append(data14);

                // $(data15).append(serialNumber);
                // $(data15).attr("class", "data15");
                // $(data15).attr("id", "sNo"+i);
                // $(row).append(data15);


                $("tbody").append(row);

                $(".deleteButton").click(function(){
                    $(this).parents("tr").remove();
                });


                $(".updateButton").click(function(){
                    // $(this).parents("tr").children("td.first").remove();
                    // $(this).children("td.first").remove();
                    $("#registerButton").text("Update").css("background-color", "red");
                    // $("#updateFinalButton").show();
                    $(".updateButton").prop("disabled", true);

                    // $(this).parents("tr").css("visibility", "hidden");
                    $(this).parents("tr").hide();
                    
                    // $(this).css("visibility", "hidden");

                    $("#fName").val($(this).parents("tr").children().filter(".data1").text());
                    $("#lName").val($(this).parents("tr").children().filter(".data2").text());
                    $("#email").val($(this).parents("tr").children().filter(".data3").text());
                    $("#buildingName").val($(this).parents("tr").children().filter(".data4").text());
                    $("#cityName").val($(this).parents("tr").children().filter(".data5").text());
                    $("#stateName").val($(this).parents("tr").children().filter(".data6").text());
                    $("#pinCode").val($(this).parents("tr").children().filter(".data7").text());
                    $("#dob").val($(this).parents("tr").children().filter(".data8").text());
                    $("#maritalStatus").val($(this).parents("tr").children().filter(".data9").text());
                    $("#educationalQualifications").val($(this).parents("tr").children().filter(".data10").text());
                    $("#panId").val($(this).parents("tr").children().filter(".data11").text());
                    $("#voterId").val($(this).parents("tr").children().filter(".data12").text());





                    // $(this).parents("tr").hide();

                    $("#registerButton").click(function(){
                        console.log("Values are updated");
                        // alert("Your Changes are saved");
                        $(".updateButton").prop("disabled", false);
                        // $("#registerButton").text("Create account").css("background-color", "rgb(0,105,217)");
                        $("#registerButton").text("Create Account").css("background-color", "rgb(0,105,217)");
                        // $("#updateFinalButton").hide();
                        
                    })
                });
                
            
            }

    
        
    });
    


});