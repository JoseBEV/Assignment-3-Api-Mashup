console.log('\'Allo \'Allo!');

$(document).ready(function(){

	var selected;

	$('#eyebrow').click(function() {
		selected = 'eyebrow';
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
	
	$('#eyeshadow').click(function() {
		selected = 'eyeshadow';
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