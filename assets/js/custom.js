/*****************************************************************************/
/*        
/* General                
/*                  
/*****************************************************************************/
window.onresize = function() {
    if (document.getElementById('resizingIframe') != null) {
	var obj = document.getElementById('resizingIframe');
	obj.style.height = (obj.parentNode.offsetWidth / 16 * 9) + "px";
    }
}

/*****************************************************************************/
/*
/* Off-Canvas Fix
/*
/*****************************************************************************/
$(window)
    .on('resize', function (e) {
        if ($(this).width() > 640) {
            e.preventDefault();
            $(".off-canvas-wrap").removeClass("move-left");
        }
        })
    .on('resize', function (e) {
        if ($(this).width() > 640) {
            e.preventDefault();
            $(".off-canvas-wrap").removeClass("move-right");
        }
    });

// no longer need .html adding, due to permalinks! :D

/*****************************************************************************/
/*
/* Accordion Fix
/*
/*****************************************************************************/
var panelNum;
function addPanel(i) {
    panelNum = i;
}
$('dd > a').on("click", function (e) {
    target = $('#' + 'panel' + panelNum);
    if(target.hasClass('active2')) {
        target.removeClass('active');
        target.removeClass('active2');
    } else {
        target.addClass('active2');
    }
    $('.active2').addClass('active');
});

/*****************************************************************************/
/*
/* Announcements Ticker
/*
/*****************************************************************************/

var $channel;
var $userlist;
var $shownum = 10;

$(function()
  {
      $channel = $("#channel");
      var init = setTimeout(function(){loadData()},50);
      var init = setTimeout(function(){loadData()},200);
      $("#reload").click(
	  function()
	  {
	      loadData();
	  }
      );
      $("#loadmore").click(
	  function()
	  {
	      $shownum += 10;
	      loadData();
	  }
      );
//      var loop = setInterval(function(){loadData()},5000);
      $(document).on("mouseenter", ".message_row", function ()
		     {
			 $(this).css("background-color", "#F9F9F9");
		     }
		    );
      $(document).on("mouseleave", ".message_row", function()
		     {
			 $(this).css("background-color", "transparent");
		     }
		    );
  });

function loadData()
{
    $.ajax({
	url: "https://slack.com/api/users.list?token=xoxp-3317728684-3381416213-19127044354-c54c7fae49",
	format: "json",
	dataType: "JSON",
	type: "GET",
	success: function (data)
	{
	    if(!data.ok)
	    {
		    console.log("Error: " + data.error);
		    alert("Failed to load. Please try again later.");
	    }
	    else
	    {
		$userlist = data;
	    }
	}
    });
    $.ajax({
	url: "https://slack.com/api/channels.history?token=xoxp-3317728684-3381416213-19127044354-c54c7fae49&channel=C0BUT8215&count=1000",
	format: "json",
	dataType: "JSON",
	type: "GET",
	success: function (data)
	{
	    if(!data.ok)
	    {
		    console.log("Error: " + data.error);
		    alert("Failed to load. Please try again later.");
	    }
	    else
	    {
		$channel.empty();
		var i = 0;
		for(j = 0; i < $shownum && j < data.messages.length; j++)
		{
		    var message = data.messages[j];
		    if(String(message.subtype) == "undefined")
		    {
			$.each($userlist.members, function(index, user)
			       {
				   if(user.id == message.user)
				   {
				       if(String(message.text).substring(0, 10) === "<!channel>")
				       {
					   var date = new Date(parseInt(String(message.ts).substring(0, String(message.ts).indexOf(".")))*1000);
					   var hours = date.getHours();
					   var minutes = date.getMinutes();
					   var extension = "AM";
					   if(hours > 12)
					   {
					       hours -= 12;
					       extension = "PM";
					   }
					   if(minutes < 10)
					   {
					       minutes = "0" + minutes;
					   }
					   $channel.append("<div class=message_row><div class=avatar_div><img src=" + user.profile.image_72 + " class=avatar /></div><div class=channel_post><div class=channel_name><span class=bold>" + user.name + "</span> <span class=timestamp>" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " at " + hours + ":" + minutes + " " + extension + "</span></div><div class=message_text><span class=chan>@channel</span>" + message.text + "</div></div></div>");
					   i++;
				       }
				   }
			       });
		    }
		}
	    }
	}
    });
}

/*****************************************************************************/
/*                                                                                                  
/* Secondary Nav                                                                             
/*                                                                                                 
/*****************************************************************************/
    
function showTab(name) {
    $(".current").slideUp(200);
    $(".current").removeClass("current");
    $("." + name).delay(200).slideDown(600);
    $("." + name).addClass("current");
}

$(function ()
  {
      $(document).on("mouseenter", "#nav", function ()
		     {
			 $(this).css("background-color", "#bfbfbf");
		     }
		    );
      $(document).on("mouseleave", "#nav", function()
		     {
			 $(this).css("background-color", "transparent");
		     }
		    );      
  }
 );
