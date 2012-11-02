/*!  Stolen from dirk@dirkdirk.com*/
var holder;
$(document).ready(function(){
	$(".weirdHover").mousedown(function(e){
		$(this).stopTime();
		e.preventDefault();
		window.location=$(this).attr("href");
	});
	$(".weirdHover").hover(function(){
		holder = $(this).html();
		var t = holder;
		var len = t.length;
		$(this).everyTime(20,function(i){
			var newstring = "";
			for (var i=0;i<len;i++)
			{
				newstring = newstring + String.fromCharCode(97 + Math.round(Math.random() * 25));
			}
			$(this).html(newstring);
		});
	},function(){
		$(this).stopTime();
		$(this).html(holder);
	});
});