var target_id_number = "";
var woof_image = "<img src='images/bark.png'>";

function change_div_html(new_html,target_div){
	document.getElementById(target_div).innerHTML = new_html;
}

var last_selection;

function change_class2(obj){//this is useful when nothing is selected initially
	if (last_selection) last_selection.className='';
	obj.className='selected';
	last_selection=obj;
}

function change_class(obj){//this is useful when one option is selected initially
	if (obj == document.getElementById('option_1')){
		document.getElementById('option_1').className='selected';
		document.getElementById('option_2').className='';
		document.getElementById('option_3').className='';
	}
	if (obj == document.getElementById('option_2')){
		document.getElementById('option_1').className='';
		document.getElementById('option_2').className='selected';
		document.getElementById('option_3').className='';
	}
	if (obj == document.getElementById('option_3')){
		document.getElementById('option_1').className='';
		document.getElementById('option_2').className='';
		document.getElementById('option_3').className='selected';
	}
}

function unhide(divID) {
	var item = document.getElementById(divID);
	if (item) {
		item.className='unhidden';
	}
}

function hide(divID) {
	var item = document.getElementById(divID);
	if (item) {
		item.className='hidden';
	}
}

function toggle_hide(divID) {
	var item = document.getElementById(divID);
	if (item) {
		item.className=(item.className=='hidden')?'unhidden':'hidden';
	}
}

function login_lightbox(){
	alert("hi");
}

function show_options(point_id){
	target_id_number = String(point_id).slice(5,String(point_id).length);//the slice always starts with 5 because the first five characters are "point"
	var details_id = "details" + target_id_number;//here's an alternate way that worked in Chrome but not FF: var details_area = eval('(details' + target_id_number + ')');
	document.getElementById(details_id).innerHTML='<ul class="response_options"><li class="up"><img src="images/paws_up.png">&nbspPaws Up!</li><li class="down"><img src="images/paws_down.png">&nbspPaws Down</li><span onclick="alert();"><li class="conversation"><img width="20" height="20" src="images/conversation.png">&nbspConversation</li></span></ul>';//original; the problem is that it blinks on mouseover when onmouseout is applied
	//details_area.innerHTML='<ul><li>&nbspPaws Up!</li><li>&nbspPaws Down</li><li>&nbspConversation</li></ul>';//original without classes still blinks
	//details_area.innerHTML='<img src="images/paws_up.png">&nbspPaws Up!<img src="images/paws_down.png">&nbspPaws Down<img width="20" height="20" src="images/conversation.png">&nbspConversation';//without list; blinks over images but not text
	//details_area.innerHTML = "<div>lots of words lots of words lots of words lots of words</div>"//this is just with text and it doesn't blink
}

function hide_options(point_id){
//	target_id_number = String(point_id).slice(5,String(point_id).length);//the slice always starts with 5 because the first five characters are "point"
//	var details_id = "details" + target_id_number;//here's an alternate way that worked in Chrome but not FF: var details_area = eval('(details' + target_id_number + ')');
//	document.getElementById(details_id).innerHTML='it's gone';
}

function show_spinner(which_spinner){
	document.getElementById(which_spinner).innerHTML='<img id="img-spinner" src="images/spinner.gif" alt="Loading..."/>';
}

function show_conversation_area(point_id){
	target_id_number = String(point_id).slice(5,String(point_id).length);//the slice always starts with 5 because the first five characters are "point"
	var conversation_area_id = "conversation_area" + target_id_number;//here's an alternate way that worked in Chrome but not FF: var details_area = eval('(details' + target_id_number + ')');
	alert(conversation_area_id);
	document.getElementById(conversation_area_id).innerHTML='booyah';//original; the problem is that it blinks on mouseover when onmouseout is applied
}
function popup(){
	alert('hi');
}