$(function(){
	$("#st").hide();
	$("#loadBg > img").delay(500).animate({right:"20px",width:"50px",height:"50px",top:"48%"},2000);
	$("#loadBg").delay(2500).animate({width:"90px"},1000);
	$("#loadBg > img").delay(1000).queue(function (next) { 
		$(this).css({"animation-play-state":"paused"});
		$("#loadBg > #buger").show();
		next();
	});

});