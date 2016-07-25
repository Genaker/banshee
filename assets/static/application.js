var videos=[];

function loadDurations(){
$.post("/duration/",{vid:videos},function(e){
  if(e.status=='error'){
	  $("li.video .duration").each(function(){ $(this).remove(); });	
  }else if(e.status=='ok'){
	  var data = e.data;
	  $.each(data,function(vid,time){
		  
		  $("#video-"+vid).find('.duration').html(time);
	  });
  }
},'json');
}


function youtube_parser(url) {

var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
var match = url.match(regExp);
if (match && match[2].length == 11) {
  return match[2];
} else {
  return "notyoutube";
}
}

  function validateForm() {
    var x = document.forms["search-form"]["search-text"].value;
	if (x.length==11) {
	return true
	}
	if (youtube_parser(x)=='notyoutube') {
	
	return true;
	} else {
	var vidid= youtube_parser(x);
	}
	
    if (vidid.length ==11) {
	

window.location="//vimosound.com/watch/" + vidid;
  return false;

} else {
	
  return true;
}
}

 function validateForm2() {
    var x = document.forms["search-form-2"]["search-text-2"].value;
	if (x.length==11) {
	return true
	if (youtube_parser(x)=='notyoutube') {
	
	return true;
	} else {
	var vidid= youtube_parser(x);
	}
	
    if (vidid.length ==11) {
	

window.location="//vimosound.com/watch/" + vidid;
  return false;

} else {
	
  return true;
}
}
}

$(document).ready(function(){
	
	
	
	   $("#search-text").autocomplete({
        source: function(request, response) {
            var apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
            var query = request.term;
            $.ajax({
                url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=" + query + "&key=" + apiKey + "&format=5&alt=json&callback=?",
                dataType: 'jsonp',
                success: function(data, textStatus, request) {
                    response($.map(data[1], function(item) {
                        return {
                            label: item[0],
                            value: item[0]
                        }
                    }));
                }
            });
        },
        select: function(event, ui) {
            $("#search-text").val(ui.item.value);
            $("#search-form").submit();
        }
    });
	
		   $("#search-text-2").autocomplete({
        source: function(request, response) {
            var apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
            var query = request.term;
            $.ajax({
                url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=" + query + "&key=" + apiKey + "&format=5&alt=json&callback=?",
                dataType: 'jsonp',
                success: function(data, textStatus, request) {
                    response($.map(data[1], function(item) {
                        return {
                            label: item[0],
                            value: item[0]
                        }
                    }));
                }
            });
        },
        select: function(event, ui) {
            $("#search-text-2").val(ui.item.value);
            $("#search-form-2").submit();
        }
    });
	
	
	
	
	/* embed code display */
	$("#btnToggleEmbed").click(function(){
		$("#rowEmbedCode").slideToggle("fast");	
	});
	
	// Current Menu
  var path = location.pathname.substring(1);
  if (path) {
  	$('ul.channels li a').removeClass("current");
  	$('ul.channels li a[href$="' + path + '"]').attr('class', 'current');		
  }
  $(".video-descriptionbtn").click(function(e){
  	
  	$(".video-description").css({"max-height": 900});
  });
  
  $(".video-commentbtn").click(function(e){
  	
  	$(".video-comment").css({"max-height": 5000});
  });

$("#search-button").click(function(){
var query = $("#search-text").val();

if (query.indexOf("watch?v=") > -1) {

var res=query.split("watch?v=");

window.location="//vimosound.com/watch/" + res[1];
} else {
	
  $("#search-form").submit();
}
  });
  
  
  $("#search-button-2").click(function(){
var query = $("#search-text-2").val();

if (query.indexOf("watch?v=") > -1) {

var res=query.split("watch?v=");

window.location="//vimosound.com/watch/" + res[1];
} else {
	
  $("#search-form-2").submit();
}
  });
  


  if($(window).width() < 766){
  	$(".sidebar").hide();
  	$(".navbar-toggle").click(function(e){
			e.preventDefault();
			$(".sidebar").slideToggle();
  	});
  }
  $(document).on('click',"a.ushare",function(e){
    e.preventDefault();
    window.open($(this).attr("href"), '', 'left=50%, top=100, width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=1')    
  });
  $("#q").googleSuggest();
  if(videos.length!=0){ loadDurations(); }
});
 
