
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

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

    if($(".other-choice").first().is(':checked')) {
        $(".other-choice-text").removeClass("optional")
    }
    else {
        $(".other-choice-text").addClass("optional")
    }
    
    var empty = false;
    $(this).closest("fieldset").find("input[type='text']:not(.optional), textarea:not(.optional)").each(function() {
        if ($.trim($(this).val()) == '') {
            empty = true;
        }
    });
    
    $(this).closest("fieldset").find("input[type='radio']:not(.optional), input[type='checkbox']:not(.optional)").each(function() {
        if ($("[name='"+$(this).attr('name')+"']:checked").length == 0) {
            empty = true;
        }
    });

    if (empty) {
       $(this).closest("fieldset").find(".next, .submit").attr('disabled', 'disabled');
    } else {
       $(this).closest("fieldset").find(".next, .submit").removeAttr('disabled');
    }
});

$(".register-checkbox").click(function() {
    var date = $(this).val().substr(0, $(this).val().indexOf(':'));
    if (this.checked) {
        $(".register-checkbox").each(function() {
            if($(this).val().search(date) != -1 && !this.checked) {
                $(this).prop("disabled", true)
            }
        });
    }
    else {
        $(".register-checkbox").each(function() {
            if($(this).val().search(date) != -1) {
                $(this).prop("disabled", false)
            }
        });
    }
    
});

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

$( document ).ready( function() {
    $(".next, .submit").prop("disabled", true)
});