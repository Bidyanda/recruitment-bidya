// steps 
// $(document).ready(function(){

// });
$(".stepper-step").click(function(){
    var id = $(this).attr('id');
    if((!$(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-active") && !$(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-completed"))){
        if(id != 1)
        return false;
    }
    if(id > 1 && ($(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-active") || $(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-completed"))){
        $(".stepper-step:lt(" + id + ")").addClass("stepper-completed");
    }else{
        if(id==1 && !$(this).hasClass('stepper-completed')){
            return false;
        }
    }
    
    $(".stepper-step").removeClass("stepper-active");
    if ( id == 1 || $(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-completed")) {
        $(".stepper-step:nth-child(" + id + ")").addClass("stepper-active");
    }
    // $(".stepper-content").removeClass('stepper-content-show').addClass("stepper-content-hide");
    // $(".stepper-content:nth-child("+id+")").removeClass("stepper-content-hide").addClass('stepper-content-show');
    if(id == 1)
        window.location.href = "http://127.0.0.1:5500/registration/personalDetails.html";
    else if(id == 2)
        window.location.href = "http://127.0.0.1:5500/registration/passwordCreation.html";
    else if (id == 3)
        window.location.href = "http://127.0.0.1:5500/registration/additionalDetails.html";
    else if (id == 4)
        window.location.href = "http://127.0.0.1:5500/registration/declaration.html";

});

var requiredInputs = document.querySelectorAll('input[required]');

// Iterate through each required input element
requiredInputs.forEach(function(input) {
    // Get the corresponding label element
    var label = input.closest('div').querySelector('label');
    // Add asterisk (*) to the label
    label.innerHTML += '<span class="text-danger">*</span>';
});