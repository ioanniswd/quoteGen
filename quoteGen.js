$("document").ready(function(){
	
   
   $("#quote-btn").click(function(){
   	$.getJSON("quotes.json", function(result,status){
   		var temp_arr = result.theArray;
   		console.log(temp_arr);
   		var index = Math.floor(Math.random() * temp_arr.length);
   		console.log(index);
   		$("#quote-p").html(temp_arr[index]["quote"]);
   		$("#quote-f").html(temp_arr[index]["name"]);
   	});
   });
   
   
   $("#twitter-btn").click(function() {
   	var link = "https://twitter.com/intent/tweet?hashtags=quotes&text=%22";
   	var quote = document.getElementById("quote-p").innerHTML + document.getElementById("quote-f").innerHTML;
   	console.log(quote);
   	link += encodeURI(quote); 	   	
   	window.open(link);
   });

});
