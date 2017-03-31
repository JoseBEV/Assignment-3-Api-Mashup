console.log('\'Allo \'Allo!');

$(document).ready(function(){

	var selected;

	$('#eyebrow').click(function() {
		selected = 'eyebrow';
		console.log(selected);
		$.getJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + selected, function(data) {
     	$('#products').empty();
     		$.each(data, function(i, item) {
     			$('#products').append('<div class=\'card-image waves-effect waves-block waves-light center\'>' + '<img src=\'' + data[i].image_link + '\' class=\'activator\'>' + '</div>' + '<div class=\'card-content\'>' + 
		      	'<span class=\'card-title activator grey-text text-darken-4 center\'>' + data[i].name + //'<i class=\'material-icons right\'>' + 'visibility' + '</i>' + 
		      	'</span>' + '<br>' +
		    	'</div>') //+ '<div class=\'card-reveal\'>' + '<span class=\'card-title grey-text text-darken-4\'>' + '<i class=\'material-icons right\'>' + 'close' + '</i>' + '</span>' + '<p>' + data[i].description + '</p>' + '</div>')
     			//$('#products').append('<p class=\'cat\'>' + data[i].name + '</p>', '<img src=\'' + data[i].image_link + '\'>')
        /*if (i == 10) {
        	return false;
        }*/
            });
  		});   	
	});
	
	$('#eyeshadow').click(function() {
		selected = 'eyeshadow';
		console.log(selected);
		$.getJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + selected, function(data) {
     	$('#products').empty();
     		$.each(data, function(i, item) {
     			$('#products').append('<div class=\'card-image\'>' + '<img src=\'' + data[i].image_link + '\'>' + '<span class=\'card-title\'>' + data[i].name + '</span>' + '</div>' + '<div class=\'card-content\'>' + '<p>' + data[i].description + '</p>' + '</div' )
        /*if (i == 10) {
        	return false;
        }*/
            });
  		});   	
	});

$('#eyeliner').click(function() {
		selected = 'eyeliner';
		console.log(selected);
		$.getJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + selected, function(data) {
     	$('#products').empty();
     		$.each(data, function(i, item) {
     			$('#products').append('<p class=\'cat\'>' + data[i].name + '</p>', '<img src=\'' + data[i].image_link + '\'>')
        /*if (i == 10) {
        	return false;
        }*/
            });
  		});   	
	});

$('#mascara').click(function() {
		selected = 'mascara';
		console.log(selected);
		$.getJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + selected, function(data) {
     	$('#products').empty();
     		$.each(data, function(i, item) {
     			$('#products').append('<p class=\'cat\'>' + data[i].name + '</p>', '<img src=\'' + data[i].image_link + '\'>')
        /*if (i == 10) {
        	return false;
        }*/
            });
  		});   	
	});  
});