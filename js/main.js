// steps 
$(".stepper-step").click(function(){
    // $(".stepper-content").addClass("stepper-content-hide");
    $(".stepper-step:not(.stepper-completed)").removeClass("stepper-active");
    $(this).addClass("stepper-active");
});