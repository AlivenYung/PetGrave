
function openmenu(){
	$("#loadBg").css({"width":"300px"});
	$("#loadBg > #buger").hide();
	$("#loadBg > #closeBuger").show();
	$("#loadBg > img").css({"width":"150px","height":"150px","top":"100px","right":"75px"});
	$("#loadBg > #menu").fadeIn();
}
function closemenu(){
	$("#loadBg > #menu").hide();	
	$("#loadBg > #buger").show();
	$("#loadBg > #closeBuger").hide();
	$("#loadBg > img").css({"width":"50px","height":"50px","top":"48%","right":"10px"});
	$("#loadBg").css({"width":"70px"});
}
function goToByScroll(id){
    id = id.replace("link", "");
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}
$(".aboutlink").click(function(e) { 
	goToByScroll($(this).attr("class"));           
});
$(".indexlink").click(function(e) { 
	goToByScroll($(this).attr("class"));
});
$(".processlink").click(function(e) { 
	goToByScroll($(this).attr("class"));
});
$(".stylelink").click(function(e) { 
	goToByScroll($(this).attr("class"));
});
$(".babylink").click(function(e) { 
	goToByScroll($(this).attr("class"));
});

$("#style > div").click(function() {
	var id = $(this).attr("class")*1;
	var h3 = ["台灣","日本","西洋"];
	var con = ["神聖且莊嚴的骨灰罈，裡面裝著愛寵的骨灰讓愛寵能永遠在裡面沈靜",
	"將愛寵的姓名及忌日，深深的刻印在堅硬的石板上，讓這世上永遠為祂留名",
	"將骨灰罈放入一個神聖的風水寶地，讓愛寵在往生後還是能有一個寧靜的棲息地"];
	$("#st").fadeOut();
	$("#st").fadeIn();
	goToByScroll("stylelink");
	$("#style > div a").attr("style","");
	$(this).children("a").css("opacity","0");
	$("#st > h3").html(h3[id]);
	for(var i = 1; i <= 3; i++){
		$("#st .contact > div:nth-child("+i+") > div").css("background-image","url('img/st20"+i+".jpg')");
		$("#st .contact > div:nth-child("+i+") p").html(con[i-1]);
	}
});