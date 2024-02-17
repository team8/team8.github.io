
var current_fs, next_fs, previous_fs; //fieldsets

$(".next, .submit").click(function(){
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	current_fs.hide();
	next_fs.show(); 
	
});

$(".previous").click(function(){
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	current_fs.hide();
	previous_fs.show(); 
	
});


$("fieldset input, fieldset textarea").on("click keyup", function() {

	// Automatically selects "other" option if the text box is clicked
    if($(".other-choice-1").first().is(':checked')) {
        $(".other-choice-text-1").removeClass("optional")
    }
    else {
        $(".other-choice-text-1").addClass("optional")
    }
    if($(".other-choice-2").first().is(':checked')) {
        $(".other-choice-text-2").removeClass("optional")
    }
    else {
        $(".other-choice-text-2").addClass("optional")
    }

    if($(".other-choice-3").first().is(':checked')) {
        $(".other-choice-text-3").removeClass("optional");
        $(".other-choice-text-3").removeClass("greyba");
        $(".other-choice-text-3").attr("readonly", false);
    }
    else {
        $(".other-choice-text-3").addClass("optional");
        $(".other-choice-text-3").addClass("greyba");
        $(".other-choice-text-3").attr("readonly", true);
        $(".other-choice-text-3").val("");
    }
    
    var empty = false;
    
    // Checks that all non-optional text fields are filled out
    $(this).closest("fieldset").find("input[type='text']:not(.optional), textarea:not(.optional)").each(function() {
        if ($.trim($(this).val()) == '') {
            empty = true;
        }
    });
    
    // Checks that all non-optional multiple choice questions are filled out
    $(this).closest("fieldset").find("input[type='radio']:not(.optional), input[type='checkbox']:not(.optional)").each(function() {
        if ($("[name='"+$(this).attr('name')+"']:checked").length == 0) {
            empty = true;
        }
    });
    
    // Checks that at least one session is selected (either register or waitlist)
    if($(this).closest("fieldset").find(".session-checkbox").length > 0 && $(this).closest("fieldset").find(".session-checkbox:checked").length == 0) {
        empty = true;
    }

	// Disables the next button if there is an empty field
    if (empty) {
       $(this).closest("fieldset").find(".next, .submit").attr('disabled', 'disabled');
    } else {
       $(this).closest("fieldset").find(".next, .submit").removeAttr('disabled');
    }
    
});

// Determines which subsequent pages to show the user based on their session selection
// Makes payment questions optional if the user is only waitlisting
$(".session-checkbox").click(function() {

    if ($(".register-checkbox:checked").length > 0) {
        $(".register").show()
        $(".register-only").removeClass("optional")
        $(".register-only").first().closest("fieldset").find(".next, .submit").attr('disabled', 'disabled');
        $(".waitlist").hide()
    }
    else if ($(".waitlist-checkbox:checked").length > 0) {
        $(".register").hide()
        $(".register-only").addClass("optional")
        $(".register-only").first().closest("fieldset").find(".next, .submit").removeAttr('disabled');
        $(".waitlist").show()
    }
    else {
        $(this).closest("fieldset").find(".next, .submit").attr('disabled', 'disabled');
    }
    
});

// Disables all next buttons on page load
$( document ).ready( function() {
    $(".next, .submit").prop("disabled", true)
});