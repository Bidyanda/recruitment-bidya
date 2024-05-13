// steps 
// $(document).ready(function(){
    
// });
// step for registration 
// $(".stepper-step").click(function(){
//     var id = $(this).attr('id');
//     var attr = $(this).attr('type');
//     if((!$(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-active") && !$(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-completed"))){
//         if(id != 1 ){
//             return false;
//         }


//     }
//     if(id > 1 && ($(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-active") || $(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-completed"))){
//         $(".stepper-step:lt(" + id + ")").addClass("stepper-completed");
//     }else{
//         if(id==1 && !$(this).hasClass('stepper-completed')){
//             return false;
//         }
//     }
    
//     $(".stepper-step").removeClass("stepper-active");
//     if ( id == 1 || $(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-completed")) {
//         $(".stepper-step:nth-child(" + id + ")").addClass("stepper-active");
//     }
//     // $(".stepper-content").removeClass('stepper-content-show').addClass("stepper-content-hide");
//     // $(".stepper-content:nth-child("+id+")").removeClass("stepper-content-hide").addClass('stepper-content-show');
//     if(id == 1)
//         window.location.href = "http://127.0.0.1:5500/registration/personalDetails.html";
//     else if(id == 2)
//         window.location.href = "http://127.0.0.1:5500/registration/passwordCreation.html";
//     else if (id == 3)
//         window.location.href = "http://127.0.0.1:5500/registration/additionalDetails.html";
//     else if (id == 4)
//         window.location.href = "http://127.0.0.1:5500/registration/declaration.html";

// });
// Registration and Post Apply Steps 
$(".stepper-step").click(function(){
    var id = $(this).attr('id');
    var flag = $(this).hasClass('apply');
    if((!$(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-active") && !$(".stepper-step:nth-child(" + (id - 1) + ")").hasClass("stepper-completed"))){
        if(id != 1 ){
            return false;
        }


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
    // Note :- First 7 is for Applying Post and remaining is for Registration 
    // console.log(attr);
    // return false;
    // console.log(id+' =>'+flag);
    // return false;
    if(id == 1 && flag)
        window.location.href = "http://127.0.0.1:5500/apply/instruction.html";
    else if(id == 2 && flag)
        window.location.href = "http://127.0.0.1:5500/apply/personal_details.html";
    else if (id == 3 && flag)
        window.location.href = "http://127.0.0.1:5500/apply/education_details.html";
    else if (id == 4 && flag)
        window.location.href = "http://127.0.0.1:5500/apply/additional_information.html";
    else if(id == 5 && flag)
        window.location.href = "http://127.0.0.1:5500/apply/upload_document.html";
    else if (id == 6 && flag)
        window.location.href = "http://127.0.0.1:5500/apply/preview_form.html";
    else if (id == 7 && flag)
        window.location.href = "http://127.0.0.1:5500/apply/declaration.html";
    else if(id == 1)
        window.location.href = "http://127.0.0.1:5500/registration/personalDetails.html";
    else if(id == 2)
        window.location.href = "http://127.0.0.1:5500/registration/passwordCreation.html";
    else if (id == 3)
        window.location.href = "http://127.0.0.1:5500/registration/additionalDetails.html";
    else if (id == 4)
        window.location.href = "http://127.0.0.1:5500/registration/declaration.html";
    

});
    
//end
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
// Common for image change, image input change display also change
function readURL(input, elem) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        elem.attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
}

$("#product-mobile_image").change(function(){
    var path = $("#mobile_image");
    readURL(this, path);
  });

// $('#printButton').click(function() {
//     var contentToPrint = $('.tbl-print').clone(); // Clone the content within tbl-print class
//     var printWindow = window.open('', '_blank'); // Open a new window for printing
//     printWindow.document.write('<html><head><title>Print</title></head><body></body></html>'); // Write the HTML structure to the new window
//     printWindow.document.head.innerHTML += '<link rel="stylesheet" href="../css/style.css">'
//     printWindow.document.body.appendChild(contentToPrint[0]); // Append the cloned content to the body of the new window
//     printWindow.print(); // Print the new window
//     printWindow.close(); // Close the new window after printing
// });
$(function () {
    $("#printButton").click(function () {
        var contents = $(".tbl-print").html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        //Create a new HTML document.
        frameDoc.document.write('<html><head><title>DIV Contents</title>');
        frameDoc.document.write('</head><body>');
        //Append the external CSS file.
        frameDoc.document.write('<link href="../css/style.css" rel="stylesheet" type="text/css" />');
        //Append the DIV contents.
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);
    });
});