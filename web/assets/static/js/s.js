function clearhistory(){
				
				
				localStorage.setItem('videos',"");
				
				
			}
function clearrecomend(){
				
				
				localStorage.setItem('recomend',"");
				
				
			}
			
			
function clearwatchlist(){
				
				
				localStorage.setItem('watchlist',"");
				
				
			}
			

function appendToHistory(data){

    var old = localStorage.getItem('videos');
	
    if(old === null) old = "";
	
	
	if (old.length>359){
	old=old.slice(0,360);
	var n = old.lastIndexOf(",");
	old=old.slice(0,n);
                         console.log(old);
	}
	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('videos', data + ',' + old);

	
	} else {
	localStorage.setItem('videos', data + ',' + old);
	}
	
}



function remove4history(data){

    var old = localStorage.getItem('videos');
	
    if(old === null) old = "";
	

	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('videos',old);

	document.getElementById("video-"+data).remove();

	} 

}

function remove4recomend(data){

    var old = localStorage.getItem('recomend');
	
    if(old === null) old = "";
	

	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('recomend',old);
	document.getElementById("video-"+data).remove();

	
	} 


}


function remove4watchlist(data){

    var old = localStorage.getItem('watchlist');
	
    if(old === null) old = "";
	

	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('watchlist',old);
	document.getElementById("video-"+data).remove();

	
	} 

	
}

function remove4playlist(data){

    var old = localStorage.getItem('myplaylist');
	
    if(old === null) old = "";
	

	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('myplaylist',old);
	document.getElementById("video-"+data).remove();

	
	} 

	
}

function appendToRecommend(data){  

    var old = localStorage.getItem('recomend');
	
    if(old === null) old = "";
	
	
	if (old.length>359){
	old=old.slice(0,360);
	var n = old.lastIndexOf(",");
	old=old.slice(0,n);
                         console.log(old);
	}
	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('recomend', data + ',' + old);

	
	} else {
	localStorage.setItem('recomend', data + ',' + old);
	}
	
}

function appendTowatch(data){ 

    var old = localStorage.getItem('watchlist');
	
    if(old === null) old = "";
	
	
	if (old.length>359){
	old=old.slice(0,360);
	var n = old.lastIndexOf(",");
	old=old.slice(0,n);
                         console.log(old);
	}
	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('watchlist', data + ',' + old);

	
	} else {
	localStorage.setItem('watchlist', data + ',' + old);
	}
	
}
function appendTomyplaylist(data){ 

    var old = localStorage.getItem('myplaylist');
	
    if(old === null) old = "";
	
	
	if (old.length>359){
	old=old.slice(0,360);
	var n = old.lastIndexOf(",");
	old=old.slice(0,n);
                         console.log(old);
	}
	if (old.indexOf(data) > -1){
	old = old.replace( data + ',', "")
    localStorage.setItem('myplaylist', data + ',' + old);

	
	} else {
	localStorage.setItem('myplaylist', data + ',' + old);
	}
	
}









$.fn.googleSuggest = function(opts){
  opts = $.extend({service: 'youtube', secure: false}, opts);

  var services = {
    youtube: { client: 'youtube', ds: 'yt' },
    books: { client: 'books', ds: 'bo' },
    products: { client: 'products-cc', ds: 'sh' },
    news: { client: 'news-cc', ds: 'n' },
    images: { client: 'img', ds: 'i' },
    web: { client: 'psy', ds: '' },
    recipes: { client: 'psy', ds: 'r' }
  }, service = services[opts.service];
	opts.delay = 0;
  opts.source = function(request, response){
    $.ajax({
      url: 'http'+(opts.secure?'s':'')+'://clients1.google.com/complete/search',
      dataType: 'jsonp',
      data: {
        q: request.term,
        nolabels: 't',
        client: service.client,
        ds: service.ds
      },
      success: function(data) {
        response($.map(data[1], function(item){
          return { value: $("<span>").html(item[0]).text() };
        }));
      }
    });  
  };
  
  opts.select = function(event,ui){
	$("#q").val(ui.item.label);
	$("#main-search").submit();
  };
  
  return this.each(function(){
    $(this).autocomplete(opts);
  });
}
