/*===============================
Url preview script
=================================*/

this.screenshotPreview = function(){	

xOffset = 125;
yOffset = 90;

$(".screenshot").hover(function(e){
this.t = this.title;
this.title = "";	
var c = (this.t != "") ? "<br/>" + this.t : "";
$("body").append("<div id='screenshot'><img src='"+ this.rel +"' alt='url preview' />"+ c +"</div>");								 
$("#screenshot")
.css("top",(e.pageY - xOffset) + "px")
.css("left",(e.pageX + yOffset) + "px")
.fadeIn("fast");						
},
function(){
this.title = this.t;	
$("#screenshot").remove();
});	
$("a.screenshot").mousemove(function(e){
$("#screenshot")
.css("top",(e.pageY - xOffset) + "px")
.css("left",(e.pageX + yOffset) + "px");
});			
};

// starting the script on page load
$(document).ready(function(){
screenshotPreview();
});