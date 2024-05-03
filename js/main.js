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
var requiredFields = document.querySelectorAll('input[required], select[required]');

// Iterate through each required input and select element
requiredFields.forEach(function(field) {
    // Get the corresponding label element
    var label = field.closest('div').querySelector('label');
    // Add asterisk (*) to the label
    label.innerHTML += '<span class="text-danger">*</span>';
});
// requiredInputs.forEach(function(input) {
//     // Get the corresponding label element
//     var label = input.closest('div').querySelector('label');
//     // Add asterisk (*) to the label
//     label.innerHTML += '<span class="text-danger">*</span>';
// });
//form validation 
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
})()
 //profile 
 $(document).ready(function () {
    var name = $(".short-name").html();
    var arr_name = name.split(" ");
    var sName = '';
    $(arr_name).each(function(index, value) {
        sName += value.charAt(0)
    });
    $(".short-name").html(sName);
 });
